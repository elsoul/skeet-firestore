import { add, collection, subcollection, set, get } from 'typesaurus';
import { getTimestamp } from '@/utils/time';
export const addGrandGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, grandGrandChildCollectionName, parentId, childId, grandChildId, params, id) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const childCollection = subcollection(childCollectionName, parentCollection);
        const grandChildCollection = subcollection(grandChildCollectionName, childCollection(parentId));
        const grandGrandChildCollection = subcollection(grandGrandChildCollectionName, grandChildCollection(childId));
        const body = grandGrandChildCollection(grandChildId);
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
            const collectionRef = await get(body, collectionId);
            if (!collectionRef)
                throw new Error('collectionRef is undefined');
            return collectionRef.ref;
        }
    }
    catch (error) {
        throw new Error(`addGrandGrandChildCollectionItem: ${error}`);
    }
};
//# sourceMappingURL=addGrandGrandChildCollectionItem.js.map