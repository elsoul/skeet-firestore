"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGrandGrandGrandChildCollectionItem = void 0;
const typesaurus_1 = require("typesaurus");
const time_1 = require("@/utils/time");
const updateGrandGrandGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, grandGrandChildCollectionName, grandGrandGrandChildCollectionName, parentId, childId, grandChildId, grandGrandChildId, grandGrandGrandChildId, params) => {
    try {
        const parentCollection = (0, typesaurus_1.collection)(parentCollectionName);
        const childCollection = (0, typesaurus_1.subcollection)(childCollectionName, parentCollection);
        const grandChildCollection = (0, typesaurus_1.subcollection)(grandChildCollectionName, childCollection(parentId));
        const grandGrandChildCollection = (0, typesaurus_1.subcollection)(grandGrandChildCollectionName, grandChildCollection(childId));
        const grandGrandGrandChildCollection = (0, typesaurus_1.subcollection)(grandGrandGrandChildCollectionName, grandGrandChildCollection(grandChildId));
        const data = {
            ...params,
            updatedAt: (0, time_1.getTimestamp)(),
        };
        await (0, typesaurus_1.update)(grandGrandGrandChildCollection(grandGrandChildId), grandGrandGrandChildId, data);
        return true;
    }
    catch (error) {
        throw new Error(`updateGrandGrandGrandChildCollectionItem(${grandGrandChildCollectionName}): ${error}`);
    }
};
exports.updateGrandGrandGrandChildCollectionItem = updateGrandGrandGrandChildCollectionItem;
//# sourceMappingURL=updateGrandGrandGrandChildCollectionItem.js.map