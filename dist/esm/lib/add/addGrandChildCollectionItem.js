import { add, collection, subcollection, set, get } from 'typesaurus';
import { FieldValue } from 'firebase-admin/firestore';
export const addGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, parentId, childId, params, id) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const childCollection = subcollection(childCollectionName, parentCollection);
        const grandChildCollection = subcollection(grandChildCollectionName, childCollection(parentId));
        const body = grandChildCollection(childId);
        const datetimeNow = await FieldValue.serverTimestamp();
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
            const doc = await get(body, collectionId);
            if (!doc)
                throw new Error('doc is undefined');
            return doc.ref;
        }
    }
    catch (error) {
        throw new Error(`addGrandChildCollectionItem(${grandChildCollectionName}): ${error}`);
    }
};
//# sourceMappingURL=addGrandChildCollectionItem.js.map