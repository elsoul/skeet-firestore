import { collection, subcollection, update } from 'typesaurus';
import { getTimestamp } from '../../utils/time';
export const updateChildCollectionItem = async (parentCollectionName, childCollectionName, parentId, childId, params) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const childCollection = subcollection(childCollectionName, parentCollection);
        const data = {
            ...params,
            updatedAt: getTimestamp(),
        };
        await update(childCollection(parentId), childId, data);
        return true;
    }
    catch (error) {
        throw new Error(`updateChildCollectionItem: ${error}`);
    }
};
//# sourceMappingURL=updateChildCollectionItem.js.map