import { collection, subcollection, remove } from 'typesaurus';
export const removeGrandGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, grandGrandChildCollectionName, parentId, childCollectionId, grandChildCollectionId, grandGrandChildCollectionId) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const childCollection = subcollection(childCollectionName, parentCollection);
        const grandChildCollection = subcollection(grandChildCollectionName, childCollection(parentId));
        const grandGrandChildCollection = subcollection(grandGrandChildCollectionName, grandChildCollection(childCollectionId));
        await remove(grandGrandChildCollection(grandChildCollectionId), grandGrandChildCollectionId);
        return true;
    }
    catch (error) {
        throw new Error(`removeGrandGrandChildCollectionItem(${grandGrandChildCollectionName}): ${error}`);
    }
};
//# sourceMappingURL=removeGrandGrandChildCollectionItem.js.map