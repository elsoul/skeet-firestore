"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGrandChildCollectionItem = void 0;
const typesaurus_1 = require("typesaurus");
const getGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, parentId, childCollectionId, grandChildCollectionId) => {
    try {
        const parentCollection = (0, typesaurus_1.collection)(parentCollectionName);
        const childCollection = (0, typesaurus_1.subcollection)(childCollectionName, parentCollection);
        const grandChildCollection = (0, typesaurus_1.subcollection)(grandChildCollectionName, childCollection(parentId));
        const grandChildCollectionItem = await (0, typesaurus_1.get)(grandChildCollection(childCollectionId), grandChildCollectionId);
        if (!grandChildCollectionItem)
            throw new Error('getGrandChildCollectionItem is undefined');
        return grandChildCollectionItem;
    }
    catch (error) {
        return null;
    }
};
exports.getGrandChildCollectionItem = getGrandChildCollectionItem;
//# sourceMappingURL=getGrandChildCollectionItem.js.map