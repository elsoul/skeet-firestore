"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryGrandChildCollectionItem = void 0;
const typesaurus_1 = require("typesaurus");
const queryGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, parentId, childCollectionId, queries) => {
    try {
        const parentCollection = (0, typesaurus_1.collection)(parentCollectionName);
        const childCollection = (0, typesaurus_1.subcollection)(childCollectionName, parentCollection);
        const grandChildCollection = (0, typesaurus_1.subcollection)(grandChildCollectionName, childCollection(parentId));
        const data = await (0, typesaurus_1.query)(grandChildCollection(childCollectionId), queries);
        if (data.length === 0)
            throw new Error(`no data found for ${grandChildCollectionName}`);
        return data;
    }
    catch (error) {
        return [];
    }
};
exports.queryGrandChildCollectionItem = queryGrandChildCollectionItem;
//# sourceMappingURL=queryGrandChildCollectionItem.js.map