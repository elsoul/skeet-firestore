import { collection, subcollection, get } from 'typesaurus';
export const getChildCollectionItem = async (parentCollectionName, childCollectionName, parentId, childCollectionId) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const childCollection = subcollection(childCollectionName, parentCollection);
        const childCollectionItem = await get(childCollection(parentId), childCollectionId);
        if (!childCollectionItem)
            throw new Error(`${childCollectionName} is undefined`);
        return childCollectionItem;
    }
    catch (error) {
        return null;
    }
};
//# sourceMappingURL=getChildCollectionItem.js.map