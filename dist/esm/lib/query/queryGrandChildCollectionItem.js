import { collection, query, subcollection } from 'typesaurus';
export const queryGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, parentId, childCollectionId, queries) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const childCollection = subcollection(childCollectionName, parentCollection);
        const grandChildCollection = subcollection(grandChildCollectionName, childCollection(parentId));
        const data = await query(grandChildCollection(childCollectionId), queries);
        if (data.length === 0)
            throw new Error(`no data found for ${grandChildCollectionName}`);
        return data;
    }
    catch (error) {
        return [];
    }
};
//# sourceMappingURL=queryGrandChildCollectionItem.js.map