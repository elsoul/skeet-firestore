import { firestore } from 'firebase-admin'
import * as admin from 'firebase-admin'
/**
 * Retrieves a document from Firestore based on the provided document reference.
 *
 * @param dataRef - The document reference pointing to the desired Firestore document.
 *
 * @returns The data of the document as an object of type T.
 *
 * @throws Throws an exception if the document doesn't exist or if there is no data in the document.
 *
 * @example
 * ```typescript
 * import { firestore } from 'firebase-admin'
 * import * as admin from 'firebase-admin'
 * import { add, get } from '@skeet-framework/firestore'
 *
 * const db = admin.firestore();
 *
 * async function run() {
 *   try {
 *     const db = admin.firestore();
 *     const data: User = {
 *       name: "John Doe",
 *       age: 30
 *     };
 *     const path = 'Users'
 *     const docRef = await add<User>(db, path, data);
 *     const user = await get<User>(db, path, docRef.id);
 *     console.log(`Retrieved user: ${user.name}, age: ${user.age}`);
 *   } catch (error) {
 *     console.error(`Error retrieving document: ${error}`);
 *   }
 * }
 *
 * run();
 * ```
 */
export const getCollectionItem = async <T>(
  db: admin.firestore.Firestore,
  collectionPath: string,
  docId: string
): Promise<T> => {
  const dataRef = db
    .collection(collectionPath)
    .doc(docId) as FirebaseFirestore.DocumentReference<T>
  const doc = await dataRef.get()
  if (!doc.exists) {
    throw new Error('Document not found at path: ' + dataRef.path)
  }
  const data = doc.data()
  if (!data) throw new Error('Document data not found at path: ' + dataRef.path)
  return data
}
