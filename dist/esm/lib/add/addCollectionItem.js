import { collection, add, get, upset } from 'typesaurus';
import { getTimestamp } from '@/utils/time';
export const addCollectionItem = async (collectionName, params, id) => {
    try {
        const mainCollection = collection(collectionName);
        const datetimeNow = getTimestamp();
        const data = {
            ...params,
            createdAt: datetimeNow,
            updatedAt: datetimeNow,
        };
        if (!id) {
            return await add(mainCollection, data);
        }
        else {
            const collectionId = id || '1';
            await upset(mainCollection, collectionId, data);
            const doc = await get(mainCollection, collectionId);
            if (!doc)
                throw new Error('doc is undefined');
            return doc.ref;
        }
    }
    catch (error) {
        throw new Error(`addCollectionItem(${collectionName}): ${error}`);
    }
};
//# sourceMappingURL=addCollectionItem.js.map