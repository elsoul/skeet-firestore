"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCollectionItem = void 0;
const typesaurus_1 = require("typesaurus");
const time_1 = require("../../utils/time");
const addCollectionItem = async (collectionName, params, id) => {
    try {
        const mainCollection = (0, typesaurus_1.collection)(collectionName);
        const datetimeNow = (0, time_1.getTimestamp)();
        const data = {
            ...params,
            createdAt: datetimeNow,
            updatedAt: datetimeNow,
        };
        if (!id) {
            return await (0, typesaurus_1.add)(mainCollection, data);
        }
        else {
            const collectionId = id || '1';
            await (0, typesaurus_1.upset)(mainCollection, collectionId, data);
            const doc = await (0, typesaurus_1.get)(mainCollection, collectionId);
            if (!doc)
                throw new Error('doc is undefined');
            return doc.ref;
        }
    }
    catch (error) {
        throw new Error(`addCollectionItem(${collectionName}): ${error}`);
    }
};
exports.addCollectionItem = addCollectionItem;
//# sourceMappingURL=addCollectionItem.js.map