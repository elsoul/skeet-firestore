import { collection, subcollection, get } from 'typesaurus';
export const getGrandGrandGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, grandGrandChildCollectionName, grandGrandGrandChildCollectionName, parentId, childId, grandChildId, grandGrandChildId, grandGrandGrandChildId) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const childCollection = subcollection(childCollectionName, parentCollection);
        const grandChildCollection = subcollection(grandChildCollectionName, childCollection(parentId));
        const grandGrandChildCollection = subcollection(grandGrandChildCollectionName, grandChildCollection(childId));
        const grandGrandGrandChildCollection = subcollection(grandGrandGrandChildCollectionName, grandGrandChildCollection(grandChildId));
        const grandGrandGrandChildCollectionItem = await get(grandGrandGrandChildCollection(grandGrandChildId), grandGrandGrandChildId);
        if (!grandGrandGrandChildCollectionItem)
            throw new Error('grandGrandGrandChildCollectionItem is undefined');
        return grandGrandGrandChildCollectionItem;
    }
    catch (error) {
        return null;
    }
};
//# sourceMappingURL=getGrandGrandGrandChildCollectionItem.js.map