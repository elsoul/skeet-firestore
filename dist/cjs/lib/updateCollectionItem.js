"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCollectionItem = void 0;
const createFirestoreDataConverter_1 = require("./createFirestoreDataConverter");
/**
 * Updates the specified document in the provided Firestore collection with the given data.
 *
 * @param db - The instance of the Firestore database to use.
 * @param collectionPath - The path of the collection containing the document to be updated.
 * @param docId - The ID of the document to be updated.
 * @param params - The data to update the document with.
 *
 * @returns A boolean indicating the success of the update operation.
 *
 * @throws Throws an exception with an error message if an error occurs.
 *
 * @example
 * ```typescript
 * const db = admin.firestore();
 * const updatedData: firestore.UpdateData<User> = {
 *   age: 31
 * };
 *
 * async function run() {
 *   try {
 *     const path = 'Users'
 *     const docId = '123456'; // Assuming this ID exists in the Users collection.
 *     const success = await updateCollectionItem<User>(db, path, docId, updatedData);
 *     if (success) {
 *       console.log(`Document with ID ${docId} updated successfully.`);
 *     }
 *   } catch (error) {
 *     console.error(`Error updating document: ${error}`);
 *   }
 * }
 *
 * run();
 * ```
 */
const updateCollectionItem = async (db, collectionPath, docId, params) => {
    try {
        const docRef = db
            .collection(collectionPath)
            .doc(docId)
            .withConverter((0, createFirestoreDataConverter_1.createFirestoreDataConverter)());
        await docRef.update(params);
        return true;
    }
    catch (error) {
        throw new Error(`Error updating document with ID ${docId}: ${error}`);
    }
};
exports.updateCollectionItem = updateCollectionItem;
//# sourceMappingURL=updateCollectionItem.js.map