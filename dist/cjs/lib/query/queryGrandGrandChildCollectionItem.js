"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryGrandGrandChildCollectionItem = void 0;
const typesaurus_1 = require("typesaurus");
const queryGrandGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, grandGrandChildCollectionName, parentId, childCollectionId, grandChildCollectionId, queries) => {
    try {
        const parentCollection = (0, typesaurus_1.collection)(parentCollectionName);
        const childCollection = (0, typesaurus_1.subcollection)(childCollectionName, parentCollection);
        const grandChildCollection = (0, typesaurus_1.subcollection)(grandChildCollectionName, childCollection(parentId));
        const grandGrandChildCollection = (0, typesaurus_1.subcollection)(grandGrandChildCollectionName, grandChildCollection(childCollectionId));
        const data = await (0, typesaurus_1.query)(grandGrandChildCollection(grandChildCollectionId), queries);
        if (data.length === 0)
            throw new Error(`no data found for ${grandGrandChildCollectionName}`);
        return data;
    }
    catch (error) {
        return [];
    }
};
exports.queryGrandGrandChildCollectionItem = queryGrandGrandChildCollectionItem;
//# sourceMappingURL=queryGrandGrandChildCollectionItem.js.map