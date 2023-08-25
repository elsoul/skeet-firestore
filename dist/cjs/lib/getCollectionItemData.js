"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCollectionItemData = void 0;
const createDataRef_1 = require("./createDataRef");
const getCollectionItem_1 = require("./getCollectionItem");
const getCollectionItemData = async (db, path) => {
    const ref = (0, createDataRef_1.createDataRef)(db, path);
    const data = await (0, getCollectionItem_1.getCollectionItem)(ref);
    return data;
};
exports.getCollectionItemData = getCollectionItemData;
//# sourceMappingURL=getCollectionItemData.js.map