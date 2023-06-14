import { collection, subcollection, get } from 'typesaurus';
export const getGrandGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, grandGrandChildCollectionName, parentId, childCollectionId, grandChildCollectionId, grandGrandChildCollectionId) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const childCollection = subcollection(childCollectionName, parentCollection);
        const grandChildCollection = subcollection(grandChildCollectionName, childCollection(parentId));
        const grandGrandChildCollection = subcollection(grandGrandChildCollectionName, grandChildCollection(childCollectionId));
        const grandGrandChildCollectionItem = await get(grandGrandChildCollection(grandChildCollectionId), grandGrandChildCollectionId);
        if (!grandGrandChildCollectionItem)
            throw new Error('grandGrandChildCollectionItem is undefined');
        return grandGrandChildCollectionItem;
    }
    catch (error) {
        return null;
    }
};
//# sourceMappingURL=getGrandGrandChildCollectionItem.js.map