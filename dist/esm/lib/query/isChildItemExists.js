import { collection, get, subcollection } from 'typesaurus';
export const isChildItemExists = async (parentCollectionName, childCollectionName, parentId, childCollectionId) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const childCollection = subcollection(childCollectionName, parentCollection);
        const collectionRef = await get(childCollection(parentId), childCollectionId);
        if (!collectionRef)
            return false;
        return true;
    }
    catch (error) {
        throw new Error(`isChildItemExist: ${error}`);
    }
};
//# sourceMappingURL=isChildItemExists.js.map