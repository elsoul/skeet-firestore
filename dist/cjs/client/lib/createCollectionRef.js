"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCollectionRef = void 0;
const createFirestoreDataConverter_1 = require("./createFirestoreDataConverter");
const firestore_1 = require("firebase/firestore");
const createCollectionRef = (db, collectionPath) => {
    console.log(`db:`, db);
    console.log(`collectionPath:`, collectionPath);
    return (0, firestore_1.collection)(db, collectionPath).withConverter((0, createFirestoreDataConverter_1.createFirestoreDataConverter)());
};
exports.createCollectionRef = createCollectionRef;
//# sourceMappingURL=createCollectionRef.js.map