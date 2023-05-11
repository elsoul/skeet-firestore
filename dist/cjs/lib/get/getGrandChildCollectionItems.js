"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGrandChildCollectionItems = void 0;
const typesaurus_1 = require("typesaurus");
const getGrandChildCollectionItems = async (parentCollectionName, childCollectionName, grandChildCollectionName, parentId, childCollectionId) => {
    try {
        const parentCollection = (0, typesaurus_1.collection)(parentCollectionName);
        const childCollection = (0, typesaurus_1.subcollection)(childCollectionName, parentCollection);
        const grandChildCollection = (0, typesaurus_1.subcollection)(grandChildCollectionName, childCollection(parentId));
        const childCollectionDocs = await (0, typesaurus_1.query)(grandChildCollection(childCollectionId), [(0, typesaurus_1.order)('createdAt', 'asc')]);
        const messages = [];
        for await (const childCollectionDoc of childCollectionDocs) {
            messages.push(childCollectionDoc.data);
        }
        return messages;
    }
    catch (error) {
        throw new Error(`getChildCollectionItem: ${error}`);
    }
};
exports.getGrandChildCollectionItems = getGrandChildCollectionItems;
//# sourceMappingURL=getGrandChildCollectionItems.js.map