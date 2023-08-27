"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMultipleCollectionItems = void 0;
const createCollectionRef_1 = require("./createCollectionRef");
const firestore_1 = require("firebase/firestore");
/**
 * Adds multiple documents to the specified collection in Firestore.
 * This function supports batched writes, and if the number of items exceeds the maximum batch size (500),
 * it will split the items into multiple batches and write them sequentially.
 *
 * @param db - The instance of the Firestore database to use.
 * @param collectionPath - The path of the collection to which the documents will be added.
 * @param items - An array of document data to be added.
 *
 * @returns An array of WriteResult arrays corresponding to each batch.
 *
 * @throws Throws an exception with an error message if an error occurs.
 *
 * @example
 * ```typescript
 * import { firestore } from 'firebase-admin'
 * import { adds } from '@skeet-framework/firestore'
 *
 * const db = firestore();
 * const users: User[] = [
 *   { name: "John Doe", age: 30 },
 *   { name: "Jane Smith", age: 25 },
 *   // ... more users ...
 * ];
 *
 * async function run() {
 *   try {
 *     const path = 'Users'
 *     const results = await adds<User>(db, path, users);
 *     console.log(`Added ${users.length} users in ${results.length} batches.`);
 *   } catch (error) {
 *     console.error(`Error adding documents: ${error}`);
 *   }
 * }
 *
 * run();
 * ```
 */
const addMultipleCollectionItems = async (db, collectionPath, items) => {
    const MAX_BATCH_SIZE = 500;
    const chunkedItems = items.length > 500 ? chunkArray(items, MAX_BATCH_SIZE) : [items];
    const batchResults = [];
    for (const chunk of chunkedItems) {
        try {
            const batch = db.batch();
            const collectionRef = (0, createCollectionRef_1.createCollectionRef)(db, collectionPath);
            chunk.forEach((item) => {
                const docRef = collectionRef.doc();
                batch.set(docRef, {
                    ...item,
                    createdAt: (0, firestore_1.serverTimestamp)(),
                    updatedAt: (0, firestore_1.serverTimestamp)(),
                });
            });
            const writeResults = await batch.commit();
            batchResults.push(writeResults);
        }
        catch (error) {
            throw new Error(`Error adding a batch of documents: ${error}`);
        }
    }
    return batchResults;
};
exports.addMultipleCollectionItems = addMultipleCollectionItems;
/**
 * Helper function to divide an array into chunks of a specified size.
 *
 * @param array - The array to be divided.
 * @param size - The size of each chunk.
 *
 * @returns An array of chunked arrays.
 */
function chunkArray(array, size) {
    const chunked = [];
    let index = 0;
    while (index < array.length) {
        chunked.push(array.slice(index, size + index));
        index += size;
    }
    return chunked;
}
//# sourceMappingURL=addMultipleCollectionItems.js.map