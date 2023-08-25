import { createFirestoreDataConverter } from './createFirestoreDataConverter';
export const createCollectionRef = (db, collectionPath) => {
    return db
        .collection(collectionPath)
        .withConverter(createFirestoreDataConverter());
};
//# sourceMappingURL=createCollectionRef.js.map