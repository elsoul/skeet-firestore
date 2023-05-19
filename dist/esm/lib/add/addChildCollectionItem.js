import { add, collection, get, set, subcollection } from 'typesaurus';
import { getTimestamp } from '@/utils/time';
export const addChildCollectionItem = async (parentCollectionName, childCollectionName, parentId, params, id) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const mainCollection = subcollection(childCollectionName, parentCollection);
        const body = mainCollection(parentId);
        const datetimeNow = getTimestamp();
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