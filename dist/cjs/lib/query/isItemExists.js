"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isItemExists = void 0;
const typesaurus_1 = require("typesaurus");
const isItemExists = async (collectionName, collectionId) => {
    try {
        const mainCollection = (0, typesaurus_1.collection)(collectionName);
        const collectionRef = await (0, typesaurus_1.get)(mainCollection, collectionId);
        if (!collectionRef)
            return false;
        return true;
    }
    catch (error) {
        throw new Error(`isItemExist: ${error}`);
    }
};
exports.isItemExists = isItemExists;
//# sourceMappingURL=isItemExists.js.map