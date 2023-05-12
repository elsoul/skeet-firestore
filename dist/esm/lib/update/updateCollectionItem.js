import { collection, update } from 'typesaurus';
import { getTimestamp } from '../../utils/time';
export const updateCollectionItem = async (collectionName, collectionId, params) => {
    try {
        const mainCollection = collection(collectionName);
        const data = {
            ...params,
            updatedAt: getTimestamp(),
        };
        await update(mainCollection, collectionId, data);
    }
    catch (error) {
        throw new Error(`addCollectionItem: ${error}`);
    }
};
//# sourceMappingURL=updateCollectionItem.js.map