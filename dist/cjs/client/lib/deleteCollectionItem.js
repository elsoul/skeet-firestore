"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCollectionItem = void 0;
const firestore_1 = require("firebase/firestore");
const createDocRef_1 = require("./createDocRef");
const deleteCollectionItem = async (db, collectionPath, docId) => {
    try {
        const docRef = (0, createDocRef_1.createDocRef)(db, collectionPath, docId);
        await (0, firestore_1.deleteDoc)(docRef);
        return true;
    }
    catch (error) {
        throw new Error(`Error deleting document with ID ${docId}: ${error}`);
    }
};
exports.deleteCollectionItem = deleteCollectionItem;
//# sourceMappingURL=deleteCollectionItem.js.map