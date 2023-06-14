import { collection, get } from 'typesaurus';
export const getCollectionItem = async (parentCollectionName, parentId) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const parentCollectionItem = await get(parentCollection, parentId);
        if (!parentCollectionItem)
            throw new Error('parentCollectionItem is undefined');
        return parentCollectionItem;
    }
    catch (error) {
        return null;
    }
};
//# sourceMappingURL=getCollectionItem.js.map