import { getDoc } from 'firebase/firestore';
import { createDocRef } from './createDocRef';
/**
 * Asynchronously fetches a single document from a Firestore collection by its ID.
 *
 * @template T - The type that extends `DocumentData` which the document is expected to conform to.
 * @param {Firestore} db - The Firestore database instance.
 * @param {string} collectionPath - The path to the Firestore collection.
 * @param {string} docId - The ID of the document to fetch.
 *
 * @returns {Promise<T>} - A promise that resolves to the fetched document data.
 *
 * @throws Will throw an error if the document does not exist.
 * @throws Will throw an error if the document exists but contains no data.
 *
 * @example
 * ```typescript
 * const db: Firestore = getFirestore();
 * const userData = await getCollectionItem<UserData>(db, 'users', 'user123');
 * ```
 */
export const getCollectionItem = async (db, collectionPath, docId) => {
    const dataRef = createDocRef(db, collectionPath, docId);
    const docSnap = await getDoc(dataRef);
    if (!docSnap.exists()) {
        throw new Error('Document not found at path: ' + dataRef.path);
    }
    const data = docSnap.data();
    if (!data)
        throw new Error('Document data not found at path: ' + dataRef.path);
    return data;
};
//# sourceMappingURL=getCollectionItem.js.map