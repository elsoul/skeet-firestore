import { collection, subcollection, remove } from 'typesaurus';
export const removeChildCollectionItem = async (parentCollectionName, childCollectionName, parentId, childCollectionId) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const childCollection = subcollection(childCollectionName, parentCollection);
        await remove(childCollection(parentId), childCollectionId);
        return true;
    }
    catch (error) {
        throw new Error(`removeChildCollectionItem(${childCollectionName}): ${error}`);
    }
};
//# sourceMappingURL=removeChildCollectionItem.js.map