"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFirestoreData = void 0;
const getFirestoreData = async (dataRef) => {
    const doc = await dataRef.get();
    if (!doc.exists) {
        throw new Error('Document not found at path: ' + dataRef.path);
    }
    const data = doc.data();
    if (!data)
        throw new Error('Document data not found at path: ' + dataRef.path);
    return data;
};
exports.getFirestoreData = getFirestoreData;
//# sourceMappingURL=getFirestoreData.js.map