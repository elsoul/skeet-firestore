import { collection, subcollection, remove } from 'typesaurus';
export const removeGrandGrandGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, grandGrandChildCollectionName, grandGrandGrandChildCollectionName, parentId, childId, grandChildId, grandGrandChildId, grandGrandGrandChildId) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const childCollection = subcollection(childCollectionName, parentCollection);
        const grandChildCollection = subcollection(grandChildCollectionName, childCollection(parentId));
        const grandGrandChildCollection = subcollection(grandGrandChildCollectionName, grandChildCollection(childId));
        const grandGrandGrandChildCollection = subcollection(grandGrandGrandChildCollectionName, grandGrandChildCollection(grandChildId));
        await remove(grandGrandGrandChildCollection(grandGrandChildId), grandGrandGrandChildId);
        return true;
    }
    catch (error) {
        throw new Error(`removeGrandGrandGrandChildCollectionItem(${grandGrandGrandChildCollectionName}): ${error}`);
    }
};
//# sourceMappingURL=removeGrandGrandGrandChildCollectionItem.js.map