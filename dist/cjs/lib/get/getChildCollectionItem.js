"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChildCollectionItem = void 0;
const typesaurus_1 = require("typesaurus");
const getChildCollectionItem = async (parentCollectionName, childCollectionName, parentId, childCollectionId) => {
    try {
        const parentCollection = (0, typesaurus_1.collection)(parentCollectionName);
        const childCollection = (0, typesaurus_1.subcollection)(childCollectionName, parentCollection);
        const childCollectionItem = await (0, typesaurus_1.get)(childCollection(parentId), childCollectionId);
        if (!childCollectionItem)
            throw new Error(`${childCollectionName} is undefined`);
        return childCollectionItem;
    }
    catch (error) {
        return null;
    }
};
exports.getChildCollectionItem = getChildCollectionItem;
//# sourceMappingURL=getChildCollectionItem.js.map