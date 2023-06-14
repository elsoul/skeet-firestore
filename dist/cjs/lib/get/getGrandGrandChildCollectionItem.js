"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGrandGrandChildCollectionItem = void 0;
const typesaurus_1 = require("typesaurus");
const getGrandGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, grandGrandChildCollectionName, parentId, childCollectionId, grandChildCollectionId, grandGrandChildCollectionId) => {
    try {
        const parentCollection = (0, typesaurus_1.collection)(parentCollectionName);
        const childCollection = (0, typesaurus_1.subcollection)(childCollectionName, parentCollection);
        const grandChildCollection = (0, typesaurus_1.subcollection)(grandChildCollectionName, childCollection(parentId));
        const grandGrandChildCollection = (0, typesaurus_1.subcollection)(grandGrandChildCollectionName, grandChildCollection(childCollectionId));
        const grandGrandChildCollectionItem = await (0, typesaurus_1.get)(grandGrandChildCollection(grandChildCollectionId), grandGrandChildCollectionId);
        if (!grandGrandChildCollectionItem)
            throw new Error('grandGrandChildCollectionItem is undefined');
        return grandGrandChildCollectionItem;
    }
    catch (error) {
        return null;
    }
};
exports.getGrandGrandChildCollectionItem = getGrandGrandChildCollectionItem;
//# sourceMappingURL=getGrandGrandChildCollectionItem.js.map