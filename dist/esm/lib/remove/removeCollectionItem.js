import { collection, remove } from 'typesaurus';
export const removeCollectionItem = async (parentCollectionName, parentId) => {
    try {
        const parentCollection = collection(parentCollectionName);
        await remove(parentCollection, parentId);
        return true;
    }
    catch (error) {
        throw new Error(`removeCollectionItem(${parentCollectionName}): ${error}`);
    }
};
//# sourceMappingURL=removeCollectionItem.js.map