import { collection, subcollection, update } from 'typesaurus';
import { FieldValue } from 'firebase-admin/firestore';
export const updateChildCollectionItem = async (parentCollectionName, childCollectionName, parentId, childId, params) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const childCollection = subcollection(childCollectionName, parentCollection);
        const data = {
            ...params,
            updatedAt: FieldValue.serverTimestamp(),
        };
        await update(childCollection(parentId), childId, data);
        return true;
    }
    catch (error) {
        throw new Error(`updateChildCollectionItem(${childCollectionName}): ${error}`);
    }
};
//# sourceMappingURL=updateChildCollectionItem.js.map