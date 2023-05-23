"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryGrandGrandGrandChildCollectionItem = void 0;
const typesaurus_1 = require("typesaurus");
const queryGrandGrandGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, grandGrandChildCollectionName, grandGrandGrandChildCollectionName, parentId, childCollectionId, grandChildCollectionId, grandGrandChildCollectionId, queries) => {
    try {
        const parentCollection = (0, typesaurus_1.collection)(parentCollectionName);
        const childCollection = (0, typesaurus_1.subcollection)(childCollectionName, parentCollection);
        const grandChildCollection = (0, typesaurus_1.subcollection)(grandChildCollectionName, childCollection(parentId));
        const grandGrandChildCollection = (0, typesaurus_1.subcollection)(grandGrandChildCollectionName, grandChildCollection(childCollectionId));
        const grandGrandGrandChildCollection = (0, typesaurus_1.subcollection)(grandGrandGrandChildCollectionName, grandGrandChildCollection(grandChildCollectionId));
        const data = await (0, typesaurus_1.query)(grandGrandGrandChildCollection(grandGrandChildCollectionId), queries);
        if (data.length === 0)
            throw new Error(`no data found for ${grandGrandGrandChildCollectionName}`);
        return data;
    }
    catch (error) {
        return [];
    }
};
exports.queryGrandGrandGrandChildCollectionItem = queryGrandGrandGrandChildCollectionItem;
//# sourceMappingURL=queryGrandGrandGrandChildCollectionItem.js.map