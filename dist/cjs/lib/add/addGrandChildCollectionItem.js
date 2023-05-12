"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addGrandChildCollectionItem = void 0;
const typesaurus_1 = require("typesaurus");
const time_1 = require("../../utils/time");
const addGrandChildCollectionItem = async (parentCollectionName, childCollectionName, grandChildCollectionName, parentId, childId, params, id) => {
    try {
        const parentCollection = (0, typesaurus_1.collection)(parentCollectionName);
        const childCollection = (0, typesaurus_1.subcollection)(childCollectionName, parentCollection);
        const grandChildCollection = (0, typesaurus_1.subcollection)(grandChildCollectionName, childCollection(parentId));
        const body = grandChildCollection(childId);
        const datetimeNow = await (0, time_1.getTimestamp)();
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
        throw new Error(`addSubcollectionItem: ${error}`);
    }
};
exports.addGrandChildCollectionItem = addGrandChildCollectionItem;
//# sourceMappingURL=addGrandChildCollectionItem.js.map