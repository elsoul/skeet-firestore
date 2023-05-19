"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeGrandChildCollectionItem = void 0;
const typesaurus_1 = require("typesaurus");
const removeGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, parentId, childCollectionId, grandChildCollectionId) => {
    try {
        const parentCollection = (0, typesaurus_1.collection)(parentCollectionName);
        const childCollection = (0, typesaurus_1.subcollection)(childCollectionName, parentCollection);
        const grandChildCollection = (0, typesaurus_1.subcollection)(grandChildCollectionName, childCollection(parentId));
        await (0, typesaurus_1.remove)(grandChildCollection(childCollectionId), grandChildCollectionId);
        return true;
    }
    catch (error) {
        throw new Error(`removeGrandChildCollectionItem(${grandChildCollectionName}): ${error}`);
    }
};
exports.removeGrandChildCollectionItem = removeGrandChildCollectionItem;
//# sourceMappingURL=removeGrandChildCollectionItem.js.map