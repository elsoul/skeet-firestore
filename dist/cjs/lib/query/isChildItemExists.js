"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isChildItemExists = void 0;
const typesaurus_1 = require("typesaurus");
const isChildItemExists = async (parentCollectionName, childCollectionName, parentId, childCollectionId) => {
    try {
        const parentCollection = (0, typesaurus_1.collection)(parentCollectionName);
        const childCollection = (0, typesaurus_1.subcollection)(childCollectionName, parentCollection);
        const collectionRef = await (0, typesaurus_1.get)(childCollection(parentId), childCollectionId);
        if (!collectionRef)
            return false;
        return true;
    }
    catch (error) {
        throw new Error(`isChildItemExist: ${error}`);
    }
};
exports.isChildItemExists = isChildItemExists;
//# sourceMappingURL=isChildItemExists.js.map