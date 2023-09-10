import { createCollectionRef } from './createCollectionRef';
import { serverTimestamp, addDoc, setDoc, } from 'firebase/firestore';
import { createDocRef } from './createDocRef';
/**
 * Asynchronously adds a new document to a Firestore collection.
 * If an ID is provided, the document with that ID is set with the new data.
 *
 * @template T - The type that extends `DocumentData` which the new document is expected to conform to.
 * @param {Firestore} db - The Firestore database instance.
 * @param {string} collectionPath - The path to the Firestore collection.
 * @param {T} params - The data to be added to the new document.
 * @param {string} [id] - Optional. The ID of the document to set. If not provided, Firestore will auto-generate an ID.
 *
 * @returns {Promise<DocumentReference<T>>} - A promise that resolves to the reference of the newly added document.
 *
 * @throws Will throw an error if the document could not be added.
 *
 * @example
 * ```typescript
 * const db: Firestore = getFirestore();
 * const params: UserData = { name: 'John', age: 30 };
 * const newDocRef = await addCollectionItem(db, 'users', params);
 * console.log('New document added with ID:', newDocRef.id);
 * ```
 */
export const addCollectionItem = async (db, collectionPath, params, id) => {
    try {
        console.log(`db:`, db);
        console.log(`collectionPath:`, collectionPath);
        console.log(`params:`, params);
        console.log(`id:`, id);
        if (id) {
            const docRef = createDocRef(db, collectionPath, id);
            await setDoc(docRef, {
                ...params,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
            });
            return docRef;
        }
        else {
            const collectionRef = createCollectionRef(db, collectionPath);
            console.log(`colelctionRef:`, collectionRef);
            const data = await addDoc(collectionRef, {
                ...params,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
            });
            console.log('data:', data);
            if (!data) {
                throw new Error('no data');
            }
            return data;
        }
    }
    catch (error) {
        throw new Error(`Error adding document: ${error}`);
    }
};
//# sourceMappingURL=addCollectionItem.js.map