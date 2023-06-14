"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGrandGrandGrandChildCollectionItem = void 0;
const typesaurus_1 = require("typesaurus");
const getGrandGrandGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, grandGrandChildCollectionName, grandGrandGrandChildCollectionName, parentId, childId, grandChildId, grandGrandChildId, grandGrandGrandChildId) => {
    try {
        const parentCollection = (0, typesaurus_1.collection)(parentCollectionName);
        const childCollection = (0, typesaurus_1.subcollection)(childCollectionName, parentCollection);
        const grandChildCollection = (0, typesaurus_1.subcollection)(grandChildCollectionName, childCollection(parentId));
        const grandGrandChildCollection = (0, typesaurus_1.subcollection)(grandGrandChildCollectionName, grandChildCollection(childId));
        const grandGrandGrandChildCollection = (0, typesaurus_1.subcollection)(grandGrandGrandChildCollectionName, grandGrandChildCollection(grandChildId));
        const grandGrandGrandChildCollectionItem = await (0, typesaurus_1.get)(grandGrandGrandChildCollection(grandGrandChildId), grandGrandGrandChildId);
        if (!grandGrandGrandChildCollectionItem)
            throw new Error('grandGrandGrandChildCollectionItem is undefined');
        return grandGrandGrandChildCollectionItem;
    }
    catch (error) {
        return null;
    }
};
exports.getGrandGrandGrandChildCollectionItem = getGrandGrandGrandChildCollectionItem;
//# sourceMappingURL=getGrandGrandGrandChildCollectionItem.js.map