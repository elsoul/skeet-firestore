import { collection, update, value } from 'typesaurus';
export const updateCollectionItem = async (collectionName, collectionId, params) => {
    try {
        const mainCollection = collection(collectionName);
        const data = {
            ...params,
            updatedAt: value('serverDate'),
        };
        await update(mainCollection, collectionId, data);
        return true;
    }
    catch (error) {
        throw new Error(`updateCollectionItem(${collectionName}): ${error}`);
    }
};
//# sourceMappingURL=updateCollectionItem.js.map