"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFirestoreModelData = void 0;
const createDataRef_1 = require("./createDataRef");
const getFirestoreData_1 = require("./getFirestoreData");
const getFirestoreModelData = async (db, path) => {
    const ref = (0, createDataRef_1.createDataRef)(db, path);
    const data = await (0, getFirestoreData_1.getFirestoreData)(ref);
    return data;
};
exports.getFirestoreModelData = getFirestoreModelData;
//# sourceMappingURL=getFirestoreModelData.js.map