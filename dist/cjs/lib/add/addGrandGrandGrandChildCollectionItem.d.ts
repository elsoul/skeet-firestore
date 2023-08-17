import { Ref } from 'typesaurus';
/**
 * `addGrandGrandGrandChildCollectionItem` is a function to add an item to a specified grand-grand-grandchild Firestore collection.
 *
 * @template GrandGrandGrandChild - Type of the object to be saved in the grand-grand-grandchild Firestore collection.
 * @template GrandGrandChild - Type of the object in the grand-grandchild Firestore collection.
 * @template GrandChild - Type of the object in the grandchild Firestore collection.
 * @template Child - Type of the object in the child Firestore collection.
 * @template Parent - Type of the object in the parent Firestore collection.
 *
 * @param {string} parentCollectionName - Name of the parent Firestore collection.
 * ... [other parameters]
 * @param {GrandGrandGrandChild} params - Data to be saved in the grand-grand-grandchild Firestore collection.
 * @param {string} [id] - Document ID for the grand-grand-grandchild collection. If not specified, a random ID is generated.
 *
 * @returns {Promise<Ref<GrandGrandGrandChild>>} - Reference to the added item in the grand-grand-grandchild collection.
 *
 * @example
 * ```typescript
 * import { addGrandGrandGrandChildCollectionItem } from '@skeet-framework/firestore'
 *
 * const parentCollectionName = 'Planet';
 * ... [other collection names]
 * const grandGrandGrandChildCollectionName = 'House';
 * const parentId = 'Earth';
 * ... [other IDs]
 * const grandGrandChildId = 'MainStreet';
 *
 * const grandGrandChildDoc = await getGrandGrandChildCollectionItem<Street, City, State, Country>(
 *  parentCollectionName,
 *  childCollectionName,
 *  grandChildCollectionName,
 *  grandGrandChildCollectionName,
 *  parentId,
 *  childId,
 *  grandChildId
 * )
 *
 * const houseParams = {
 *   grandGrandChild: grandGrandChildDoc.ref,
 *   houseNumber: '123',
 *   color: 'Blue',
 *   residents: 4,
 * }
 *
 * const houseRef = await addGrandGrandGrandChildCollectionItem<House, Street, City, State, Country>(
 *   parentCollectionName,
 *   childCollectionName,
 *   ... [other collection names and IDs],
 *   houseParams,
 *   houseParams.houseNumber
 * );
 * ```
 *
 * @throws {Error} - If an error occurs during Firestore operations.
 */
export declare const addGrandGrandGrandChildCollectionItem: <GrandGrandGrandChild, GrandGrandChild, GrandChild, Child, Parent>(parentCollectionName: string, childCollectionName: string, grandChildCollectionName: string, grandGrandChildCollectionName: string, grandGrandGrandChildCollectionName: string, parentId: string, childId: string, grandChildId: string, grandGrandChildId: string, params: GrandGrandGrandChild, id?: string) => Promise<Ref<GrandGrandGrandChild>>;
