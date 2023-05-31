import { collection, update } from 'typesaurus';
import { FieldValue } from 'firebase-admin/firestore';
export const updateCollectionItem = async (collectionName, collectionId, params) => {
    try {
        const mainCollection = collection(collectionName);
        const data = {
            ...params,
            updatedAt: FieldValue.serverTimestamp(),
        };
        await update(mainCollection, collectionId, data);
        return true;
    }
    catch (error) {
        throw new Error(`updateCollectionItem(${collectionName}): ${error}`);
    }
};
//# sourceMappingURL=updateCollectionItem.js.map