import { collection, add, get, upset } from 'typesaurus';
import { getTimestamp } from '@/utils/time';
export const addCollectionItem = async (params) => {
    try {
        const mainCollection = collection(params.collectionName);
        const datetimeNow = getTimestamp();
        const data = {
            ...params.body,
            createdAt: datetimeNow,
            updatedAt: datetimeNow,
        };
        if (!params.id) {
            return await add(mainCollection, data);
        }
        else {
            const collectionId = params.id || '1';
            await upset(mainCollection, collectionId, data);
            const collectionRef = await get(mainCollection, collectionId);
            if (!collectionRef)
                throw new Error('collectionRef is undefined');
            return collectionRef.ref;
        }
    }
    catch (error) {
        throw new Error(`addCollectionItem: ${error}`);
    }
};
//# sourceMappingURL=addCollectionItem.js.map