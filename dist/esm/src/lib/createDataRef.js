import { createFirestoreDataConverter } from './createFirestoreDataConverter';
export const createDataRef = (db, collectionPath) => {
    return db.doc(collectionPath).withConverter(createFirestoreDataConverter());
};
//# sourceMappingURL=createDataRef.js.map