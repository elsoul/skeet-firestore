import { collection, query } from 'typesaurus';
export const queryCollectionItem = async (collectionName, queries) => {
    try {
        const parentCollection = collection(collectionName);
        const data = await query(parentCollection, queries);
        if (data.length === 0)
            throw new Error(`no data found for ${collectionName}`);
        return data;
    }
    catch (error) {
        return [];
    }
};
//# sourceMappingURL=queryCollectionItem.js.map