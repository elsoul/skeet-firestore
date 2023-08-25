import { createDataRef } from './createDataRef';
import { getFirestoreData } from './getFirestoreData';
export const getFirestoreModelData = async (db, path) => {
    const ref = createDataRef(db, path);
    const data = await getFirestoreData(ref);
    return data;
};
//# sourceMappingURL=getFirestoreModelData.js.map