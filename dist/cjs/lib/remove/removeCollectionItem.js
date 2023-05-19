"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCollectionItem = void 0;
const typesaurus_1 = require("typesaurus");
const removeCollectionItem = async (parentCollectionName, parentId) => {
    try {
        const parentCollection = (0, typesaurus_1.collection)(parentCollectionName);
        await (0, typesaurus_1.remove)(parentCollection, parentId);
        return true;
    }
    catch (error) {
        throw new Error(`removeCollectionItem(${parentCollectionName}): ${error}`);
    }
};
exports.removeCollectionItem = removeCollectionItem;
//# sourceMappingURL=removeCollectionItem.js.map