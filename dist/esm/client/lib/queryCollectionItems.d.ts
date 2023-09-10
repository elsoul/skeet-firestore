import { Firestore, DocumentData, QueryConstraint } from 'firebase/firestore';
/**
 * Asynchronously queries a Firestore collection based on specified conditions and returns the matching documents.
 *
 * @template T - The type that extends `DocumentData` which the documents in the collection are expected to conform to.
 * @param {Firestore} db - The Firestore database instance.
 * @param {string} collectionPath - The path to the Firestore collection.
 * @param {QueryConstraint[]} conditions - An array of query constraints to apply.
 *
 * @returns {Promise<T[]>} - A promise that resolves to an array of the fetched documents, each augmented with its document ID.
 *
 * @throws Will throw an error if the query could not be executed.
 *
 * @example
 * ```typescript
 * const db: Firestore = getFirestore();
 * const conditions: QueryConstraint[] = [where('age', '>=', 21)];
 * const users = await queryCollectionItems<UserData>(db, 'users', conditions);
 * ```
 */
export declare const queryCollectionItems: <T extends DocumentData>(db: Firestore, collectionPath: string, conditions: QueryConstraint[]) => Promise<T[]>;
