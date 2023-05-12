"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addGrandGrandChildCollectionItem = void 0;
const typesaurus_1 = require("typesaurus");
const time_1 = require("../../utils/time");
const addGrandGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, grandGrandChildCollectionName, parentId, childId, grandChildId, params, id) => {
    try {
        const parentCollection = (0, typesaurus_1.collection)(parentCollectionName);
        const childCollection = (0, typesaurus_1.subcollection)(childCollectionName, parentCollection);
        const grandChildCollection = (0, typesaurus_1.subcollection)(grandChildCollectionName, childCollection(parentId));
        const grandGrandChildCollection = (0, typesaurus_1.subcollection)(grandGrandChildCollectionName, grandChildCollection(childId));
        const body = grandGrandChildCollection(grandChildId);
        const datetimeNow = (0, time_1.getTimestamp)();
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
            const collectionRef = await (0, typesaurus_1.get)(body, collectionId);
            if (!collectionRef)
                throw new Error('collectionRef is undefined');
            return collectionRef.ref;
        }
    }
    catch (error) {
        throw new Error(`addGrandGrandChildCollectionItem: ${error}`);
    }
};
exports.addGrandGrandChildCollectionItem = addGrandGrandChildCollectionItem;
//# sourceMappingURL=addGrandGrandChildCollectionItem.js.map