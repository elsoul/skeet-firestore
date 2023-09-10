"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDocRef = void 0;
const firestore_1 = require("firebase/firestore");
const createFirestoreDataConverter_1 = require("./createFirestoreDataConverter");
const createDocRef = (db, collectionPath, docPath) => {
    if (!docPath) {
        return (0, firestore_1.doc)(db, collectionPath).withConverter((0, createFirestoreDataConverter_1.createFirestoreDataConverter)());
    }
    return (0, firestore_1.doc)(db, collectionPath, docPath).withConverter((0, createFirestoreDataConverter_1.createFirestoreDataConverter)());
};
exports.createDocRef = createDocRef;
//# sourceMappingURL=createDocRef.js.map