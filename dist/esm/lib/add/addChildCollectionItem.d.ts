import { Ref } from 'typesaurus';
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
export declare const addChildCollectionItem: <Child, Parent>(parentCollectionName: string, childCollectionName: string, parentId: string, params: Child, id?: string) => Promise<Ref<Child>>;
