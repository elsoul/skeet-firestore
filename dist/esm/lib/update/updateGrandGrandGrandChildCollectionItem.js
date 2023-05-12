import { collection, subcollection, update } from 'typesaurus';
import { getTimestamp } from '../../utils/time';
export const updateGrandGrandGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, grandGrandChildCollectionName, grandGrandGrandChildCollectionName, parentId, childId, grandChildId, grandGrandChildId, grandGrandGrandChildId, params) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const childCollection = subcollection(childCollectionName, parentCollection);
        const grandChildCollection = subcollection(grandChildCollectionName, childCollection(parentId));
        const grandGrandChildCollection = subcollection(grandGrandChildCollectionName, grandChildCollection(childId));
        const grandGrandGrandChildCollection = subcollection(grandGrandGrandChildCollectionName, grandGrandChildCollection(grandChildId));
        const data = {
            ...params,
            updatedAt: getTimestamp(),
        };
        await update(grandGrandGrandChildCollection(grandGrandChildId), grandGrandGrandChildId, data);
    }
    catch (error) {
        throw new Error(`addGrandGrandGrandChildCollectionItem: ${error}`);
    }
};
//# sourceMappingURL=updateGrandGrandGrandChildCollectionItem.js.map