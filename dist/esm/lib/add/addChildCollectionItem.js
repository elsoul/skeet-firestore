import { collection, add, get, value, subcollection, set } from 'typesaurus';
export const addChildCollectionItem = async (parentCollectionName, childCollectionName, parentId, params, id) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const mainCollection = subcollection(childCollectionName, parentCollection);
        const body = mainCollection(parentId);
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
        throw new Error(`addChildCollectionItem(${childCollectionName}): ${error}`);
    }
};
//# sourceMappingURL=addChildCollectionItem.js.map