import { addChildCollectionItem, addGrandChildCollectionItem, addGrandGrandChildCollectionItem, addGrandGrandGrandChildCollectionItem, getChildCollectionItem, getGrandChildCollectionItems, isItemExists, isChildItemExists, } from './lib';
import { collection, add, get, upset } from 'typesaurus';
import * as dotenv from 'dotenv';
dotenv.config();
export { addChildCollectionItem, addGrandChildCollectionItem, addGrandGrandChildCollectionItem, addGrandGrandGrandChildCollectionItem, getChildCollectionItem, getGrandChildCollectionItems, isItemExists, isChildItemExists, collection, add, get, upset, };
import { getTimestamp } from '@/utils/time';
export const addCollectionItem = async (collectionName, params, id) => {
    try {
        const mainCollection = collection(collectionName);
        const datetimeNow = getTimestamp();
        const data = {
            ...params,
            createdAt: datetimeNow,
            updatedAt: datetimeNow,
        };
        if (!id) {
            return await add(mainCollection, data);
        }
        else {
            const collectionId = id || '1';
            await upset(mainCollection, collectionId, data);
            const collectionRef = await get(mainCollection, collectionId);
            if (!collectionRef)
                throw new Error('collectionRef is undefined');
            return collectionRef.ref;
        }
    }
    catch (error) {
        throw new Error(`addCollectionItem: ${error}`);
    }
};
//# sourceMappingURL=index.js.map