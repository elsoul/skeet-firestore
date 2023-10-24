"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upsertCollectionItem = void 0;
const createFirestoreDataConverter_1 = require("./createFirestoreDataConverter");
const serverTimestamp_1 = require("./serverTimestamp");
/**
 * Updates or inserts a document in the specified Firestore collection with the given data.
 *
 * @param db - The instance of the Firestore database to use.
 * @param collectionPath - The path of the collection containing the document to be updated or inserted.
 * @param docId - The ID of the document to be updated or inserted.
 * @param params - The data to update or insert the document with.
 *
 * @returns A boolean indicating the success of the upsert operation.
 *
 * @throws Throws an exception with an error message if an error occurs.
 *
 * @example
 * ```typescript
 * import { firestore } from 'firebase-admin';
 * import { upsert } from '@skeet-framework/firestore';
 *
 * const db = firestore();
 * const upsertData: firestore.UpdateData<User> = {
 *   age: 31
 * };
 *
 * async function run() {
 *   try {
 *     const path = 'Users';
 *     const docId = '123456'; // Assuming this ID exists in the Users collection.
 *     const success = await upsert<User>(db, path, docId, upsertData);
 *     if (success) {
 *       console.log(`Document with ID ${docId} upserted successfully.`);
 *     }
 *   } catch (error) {
 *     console.error(`Error upserting document: ${error}`);
 *   }
 * }
 *
 * run();
 * ```
 */
const upsertCollectionItem = async (db, collectionPath, docId, params) => {
    try {
        const docRef = db
            .collection(collectionPath)
            .doc(docId)
            .withConverter((0, createFirestoreDataConverter_1.createFirestoreDataConverter)());
        const docSnapshot = await docRef.get();
        if (docSnapshot.exists) {
            // Create a new object combining params with the updatedAt field
            const updateData = Object.assign({}, params, {
                updatedAt: (0, serverTimestamp_1.serverTimestamp)(),
            });
            await docRef.update(updateData);
        }
        else {
            // Create a new object combining params with the createdAt and updatedAt fields
            const setData = Object.assign({}, params, {
                createdAt: (0, serverTimestamp_1.serverTimestamp)(),
                updatedAt: (0, serverTimestamp_1.serverTimestamp)(),
            });
            await docRef.set(setData);
        }
        return true;
    }
    catch (error) {
        throw new Error(`Error upserting document with ID ${docId}: ${error}`);
    }
};
exports.upsertCollectionItem = upsertCollectionItem;
//# sourceMappingURL=upsertCollectionItem.js.map