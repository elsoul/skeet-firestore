import { Firestore, DocumentData, DocumentReference } from 'firebase/firestore';
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
export declare const addCollectionItem: <T extends DocumentData>(db: Firestore, collectionPath: string, params: T, id?: string) => Promise<DocumentReference<T, DocumentData>>;
