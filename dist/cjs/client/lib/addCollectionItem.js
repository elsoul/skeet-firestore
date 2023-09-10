"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCollectionItem = void 0;
const createCollectionRef_1 = require("./createCollectionRef");
const firestore_1 = require("firebase/firestore");
const createDocRef_1 = require("./createDocRef");
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
const addCollectionItem = async (db, collectionPath, params, id) => {
    try {
        if (id) {
            const docRef = (0, createDocRef_1.createDocRef)(db, collectionPath, id);
            await (0, firestore_1.setDoc)(docRef, {
                ...params,
                createdAt: (0, firestore_1.serverTimestamp)(),
                updatedAt: (0, firestore_1.serverTimestamp)(),
            });
            return docRef;
        }
        else {
            const collectionRef = (0, createCollectionRef_1.createCollectionRef)(db, collectionPath);
            console.log(`colelctionRef:`, collectionRef);
            const data = await (0, firestore_1.addDoc)(collectionRef, {
                ...params,
                createdAt: (0, firestore_1.serverTimestamp)(),
                updatedAt: (0, firestore_1.serverTimestamp)(),
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
exports.addCollectionItem = addCollectionItem;
//# sourceMappingURL=addCollectionItem.js.map