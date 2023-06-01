import { collection, subcollection, update, value } from 'typesaurus';
export const updateGrandGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, grandGrandChildCollectionName, parentId, childId, grandChildId, grandGrandChildId, params) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const childCollection = subcollection(childCollectionName, parentCollection);
        const grandChildCollection = subcollection(grandChildCollectionName, childCollection(parentId));
        const grandGrandChildCollection = subcollection(grandGrandChildCollectionName, grandChildCollection(childId));
        const data = {
            ...params,
            updatedAt: value('serverDate'),
        };
        await update(grandGrandChildCollection(grandChildId), grandGrandChildId, data);
        return true;
    }
    catch (error) {
        throw new Error(`updateGrandGrandChildCollectionItem(${grandGrandChildCollectionName}): ${error}`);
    }
};
//# sourceMappingURL=updateGrandGrandChildCollectionItem.js.map