"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCollectionItem = void 0;
const typesaurus_1 = require("typesaurus");
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
const addCollectionItem = async (collectionName, params, id) => {
    try {
        const mainCollection = (0, typesaurus_1.collection)(collectionName);
        const datetimeNow = (0, typesaurus_1.value)('serverDate');
        const data = {
            ...params,
            createdAt: datetimeNow,
            updatedAt: datetimeNow,
        };
        if (!id) {
            return await (0, typesaurus_1.add)(mainCollection, data);
        }
        await (0, typesaurus_1.upset)(mainCollection, id, data);
        const doc = await (0, typesaurus_1.get)(mainCollection, id);
        if (!doc)
            throw new Error('Document is undefined');
        return doc.ref;
    }
    catch (error) {
        throw new Error(`addCollectionItem(${collectionName}): ${error}`);
    }
};
exports.addCollectionItem = addCollectionItem;
//# sourceMappingURL=addCollectionItem.js.map