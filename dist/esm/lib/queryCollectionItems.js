import { createFirestoreDataConverter } from './createFirestoreDataConverter';
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
 * import { query } from '@skeet-framework/firestore'
 * const db = firestore();
 *
 * // Simple query to get users over 25 years old
 * const simpleConditions: QueryCondition[] = [
 *   { field: "age", operator: ">", value: 25 }
 * ];
 *
 * // Advanced query to get users over 25 years old, ordered by their names
 * const advancedConditions: QueryCondition[] = [
 *   { field: "age", operator: ">", value: 25 },
 *   { field: "name", orderDirection: "asc" }
 * ];
 *
 * // Query to get users over 25 years old and limit the results to 5
 * const limitedConditions: QueryCondition[] = [
 *   { field: "age", operator: ">", value: 25 },
 *   { limit: 5 }
 * ];
 *
 * async function run() {
 *   try {
 *     const path = 'Users';
 *
 *     // Using the simple conditions
 *     const usersByAge = await query<User>(db, path, simpleConditions);
 *     console.log(`Found ${usersByAge.length} users over 25 years old.`);
 *
 *     // Using the advanced conditions
 *     const orderedUsers = await query<User>(db, path, advancedConditions);
 *     console.log(`Found ${orderedUsers.length} users over 25 years old, ordered by name.`);
 *
 *     // Using the limited conditions
 *     const limitedUsers = await query<User>(db, path, limitedConditions);
 *     console.log(`Found ${limitedUsers.length} users over 25 years old, limited to 5.`);
 *
 *   } catch (error) {
 *     console.error(`Error querying collection: ${error}`);
 *   }
 * }
 *
 * run();
 * ```
 */
export const queryCollectionItems = async (db, collectionPath, conditions) => {
    try {
        let query = db
            .collection(collectionPath)
            .withConverter(createFirestoreDataConverter());
        for (const condition of conditions) {
            if (condition.field &&
                condition.operator &&
                condition.value !== undefined) {
                query = query.where(condition.field, condition.operator, condition.value);
            }
            if (condition.field && condition.orderDirection) {
                query = query.orderBy(condition.field, condition.orderDirection);
            }
            if (condition.limit !== undefined) {
                query = query.limit(condition.limit);
            }
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
//# sourceMappingURL=queryCollectionItems.js.map