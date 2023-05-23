import { collection, query, subcollection } from 'typesaurus';
export const queryChildCollectionItem = async (parentCollectionName, childCollectionName, parentId, queries) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const childCollection = subcollection(childCollectionName, parentCollection);
        const data = await query(childCollection(parentId), queries);
        if (data.length === 0)
            throw new Error(`no data found for ${childCollectionName}`);
        return data;
    }
    catch (error) {
        return [];
    }
};
//# sourceMappingURL=queryChildCollectionItem.js.map