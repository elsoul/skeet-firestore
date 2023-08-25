"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCollectionRef = void 0;
const createFirestoreDataConverter_1 = require("./createFirestoreDataConverter");
const createCollectionRef = (db, collectionPath) => {
    return db
        .collection(collectionPath)
        .withConverter((0, createFirestoreDataConverter_1.createFirestoreDataConverter)());
};
exports.createCollectionRef = createCollectionRef;
//# sourceMappingURL=createCollectionRef.js.map