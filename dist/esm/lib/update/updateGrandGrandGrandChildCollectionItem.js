import { collection, subcollection, update, value } from 'typesaurus';
export const updateGrandGrandGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, grandGrandChildCollectionName, grandGrandGrandChildCollectionName, parentId, childId, grandChildId, grandGrandChildId, grandGrandGrandChildId, params) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const childCollection = subcollection(childCollectionName, parentCollection);
        const grandChildCollection = subcollection(grandChildCollectionName, childCollection(parentId));
        const grandGrandChildCollection = subcollection(grandGrandChildCollectionName, grandChildCollection(childId));
        const grandGrandGrandChildCollection = subcollection(grandGrandGrandChildCollectionName, grandGrandChildCollection(grandChildId));
        const data = {
            ...params,
            updatedAt: value('serverDate'),
        };
        await update(grandGrandGrandChildCollection(grandGrandChildId), grandGrandGrandChildId, data);
        return true;
    }
    catch (error) {
        throw new Error(`updateGrandGrandGrandChildCollectionItem(${grandGrandChildCollectionName}): ${error}`);
    }
};
//# sourceMappingURL=updateGrandGrandGrandChildCollectionItem.js.map