import { collection, subcollection, update, value } from 'typesaurus';
export const updateChildCollectionItem = async (parentCollectionName, childCollectionName, parentId, childId, params) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const childCollection = subcollection(childCollectionName, parentCollection);
        const data = {
            ...params,
            updatedAt: value('serverDate'),
        };
        await update(childCollection(parentId), childId, data);
        return true;
    }
    catch (error) {
        throw new Error(`updateChildCollectionItem(${childCollectionName}): ${error}`);
    }
};
//# sourceMappingURL=updateChildCollectionItem.js.map