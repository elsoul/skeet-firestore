import { createDataRef } from './createDataRef';
import { getCollectionItem } from './getCollectionItem';
export const getCollectionItemData = async (db, path) => {
    const ref = createDataRef(db, path);
    const data = await getCollectionItem(ref);
    return data;
};
//# sourceMappingURL=getCollectionItemData.js.map