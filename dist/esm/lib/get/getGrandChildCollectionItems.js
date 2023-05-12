import { collection, subcollection, query, order } from 'typesaurus';
export const getGrandChildCollectionItems = async (parentCollectionName, childCollectionName, grandChildCollectionName, parentId, childCollectionId) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const childCollection = subcollection(childCollectionName, parentCollection);
        const grandChildCollection = subcollection(grandChildCollectionName, childCollection(parentId));
        const childCollectionDocs = await query(grandChildCollection(childCollectionId), [order('createdAt', 'asc')]);
        const messages = [];
        for await (const childCollectionDoc of childCollectionDocs) {
            messages.push(childCollectionDoc.data);
        }
        return messages;
    }
    catch (error) {
        throw new Error(`getGrandChildCollectionItems: ${error}`);
    }
};
//# sourceMappingURL=getGrandChildCollectionItems.js.map