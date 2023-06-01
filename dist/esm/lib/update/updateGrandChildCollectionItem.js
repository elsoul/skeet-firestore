import { collection, subcollection, update, value } from 'typesaurus';
export const updateGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, parentId, childId, grandChildId, params) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const childCollection = subcollection(childCollectionName, parentCollection);
        const grandChildCollection = subcollection(grandChildCollectionName, childCollection(parentId));
        const data = {
            ...params,
            updatedAt: value('serverDate'),
        };
        await update(grandChildCollection(childId), grandChildId, data);
        return true;
    }
    catch (error) {
        throw new Error(`updateGrandChildCollectionItem(${grandChildCollectionName}): ${error}`);
    }
};
//# sourceMappingURL=updateGrandChildCollectionItem.js.map