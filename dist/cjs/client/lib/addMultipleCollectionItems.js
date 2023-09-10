"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMultipleCollectionItems = void 0;
const createCollectionRef_1 = require("./createCollectionRef");
const firestore_1 = require("firebase/firestore");
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
const addMultipleCollectionItems = async (db, collectionPath, items) => {
    const MAX_BATCH_SIZE = 500;
    const errors = [];
    const chunkedItems = items.length > MAX_BATCH_SIZE ? chunkArray(items, MAX_BATCH_SIZE) : [items];
    for (const chunk of chunkedItems) {
        try {
            const batch = (0, firestore_1.writeBatch)(db);
            const collectionRef = (0, createCollectionRef_1.createCollectionRef)(db, collectionPath);
            chunk.forEach((item) => {
                const docRef = (0, firestore_1.doc)(collectionRef);
                batch.set(docRef, {
                    ...item,
                    createdAt: (0, firestore_1.serverTimestamp)(),
                    updatedAt: (0, firestore_1.serverTimestamp)(),
                });
            });
            await batch.commit();
        }
        catch (error) {
            errors.push(new Error(`Error adding a batch of documents: ${error}`));
        }
    }
    if (errors.length > 0) {
        // Handle or report errors here
        console.error('Errors occurred:', errors);
        return errors;
    }
    return true;
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