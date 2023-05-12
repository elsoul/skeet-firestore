import { collection, subcollection, query } from 'typesaurus';
export const queryGrandGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, grandGrandChildCollectionName, parentId, childCollectionId, grandChildCollectionId, queries) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const childCollection = subcollection(childCollectionName, parentCollection);
        const grandChildCollection = subcollection(grandChildCollectionName, childCollection(parentId));
        const grandGrandChildCollection = subcollection(grandGrandChildCollectionName, grandChildCollection(childCollectionId));
        const data = await query(grandGrandChildCollection(grandChildCollectionId), queries);
        if (data.length === 0)
            throw new Error(`no data found for ${grandChildCollectionName}`);
        return data;
    }
    catch (error) {
        throw new Error(`getGrandGrandChildCollectionItem: ${error}`);
    }
};
//# sourceMappingURL=queryGrandGrandChildCollectionItem.js.map