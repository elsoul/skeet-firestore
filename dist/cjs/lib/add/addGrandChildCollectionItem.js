"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addGrandChildCollectionItem = void 0;
const typesaurus_1 = require("typesaurus");
/**
 * `addGrandChildCollectionItem` is a function to add an item to a specified grandchild Firestore collection.
 *
 * @template GrandChild - Type of the object to be saved in the grandchild Firestore collection.
 * @template Child - Type of the object in the child Firestore collection.
 * @template Parent - Type of the object in the parent Firestore collection.
 *
 * @param {string} parentCollectionName - Name of the parent Firestore collection.
 * @param {string} childCollectionName - Name of the child Firestore collection.
 * @param {string} grandChildCollectionName - Name of the grandchild Firestore collection.
 * @param {string} parentId - Document ID of the parent collection item.
 * @param {string} childId - Document ID of the child collection item.
 * @param {GrandChild} params - Data to be saved in the grandchild Firestore collection.
 * @param {string} [id] - Document ID for the grandchild collection. If not specified, a random ID is generated.
 *
 * @returns {Promise<Ref<GrandChild>>} - Reference to the added item in the grandchild collection.
 *
 * @example
 * ```typescript
 * import { addGrandChildCollectionItem } from '@skeet-framework/firestore'
 *
 * const parentCollectionName = 'User';
 * const childCollectionName = 'Orders';
 * const grandChildCollectionName = 'Items';
 * const parentId = 'XXX';
 * const childId = 'YYY';
 * const userDoc = await getCollectionItem<User>(parentCollectionName, parentId)
 * const orderDoc = await getChildCollectionItem<Order, User>(
 *  parentCollectionName,
 *  childCollectionName,
 *  parentId,
 *  childId
 * )
 *
 * const itemParams = {
 *   child: orderDoc.ref,
 *   itemId: '123',
 *   productName: 'Some Product',
 *   quantity: 2,
 * }
 *
 * const itemRef = await addGrandChildCollectionItem<Item, Order, User>(
 *   parentCollectionName,
 *   childCollectionName,
 *   grandChildCollectionName,
 *   parentId,
 *   childId,
 *   itemParams,
 *   itemParams.itemId
 * );
 * ```
 *
 * @throws {Error} - If an error occurs during Firestore operations.
 */
const addGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, parentId, childId, params, id) => {
    try {
        const parentCollection = (0, typesaurus_1.collection)(parentCollectionName);
        const childCollection = (0, typesaurus_1.subcollection)(childCollectionName, parentCollection);
        const grandChildCollection = (0, typesaurus_1.subcollection)(grandChildCollectionName, childCollection(parentId));
        const body = grandChildCollection(childId);
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
        throw new Error(`addGrandChildCollectionItem(${grandChildCollectionName}): ${error}`);
    }
};
exports.addGrandChildCollectionItem = addGrandChildCollectionItem;
//# sourceMappingURL=addGrandChildCollectionItem.js.map