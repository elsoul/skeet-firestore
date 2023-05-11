import { collection, get } from 'typesaurus';
export const isItemExists = async (collectionName, collectionId) => {
    try {
        const mainCollection = collection(collectionName);
        const collectionRef = await get(mainCollection, collectionId);
        if (!collectionRef)
            return false;
        return true;
    }
    catch (error) {
        throw new Error(`isItemExist: ${error}`);
    }
};
//# sourceMappingURL=isItemExists.js.map