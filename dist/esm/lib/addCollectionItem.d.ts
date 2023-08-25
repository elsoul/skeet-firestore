import { firestore } from 'firebase-admin';
import * as admin from 'firebase-admin';
/**
 * Adds a new document to the specified collection in Firestore.
 *
 * @param db - The instance of the Firestore database to use.
 * @param collectionPath - The path of the collection to which the document will be added.
 * @param params - The data of the document to be added.
 *
 * @returns A reference to the added document.
 *
 * @throws Throws an exception with an error message if an error occurs.
 *
 * @example
 * ```typescript
 * import { firestore } from 'firebase-admin'
 * import * as admin from 'firebase-admin'
 * import { add } from '@skeet-framework/firestore'
 *
 * const db = admin.firestore();
 * const data: User = {
 *   name: "John Doe",
 *   age: 30
 * };
 *
 * async function run() {
 *   try {
 *     const path = 'Users'
 *     const docRef = await add<User>(db, path, data);
 *     console.log(`Document added with ID: ${docRef.id}`);
 *   } catch (error) {
 *     console.error(`Error adding document: ${error}`);
 *   }
 * }
 *
 * run();
 * ```
 */
export declare const addCollectionItem: <T extends firestore.DocumentData>(db: admin.firestore.Firestore, collectionPath: string, params: T) => Promise<firestore.DocumentReference<T>>;
