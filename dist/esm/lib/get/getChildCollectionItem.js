import { collection, subcollection, ref, get } from 'typesaurus';
export const getChildCollectionItem = async (parentCollectionName, childCollectionName, parentId, childCollectionId, isRef = true) => {
    try {
        const parentCollection = collection(parentCollectionName);
        const subCollection = subcollection(childCollectionName, parentCollection);
        const parentRef = ref(parentCollection, parentId);
        const subCollectionRef = ref(subCollection(parentRef), childCollectionId);
        const subCollectionDoc = await get(subCollection(parentId), childCollectionId);
        if (isRef)
            return subCollectionRef;
        return subCollectionDoc;
    }
    catch (error) {
        throw new Error(`getChildCollectionItem: ${error}`);
    }
};
//# sourceMappingURL=getChildCollectionItem.js.map