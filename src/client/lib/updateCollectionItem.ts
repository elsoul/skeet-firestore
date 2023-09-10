import {
  DocumentData,
  Firestore,
  UpdateData,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore'
import { createDocRef } from './createDocRef'

/**
 * Asynchronously updates a single document in a Firestore collection by its ID.
 *
 * @template T - The type that extends `DocumentData` which the document is expected to conform to.
 * @param {Firestore} db - The Firestore database instance.
 * @param {string} collectionPath - The path to the Firestore collection.
 * @param {string} docId - The ID of the document to update.
 * @param {UpdateData<T>} params - The fields and their new values to update in the document.
 *
 * @returns {Promise<boolean>} - A promise that resolves to `true` if the document was successfully updated.
 *
 * @throws Will throw an error if the document could not be updated.
 *
 * @example
 * ```typescript
 * const db: Firestore = getFirestore();
 * const params: UpdateData<UserData> = { age: 22 };
 * const isUpdated = await updateCollectionItem(db, 'users', 'user123', params);
 * if (isUpdated) {
 *   console.log('Document successfully updated.');
 * }
 * ```
 */

export const updateCollectionItem = async <T extends DocumentData>(
  db: Firestore,
  collectionPath: string,
  docId: string,
  params: UpdateData<T>
): Promise<boolean> => {
  try {
    const docRef = createDocRef<T>(db, collectionPath, docId)
    await updateDoc(docRef, { ...params, updatedAt: serverTimestamp() })
    return true
  } catch (error) {
    throw new Error(`Error updating document with ID ${docId}: ${error}`)
  }
}
