"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addChildCollectionItem = void 0;
const typesaurus_1 = require("typesaurus");
/**
 * `addChildCollectionItem` is a function to add an item to a specified child Firestore collection.
 *
 * @template Child - Type of the object to be saved in the child Firestore collection.
 * @template Parent - Type of the object in the parent Firestore collection.
 *
 * @param {string} parentCollectionName - Name of the parent Firestore collection.
 * @param {string} childCollectionName - Name of the child Firestore collection.
 * @param {string} parentId - Document ID of the parent collection item.
 * @param {Child} params - Data to be saved in the child Firestore collection.
 * @param {string} [id] - Document ID for the child collection. If not specified, a random ID is generated.
 *
 * @returns {Promise<Ref<Child>>} - Reference to the added item in the child collection.
 *
 * @example
 * ```typescript
 * import { addChildCollectionItem } from '@skeet-framework/firestore'
 *
 * const parentCollectionName = 'User';
 * const childCollectionName = 'Orders';
 * const parentId = 'XXX';
 *
 * // Retrieve the parent document reference
 * const parentDoc = await getCollectionItem<User>(parentCollectionName, parentId)
 *
 * // Prepare child collection data
 * const orderParams = {
 *   parent: parentDoc.ref,
 *   orderId: '123',
 *   product: 'Some Product',
 *   quantity: 2,
 * }
 *
 * // Add item to the child collection
 * const orderRef = await addChildCollectionItem<Order, User>(
 *   parentCollectionName,
 *   childCollectionName,
 *   parentId,
 *   orderParams,
 *   orderParams.orderId
 * );
 * ```
 *
 * @throws {Error} - If an error occurs during Firestore operations.
 */
const addChildCollectionItem = async (parentCollectionName, childCollectionName, parentId, params, id) => {
    try {
        const parentCollection = (0, typesaurus_1.collection)(parentCollectionName);
        const mainCollection = (0, typesaurus_1.subcollection)(childCollectionName, parentCollection);
        const body = mainCollection(parentId);
        const datetimeNow = (0, typesaurus_1.value)('serverDate');
        const data = {
            ...params,
            createdAt: datetimeNow,
            updatedAt: datetimeNow,
        };
        if (!id) {
            return await (0, typesaurus_1.add)(body, data);
        }
        await (0, typesaurus_1.set)(body, id, data);
        const doc = await (0, typesaurus_1.get)(body, id);
        if (!doc)
            throw new Error('Document is undefined');
        return doc.ref;
    }
    catch (error) {
        throw new Error(`addChildCollectionItem(${childCollectionName}): ${error}`);
    }
};
exports.addChildCollectionItem = addChildCollectionItem;
//# sourceMappingURL=addChildCollectionItem.js.map