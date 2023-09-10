import { doc } from 'firebase/firestore';
import { createFirestoreDataConverter } from './createFirestoreDataConverter';
export const createDocRef = (db, collectionPath, docPath) => {
    if (!docPath) {
        return doc(db, collectionPath).withConverter(createFirestoreDataConverter());
    }
    return doc(db, collectionPath, docPath).withConverter(createFirestoreDataConverter());
};
//# sourceMappingURL=createDocRef.js.map