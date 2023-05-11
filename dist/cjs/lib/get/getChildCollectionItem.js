"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChildCollectionItem = void 0;
const typesaurus_1 = require("typesaurus");
const getChildCollectionItem = async (parentCollectionName, childCollectionName, parentId, childCollectionId, isRef = true) => {
    try {
        const parentCollection = (0, typesaurus_1.collection)(parentCollectionName);
        const subCollection = (0, typesaurus_1.subcollection)(childCollectionName, parentCollection);
        const parentRef = (0, typesaurus_1.ref)(parentCollection, parentId);
        const subCollectionRef = (0, typesaurus_1.ref)(subCollection(parentRef), childCollectionId);
        const subCollectionDoc = await (0, typesaurus_1.get)(subCollection(parentId), childCollectionId);
        if (isRef)
            return subCollectionRef;
        return subCollectionDoc;
    }
    catch (error) {
        throw new Error(`getChildCollectionItem: ${error}`);
    }
};
exports.getChildCollectionItem = getChildCollectionItem;
//# sourceMappingURL=getChildCollectionItem.js.map