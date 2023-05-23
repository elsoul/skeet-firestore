import { collection, subcollection, query } from 'typesaurus';
export const queryGrandGrandGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, grandGrandChildCollectionName, grandGrandGrandChildCollectionName, parentId, childCollectionId, grandChildCollectionId, grandGrandChildCollectionId, queries) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const childCollection = subcollection(childCollectionName, parentCollection);
        const grandChildCollection = subcollection(grandChildCollectionName, childCollection(parentId));
        const grandGrandChildCollection = subcollection(grandGrandChildCollectionName, grandChildCollection(childCollectionId));
        const grandGrandGrandChildCollection = subcollection(grandGrandGrandChildCollectionName, grandGrandChildCollection(grandChildCollectionId));
        const data = await query(grandGrandGrandChildCollection(grandGrandChildCollectionId), queries);
        if (data.length === 0)
            throw new Error(`no data found for ${grandGrandGrandChildCollectionName}`);
        return data;
    }
    catch (error) {
        return [];
    }
};
//# sourceMappingURL=queryGrandGrandGrandChildCollectionItem.js.map