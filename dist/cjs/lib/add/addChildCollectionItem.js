"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addChildCollectionItem = void 0;
const typesaurus_1 = require("typesaurus");
const addChildCollectionItem = async (parentCollectionName, childCollectionName, parentId, params, id) => {
    try {
        const parentCollection = (0, typesaurus_1.collection)(parentCollectionName);
        const mainCollection = (0, typesaurus_1.subcollection)(childCollectionName, parentCollection);
        const body = mainCollection(parentId);
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
        throw new Error(`addChildCollectionItem(${childCollectionName}): ${error}`);
    }
};
exports.addChildCollectionItem = addChildCollectionItem;
//# sourceMappingURL=addChildCollectionItem.js.map