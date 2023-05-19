import { collection, update } from 'typesaurus';
import { getTimestamp } from '@/utils/time';
export const updateCollectionItem = async (collectionName, collectionId, params) => {
    try {
        const mainCollection = collection(collectionName);
        const data = {
            ...params,
            updatedAt: getTimestamp(),
        };
        await update(mainCollection, collectionId, data);
        return true;
    }
    catch (error) {
        throw new Error(`updateCollectionItem(${collectionName}): ${error}`);
    }
};
//# sourceMappingURL=updateCollectionItem.js.map