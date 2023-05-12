"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGrandGrandChildCollectionItem = void 0;
const typesaurus_1 = require("typesaurus");
const time_1 = require("../../utils/time");
const updateGrandGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, grandGrandChildCollectionName, parentId, childId, grandChildId, grandGrandChildId, params) => {
    try {
        const parentCollection = (0, typesaurus_1.collection)(parentCollectionName);
        const childCollection = (0, typesaurus_1.subcollection)(childCollectionName, parentCollection);
        const grandChildCollection = (0, typesaurus_1.subcollection)(grandChildCollectionName, childCollection(parentId));
        const grandGrandChildCollection = (0, typesaurus_1.subcollection)(grandGrandChildCollectionName, grandChildCollection(childId));
        const data = {
            ...params,
            updatedAt: (0, time_1.getTimestamp)(),
        };
        await (0, typesaurus_1.update)(grandGrandChildCollection(grandChildId), grandGrandChildId, data);
    }
    catch (error) {
        throw new Error(`updateGrandGrandChildCollectionItem: ${error}`);
    }
};
exports.updateGrandGrandChildCollectionItem = updateGrandGrandChildCollectionItem;
//# sourceMappingURL=updateGrandGrandChildCollectionItem.js.map