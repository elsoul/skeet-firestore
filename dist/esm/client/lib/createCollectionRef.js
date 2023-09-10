import { createFirestoreDataConverter } from './createFirestoreDataConverter';
import { collection, } from 'firebase/firestore';
export const createCollectionRef = (db, collectionPath) => {
    console.log(`db:`, db);
    console.log(`collectionPath:`, collectionPath);
    return collection(db, collectionPath).withConverter(createFirestoreDataConverter());
};
//# sourceMappingURL=createCollectionRef.js.map