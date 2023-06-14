import { collection, subcollection, get } from 'typesaurus';
export const getGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, parentId, childCollectionId, grandChildCollectionId) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const childCollection = subcollection(childCollectionName, parentCollection);
        const grandChildCollection = subcollection(grandChildCollectionName, childCollection(parentId));
        const grandChildCollectionItem = await get(grandChildCollection(childCollectionId), grandChildCollectionId);
        if (!grandChildCollectionItem)
            throw new Error('getGrandChildCollectionItem is undefined');
        return grandChildCollectionItem;
    }
    catch (error) {
        return null;
    }
};
//# sourceMappingURL=getGrandChildCollectionItem.js.map