"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCollectionItem = void 0;
const typesaurus_1 = require("typesaurus");
const getCollectionItem = async (parentCollectionName, parentId) => {
    try {
        const parentCollection = (0, typesaurus_1.collection)(parentCollectionName);
        const parentCollectionItem = await (0, typesaurus_1.get)(parentCollection, parentId);
        if (!parentCollectionItem)
            throw new Error('parentCollectionItem is undefined');
        return parentCollectionItem;
    }
    catch (error) {
        return null;
    }
};
exports.getCollectionItem = getCollectionItem;
//# sourceMappingURL=getCollectionItem.js.map