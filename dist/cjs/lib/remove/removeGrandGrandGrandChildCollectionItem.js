"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeGrandGrandGrandChildCollectionItem = void 0;
const typesaurus_1 = require("typesaurus");
const removeGrandGrandGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, grandGrandChildCollectionName, grandGrandGrandChildCollectionName, parentId, childId, grandChildId, grandGrandChildId, grandGrandGrandChildId) => {
    try {
        const parentCollection = (0, typesaurus_1.collection)(parentCollectionName);
        const childCollection = (0, typesaurus_1.subcollection)(childCollectionName, parentCollection);
        const grandChildCollection = (0, typesaurus_1.subcollection)(grandChildCollectionName, childCollection(parentId));
        const grandGrandChildCollection = (0, typesaurus_1.subcollection)(grandGrandChildCollectionName, grandChildCollection(childId));
        const grandGrandGrandChildCollection = (0, typesaurus_1.subcollection)(grandGrandGrandChildCollectionName, grandGrandChildCollection(grandChildId));
        await (0, typesaurus_1.remove)(grandGrandGrandChildCollection(grandGrandChildId), grandGrandGrandChildId);
        return true;
    }
    catch (error) {
        throw new Error(`removeGrandGrandGrandChildCollectionItem(${grandGrandGrandChildCollectionName}): ${error}`);
    }
};
exports.removeGrandGrandGrandChildCollectionItem = removeGrandGrandGrandChildCollectionItem;
//# sourceMappingURL=removeGrandGrandGrandChildCollectionItem.js.map