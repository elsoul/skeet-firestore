import { collection, subcollection, remove } from 'typesaurus';
export const removeGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, parentId, childCollectionId, grandChildCollectionId) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const childCollection = subcollection(childCollectionName, parentCollection);
        const grandChildCollection = subcollection(grandChildCollectionName, childCollection(parentId));
        await remove(grandChildCollection(childCollectionId), grandChildCollectionId);
        return true;
    }
    catch (error) {
        throw new Error(`removeGrandChildCollectionItem(${grandChildCollectionName}): ${error}`);
    }
};
//# sourceMappingURL=removeGrandChildCollectionItem.js.map