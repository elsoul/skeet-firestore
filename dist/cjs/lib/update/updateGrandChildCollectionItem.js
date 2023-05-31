"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGrandChildCollectionItem = void 0;
const typesaurus_1 = require("typesaurus");
const firestore_1 = require("firebase-admin/firestore");
const updateGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, parentId, childId, grandChildId, params) => {
    try {
        const parentCollection = (0, typesaurus_1.collection)(parentCollectionName);
        const childCollection = (0, typesaurus_1.subcollection)(childCollectionName, parentCollection);
        const grandChildCollection = (0, typesaurus_1.subcollection)(grandChildCollectionName, childCollection(parentId));
        const data = {
            ...params,
            updatedAt: firestore_1.FieldValue.serverTimestamp(),
        };
        await (0, typesaurus_1.update)(grandChildCollection(childId), grandChildId, data);
        return true;
    }
    catch (error) {
        throw new Error(`updateGrandChildCollectionItem(${grandChildCollectionName}): ${error}`);
    }
};
exports.updateGrandChildCollectionItem = updateGrandChildCollectionItem;
//# sourceMappingURL=updateGrandChildCollectionItem.js.map