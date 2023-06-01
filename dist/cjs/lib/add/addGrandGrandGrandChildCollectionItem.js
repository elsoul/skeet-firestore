"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addGrandGrandGrandChildCollectionItem = void 0;
const typesaurus_1 = require("typesaurus");
const addGrandGrandGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, grandGrandChildCollectionName, grandGrandGrandChildCollectionName, parentId, childId, grandChildId, grandGrandChildId, params, id) => {
    try {
        const parentCollection = (0, typesaurus_1.collection)(parentCollectionName);
        const childCollection = (0, typesaurus_1.subcollection)(childCollectionName, parentCollection);
        const grandChildCollection = (0, typesaurus_1.subcollection)(grandChildCollectionName, childCollection(parentId));
        const grandGrandChildCollection = (0, typesaurus_1.subcollection)(grandGrandChildCollectionName, grandChildCollection(childId));
        const grandGrandGrandChildCollection = (0, typesaurus_1.subcollection)(grandGrandGrandChildCollectionName, grandGrandChildCollection(grandChildId));
        const body = grandGrandGrandChildCollection(grandGrandChildId);
        const datetimeNow = (0, typesaurus_1.value)('serverDate');
        const data = {
            ...params,
            createdAt: datetimeNow,
            updatedAt: datetimeNow,
        };
        if (!id) {
            return await (0, typesaurus_1.add)(body, data);
        }
        else {
            const collectionId = id || '1';
            await (0, typesaurus_1.set)(body, collectionId, data);
            const doc = await (0, typesaurus_1.get)(body, collectionId);
            if (!doc)
                throw new Error('doc is undefined');
            return doc.ref;
        }
    }
    catch (error) {
        throw new Error(`addGrandGrandGrandChildCollectionItem(${grandGrandGrandChildCollectionName}): ${error}`);
    }
};
exports.addGrandGrandGrandChildCollectionItem = addGrandGrandGrandChildCollectionItem;
//# sourceMappingURL=addGrandGrandGrandChildCollectionItem.js.map