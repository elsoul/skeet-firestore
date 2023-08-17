import { collection, add, get, upset, value } from 'typesaurus';
/**
 * `addCollectionItem` is a function to add an item to a specified Firestore collection.
 *
 * @template T - Type of the object to be saved in Firestore.
 *
 * @param {string} collectionName - Name of the Firestore collection.
 * @param {T} params - Data to be saved in Firestore.
 * @param {string} [id] - Document ID. If not specified, a random ID is generated.
 *
 * @returns {Promise<Ref<T>>} - Reference to the added item.
 *
 * @example
 * ```typescript
 * import { addCollectionItem } from '@skeet-framework/firestore'
 * import { User } from '@/models'
 *
 * const userParams = {
 *   uid: 'XXX',
 *   email: 'info@epics.dev',
 *   username: 'EpicsDAO',
 * }
 *
 * const userRef = await addCollectionItem<User>('User', userParams, userParams.uid)
 * ```
 *
 * @throws {Error} - If an error occurs during Firestore operations.
 */
export const addCollectionItem = async (collectionName, params, id) => {
    try {
        const mainCollection = collection(collectionName);
        const datetimeNow = value('serverDate');
        const data = {
            ...params,
            createdAt: datetimeNow,
            updatedAt: datetimeNow,
        };
        if (!id) {
            return await add(mainCollection, data);
        }
        await upset(mainCollection, id, data);
        const doc = await get(mainCollection, id);
        if (!doc)
            throw new Error('Document is undefined');
        return doc.ref;
    }
    catch (error) {
        throw new Error(`addCollectionItem(${collectionName}): ${error}`);
    }
};
//# sourceMappingURL=addCollectionItem.js.map