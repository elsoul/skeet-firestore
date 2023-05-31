"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateChildCollectionItem = void 0;
const typesaurus_1 = require("typesaurus");
const firestore_1 = require("firebase-admin/firestore");
const updateChildCollectionItem = async (parentCollectionName, childCollectionName, parentId, childId, params) => {
    try {
        const parentCollection = (0, typesaurus_1.collection)(parentCollectionName);
        const childCollection = (0, typesaurus_1.subcollection)(childCollectionName, parentCollection);
        const data = {
            ...params,
            updatedAt: firestore_1.FieldValue.serverTimestamp(),
        };
        await (0, typesaurus_1.update)(childCollection(parentId), childId, data);
        return true;
    }
    catch (error) {
        throw new Error(`updateChildCollectionItem(${childCollectionName}): ${error}`);
    }
};
exports.updateChildCollectionItem = updateChildCollectionItem;
//# sourceMappingURL=updateChildCollectionItem.js.map