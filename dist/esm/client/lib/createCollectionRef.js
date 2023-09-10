import { createFirestoreDataConverter } from './createFirestoreDataConverter';
import { collection } from 'firebase/firestore';
export const createCollectionRef = (db, collectionPath) => {
    return collection(db, collectionPath).withConverter(createFirestoreDataConverter());
};
//# sourceMappingURL=createCollectionRef.js.map