import { add, collection, subcollection, set, get } from 'typesaurus';
import { getTimestamp } from '@/utils/time';
export const addGrandGrandGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, grandGrandChildCollectionName, grandGrandGrandChildCollectionName, parentId, childId, grandChildId, grandGrandChildId, params, id) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const childCollection = subcollection(childCollectionName, parentCollection);
        const grandChildCollection = subcollection(grandChildCollectionName, childCollection(parentId));
        const grandGrandChildCollection = subcollection(grandGrandChildCollectionName, grandChildCollection(childId));
        const grandGrandGrandChildCollection = subcollection(grandGrandGrandChildCollectionName, grandGrandChildCollection(grandChildId));
        const body = grandGrandGrandChildCollection(grandGrandChildId);
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
        throw new Error(`addGrandGrandGrandChildCollectionItem: ${error}`);
    }
};
//# sourceMappingURL=addGrandGrandGrandChildCollectionItem.js.map