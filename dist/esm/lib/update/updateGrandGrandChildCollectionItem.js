import { collection, subcollection, update } from 'typesaurus';
import { getTimestamp } from '../../utils/time';
export const updateGrandGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, grandGrandChildCollectionName, parentId, childId, grandChildId, grandGrandChildId, params) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const childCollection = subcollection(childCollectionName, parentCollection);
        const grandChildCollection = subcollection(grandChildCollectionName, childCollection(parentId));
        const grandGrandChildCollection = subcollection(grandGrandChildCollectionName, grandChildCollection(childId));
        const data = {
            ...params,
            updatedAt: getTimestamp(),
        };
        await update(grandGrandChildCollection(grandChildId), grandGrandChildId, data);
    }
    catch (error) {
        throw new Error(`updateGrandGrandChildCollectionItem: ${error}`);
    }
};
//# sourceMappingURL=updateGrandGrandChildCollectionItem.js.map