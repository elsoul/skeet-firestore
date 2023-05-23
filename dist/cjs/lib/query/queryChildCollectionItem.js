"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryChildCollectionItem = void 0;
const typesaurus_1 = require("typesaurus");
const queryChildCollectionItem = async (parentCollectionName, childCollectionName, parentId, queries) => {
    try {
        const parentCollection = (0, typesaurus_1.collection)(parentCollectionName);
        const childCollection = (0, typesaurus_1.subcollection)(childCollectionName, parentCollection);
        const data = await (0, typesaurus_1.query)(childCollection(parentId), queries);
        if (data.length === 0)
            throw new Error(`no data found for ${childCollectionName}`);
        return data;
    }
    catch (error) {
        return [];
    }
};
exports.queryChildCollectionItem = queryChildCollectionItem;
//# sourceMappingURL=queryChildCollectionItem.js.map