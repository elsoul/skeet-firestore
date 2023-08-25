"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDataRef = void 0;
const createFirestoreDataConverter_1 = require("./createFirestoreDataConverter");
const createDataRef = (db, collectionPath) => {
    return db.doc(collectionPath).withConverter((0, createFirestoreDataConverter_1.createFirestoreDataConverter)());
};
exports.createDataRef = createDataRef;
//# sourceMappingURL=createDataRef.js.map