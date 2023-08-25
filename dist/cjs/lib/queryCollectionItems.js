"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryCollectionItems = void 0;
const createFirestoreDataConverter_1 = require("./createFirestoreDataConverter");
/**
 * Queries the specified collection in Firestore based on the provided conditions
 * and returns an array of documents that match the conditions.
 *
 * @param db - The instance of the Firestore database to use.
 * @param collectionPath - The path of the collection to be queried.
 * @param conditions - An array of conditions to apply to the query.
 *
 * @returns An array of documents from the collection that match the conditions.
 *
 * @throws Throws an exception with an error message if an error occurs.
 *
 * @example
 * ```typescript
 * import { firestore } from 'firebase-admin'
 * import * as admin from 'firebase-admin'
 * import { query } from '@skeet-framework/firestore'
 *
 * const db = admin.firestore();
 * const conditions: QueryCondition[] = [
 *   { field: "age", operator: ">", value: 25 }
 * ];
 *
 * async function run() {
 *   try {
 *     const path = 'Users'
 *     const users = await query<User>(db, path, conditions);
 *     console.log(`Found ${users.length} users over 25 years old.`);
 *   } catch (error) {
 *     console.error(`Error querying collection: ${error}`);
 *   }
 * }
 *
 * run();
 * ```
 */
const queryCollectionItems = async (db, collectionPath, conditions) => {
    try {
        let query = db
            .collection(collectionPath)
            .withConverter((0, createFirestoreDataConverter_1.createFirestoreDataConverter)());
        for (const condition of conditions) {
            query = query.where(condition.field, condition.operator, condition.value);
        }
        const snapshot = await query.get();
        return snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
    }
    catch (error) {
        throw new Error(`Error querying collection: ${error}`);
    }
};
exports.queryCollectionItems = queryCollectionItems;
//# sourceMappingURL=queryCollectionItems.js.map