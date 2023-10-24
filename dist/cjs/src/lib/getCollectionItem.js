"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCollectionItem = void 0;
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
 * import { get } from '@skeet-framework/firestore'
 *
 * const db = admin.firestore();
 *
 * async function run() {
 *   try {
 *     const db = admin.firestore();
 *     const path = 'Users'
 *     const id = 'user123'
 *     const user = await get<User>(db, path, id)
 *     console.log(`Retrieved user: ${user.name}, age: ${user.age}`)
 *   } catch (error) {
 *     console.error(`Error retrieving document: ${error}`)
 *   }
 * }
 *
 * run();
 * ```
 */
const getCollectionItem = async (db, collectionPath, docId) => {
    const dataRef = db
        .collection(collectionPath)
        .doc(docId);
    const doc = await dataRef.get();
    if (!doc.exists) {
        return null;
    }
    const data = doc.data();
    if (!data)
        return null;
    return data;
};
exports.getCollectionItem = getCollectionItem;
//# sourceMappingURL=getCollectionItem.js.map