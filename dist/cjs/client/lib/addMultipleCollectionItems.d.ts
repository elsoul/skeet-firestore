import { Firestore, DocumentData } from 'firebase/firestore';
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
export declare const addMultipleCollectionItems: <T extends DocumentData>(db: Firestore, collectionPath: string, items: T[]) => Promise<true | Error[]>;
