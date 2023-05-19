"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeChildCollectionItem = void 0;
const typesaurus_1 = require("typesaurus");
const removeChildCollectionItem = async (parentCollectionName, childCollectionName, parentId, childCollectionId) => {
    try {
        const parentCollection = (0, typesaurus_1.collection)(parentCollectionName);
        const childCollection = (0, typesaurus_1.subcollection)(childCollectionName, parentCollection);
        await (0, typesaurus_1.remove)(childCollection(parentId), childCollectionId);
        return true;
    }
    catch (error) {
        throw new Error(`removeChildCollectionItem(${childCollectionName}): ${error}`);
    }
};
exports.removeChildCollectionItem = removeChildCollectionItem;
//# sourceMappingURL=removeChildCollectionItem.js.map