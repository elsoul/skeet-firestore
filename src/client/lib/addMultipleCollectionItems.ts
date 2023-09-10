import { createCollectionRef } from './createCollectionRef'
import {
  Firestore,
  DocumentData,
  serverTimestamp,
  writeBatch,
  doc,
} from 'firebase/firestore'

/**
 * Asynchronously adds multiple new documents to a Firestore collection in batches.
 * If an error occurs in any of the batches, it returns an array of errors.
 *
 * @template T - The type that extends `DocumentData` which the new documents are expected to conform to.
 * @param {Firestore} db - The Firestore database instance.
 * @param {string} collectionPath - The path to the Firestore collection.
 * @param {T[]} items - An array of items to be added to the collection.
 *
 * @returns {Promise<true | Error[]>} - A promise that resolves to `true` if all batches are successfully committed,
 * or an array of `Error` objects if any errors occurred.
 *
 * @example
 * ```typescript
 * const db: Firestore = getFirestore();
 * const items: UserData[] = [
 *   { name: 'John', age: 30 },
 *   { name: 'Jane', age: 25 }
 * ];
 * const result = await addMultipleCollectionItems(db, 'users', items);
 *
 * if (result === true) {
 *   console.log('All batches committed successfully.');
 * } else {
 *   console.error('Errors occurred:', result);
 * }
 * ```
 */

export const addMultipleCollectionItems = async <T extends DocumentData>(
  db: Firestore,
  collectionPath: string,
  items: T[]
): Promise<true | Error[]> => {
  const MAX_BATCH_SIZE = 500
  const errors: Error[] = []

  const chunkedItems =
    items.length > MAX_BATCH_SIZE ? chunkArray(items, MAX_BATCH_SIZE) : [items]

  for (const chunk of chunkedItems) {
    try {
      const batch = writeBatch(db)
      const collectionRef = createCollectionRef<T>(db, collectionPath)

      chunk.forEach((item) => {
        const docRef = doc(collectionRef)
        batch.set(docRef, {
          ...item,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        })
      })

      await batch.commit()
    } catch (error) {
      errors.push(new Error(`Error adding a batch of documents: ${error}`))
    }
  }

  if (errors.length > 0) {
    // Handle or report errors here
    console.error('Errors occurred:', errors)
    return errors
  }

  return true
}

/**
 * Helper function to divide an array into chunks of a specified size.
 *
 * @param array - The array to be divided.
 * @param size - The size of each chunk.
 *
 * @returns An array of chunked arrays.
 */
function chunkArray<T>(array: T[], size: number): T[][] {
  const chunked = []
  let index = 0
  while (index < array.length) {
    chunked.push(array.slice(index, size + index))
    index += size
  }
  return chunked
}
