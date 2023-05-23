"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryCollectionItem = void 0;
const typesaurus_1 = require("typesaurus");
const queryCollectionItem = async (collectionName, queries) => {
    try {
        const parentCollection = (0, typesaurus_1.collection)(collectionName);
        const data = await (0, typesaurus_1.query)(parentCollection, queries);
        if (data.length === 0)
            throw new Error(`no data found for ${collectionName}`);
        return data;
    }
    catch (error) {
        return [];
    }
};
exports.queryCollectionItem = queryCollectionItem;
//# sourceMappingURL=queryCollectionItem.js.map