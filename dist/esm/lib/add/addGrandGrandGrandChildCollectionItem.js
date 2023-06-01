import { collection, add, get, set, value, subcollection } from 'typesaurus';
export const addGrandGrandGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, grandGrandChildCollectionName, grandGrandGrandChildCollectionName, parentId, childId, grandChildId, grandGrandChildId, params, id) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const childCollection = subcollection(childCollectionName, parentCollection);
        const grandChildCollection = subcollection(grandChildCollectionName, childCollection(parentId));
        const grandGrandChildCollection = subcollection(grandGrandChildCollectionName, grandChildCollection(childId));
        const grandGrandGrandChildCollection = subcollection(grandGrandGrandChildCollectionName, grandGrandChildCollection(grandChildId));
        const body = grandGrandGrandChildCollection(grandGrandChildId);
        const datetimeNow = value('serverDate');
        const data = {
            ...params,
            createdAt: datetimeNow,
            updatedAt: datetimeNow,
        };
        if (!id) {
            return await add(body, data);
        }
        else {
            const collectionId = id || '1';
            await set(body, collectionId, data);
            const doc = await get(body, collectionId);
            if (!doc)
                throw new Error('doc is undefined');
            return doc.ref;
        }
    }
    catch (error) {
        throw new Error(`addGrandGrandGrandChildCollectionItem(${grandGrandGrandChildCollectionName}): ${error}`);
    }
};
//# sourceMappingURL=addGrandGrandGrandChildCollectionItem.js.map