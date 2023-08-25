export const getFirestoreData = async (dataRef) => {
    const doc = await dataRef.get();
    if (!doc.exists) {
        throw new Error('Document not found at path: ' + dataRef.path);
    }
    const data = doc.data();
    if (!data)
        throw new Error('Document data not found at path: ' + dataRef.path);
    return data;
};
//# sourceMappingURL=getFirestoreData.js.map