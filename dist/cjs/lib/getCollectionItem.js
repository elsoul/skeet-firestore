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
const getCollectionItem = async (dataRef) => {
    const doc = await dataRef.get();
    if (!doc.exists) {
        throw new Error('Document not found at path: ' + dataRef.path);
    }
    const data = doc.data();
    if (!data)
        throw new Error('Document data not found at path: ' + dataRef.path);
    return data;
};
exports.getCollectionItem = getCollectionItem;
//# sourceMappingURL=getCollectionItem.js.map