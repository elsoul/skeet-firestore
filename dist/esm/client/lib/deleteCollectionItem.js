import { deleteDoc } from 'firebase/firestore';
import { createDocRef } from './createDocRef';
export const deleteCollectionItem = async (db, collectionPath, docId) => {
    try {
        const docRef = createDocRef(db, collectionPath, docId);
        await deleteDoc(docRef);
        return true;
    }
    catch (error) {
        throw new Error(`Error deleting document with ID ${docId}: ${error}`);
    }
};
//# sourceMappingURL=deleteCollectionItem.js.map