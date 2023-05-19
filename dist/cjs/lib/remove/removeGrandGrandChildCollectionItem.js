"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeGrandGrandChildCollectionItem = void 0;
const typesaurus_1 = require("typesaurus");
const removeGrandGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, grandGrandChildCollectionName, parentId, childCollectionId, grandChildCollectionId, grandGrandChildCollectionId) => {
    try {
        const parentCollection = (0, typesaurus_1.collection)(parentCollectionName);
        const childCollection = (0, typesaurus_1.subcollection)(childCollectionName, parentCollection);
        const grandChildCollection = (0, typesaurus_1.subcollection)(grandChildCollectionName, childCollection(parentId));
        const grandGrandChildCollection = (0, typesaurus_1.subcollection)(grandGrandChildCollectionName, grandChildCollection(childCollectionId));
        await (0, typesaurus_1.remove)(grandGrandChildCollection(grandChildCollectionId), grandGrandChildCollectionId);
        return true;
    }
    catch (error) {
        throw new Error(`removeGrandGrandChildCollectionItem(${grandGrandChildCollectionName}): ${error}`);
    }
};
exports.removeGrandGrandChildCollectionItem = removeGrandGrandChildCollectionItem;
//# sourceMappingURL=removeGrandGrandChildCollectionItem.js.map