import { firestore } from 'firebase-admin';
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
 * const db = admin.firestore();
 * const docRef = db.collection('Users').doc('123456'); // Assuming this ID exists in the Users collection.
 *
 * async function run() {
 *   try {
 *     const db = admin.firestore();
 *     const data: User = {
 *       name: "John Doe",
 *       age: 30
 *     };
 *     const path = 'Users'
 *     const docRef = await addCollectionItem<User>(db, path, data);
 *     const user = await getCollectionItem<User>(docRef.id);
 *     console.log(`Retrieved user: ${user.name}, age: ${user.age}`);
 *   } catch (error) {
 *     console.error(`Error retrieving document: ${error}`);
 *   }
 * }
 *
 * run();
 * ```
 */
export declare const getCollectionItem: <T>(dataRef: firestore.DocumentReference<T>) => Promise<T>;
