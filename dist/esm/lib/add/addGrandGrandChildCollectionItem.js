import { collection, add, set, get, value, subcollection, } from 'typesaurus';
/**
 * `addGrandGrandChildCollectionItem` is a function to add an item to a specified grand-grandchild Firestore collection.
 *
 * @template GrandGrandChild - Type of the object to be saved in the grand-grandchild Firestore collection.
 * @template GrandChild - Type of the object in the grandchild Firestore collection.
 * @template Child - Type of the object in the child Firestore collection.
 * @template Parent - Type of the object in the parent Firestore collection.
 *
 * @param {string} parentCollectionName - Name of the parent Firestore collection.
 * @param {string} childCollectionName - Name of the child Firestore collection.
 * @param {string} grandChildCollectionName - Name of the grandchild Firestore collection.
 * @param {string} grandGrandChildCollectionName - Name of the grand-grandchild Firestore collection.
 * @param {string} parentId - Document ID of the parent collection item.
 * @param {string} childId - Document ID of the child collection item.
 * @param {string} grandChildId - Document ID of the grandchild collection item.
 * @param {GrandGrandChild} params - Data to be saved in the grand-grandchild Firestore collection.
 * @param {string} [id] - Document ID for the grand-grandchild collection. If not specified, a random ID is generated.
 *
 * @returns {Promise<Ref<GrandGrandChild>>} - Reference to the added item in the grand-grandchild collection.
 *
 * @example
 * ```typescript
 * import { addGrandGrandChildCollectionItem } from '@skeet-framework/firestore'
 *
 * const parentCollectionName = 'Country';
 * const childCollectionName = 'State';
 * const grandChildCollectionName = 'City';
 * const grandGrandChildCollectionName = 'Street';
 * const parentId = 'US';
 * const childId = 'CA';
 * const grandChildId = 'LA';
 * const parentDoc = await getCollectionItem<Country>(parentCollectionName, parentId)
 * const childDoc = await getChildCollectionItem<State, Country>(
 *  parentCollectionName,
 *  childCollectionName,
 *  parentId,
 *  childId
 * )
 * const grandChildDoc = await getGrandChildCollectionItem<City, State, Country>(
 *  parentCollectionName,
 *  childCollectionName,
 *  grandChildCollectionName,
 *  parentId,
 *  childId,
 *  grandChildId
 * )
 *
 * const streetParams = {
 *   grandChild: grandChildDoc.ref,
 *   streetName: 'Sunset Blvd',
 *   zipCode: '90028',
 * }
 *
 * const streetRef = await addGrandGrandChildCollectionItem<Street, City, State, Country>(
 *   parentCollectionName,
 *   childCollectionName,
 *   grandChildCollectionName,
 *   grandGrandChildCollectionName,
 *   parentId,
 *   childId,
 *   grandChildId,
 *   streetParams,
 *   streetParams.streetName
 * );
 * ```
 *
 * @throws {Error} - If an error occurs during Firestore operations.
 */
export const addGrandGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, grandGrandChildCollectionName, parentId, childId, grandChildId, params, id) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const childCollection = subcollection(childCollectionName, parentCollection);
        const grandChildCollection = subcollection(grandChildCollectionName, childCollection(parentId));
        const grandGrandChildCollection = subcollection(grandGrandChildCollectionName, grandChildCollection(childId));
        const body = grandGrandChildCollection(grandChildId);
        const datetimeNow = value('serverDate');
        const data = {
            ...params,
            createdAt: datetimeNow,
            updatedAt: datetimeNow,
        };
        if (!id) {
            return await add(body, data);
        }
        await set(body, id, data);
        const doc = await get(body, id);
        if (!doc)
            throw new Error('Document is undefined');
        return doc.ref;
    }
    catch (error) {
        throw new Error(`addGrandGrandChildCollectionItem(${grandGrandChildCollectionName}): ${error}`);
    }
};
//# sourceMappingURL=addGrandGrandChildCollectionItem.js.map