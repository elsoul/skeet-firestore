"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCollectionItem = void 0;
const typesaurus_1 = require("typesaurus");
const time_1 = require("../../utils/time");
const updateCollectionItem = async (collectionName, collectionId, params) => {
    try {
        const mainCollection = (0, typesaurus_1.collection)(collectionName);
        const data = {
            ...params,
            updatedAt: (0, time_1.getTimestamp)(),
        };
        await (0, typesaurus_1.update)(mainCollection, collectionId, data);
        return true;
    }
    catch (error) {
        throw new Error(`updateCollectionItem(${collectionName}): ${error}`);
    }
};
exports.updateCollectionItem = updateCollectionItem;
//# sourceMappingURL=updateCollectionItem.js.map