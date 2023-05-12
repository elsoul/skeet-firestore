import { addChildCollectionItem, addGrandChildCollectionItem, addGrandGrandChildCollectionItem, addGrandGrandGrandChildCollectionItem, getChildCollectionItem, getGrandChildCollectionItems, isItemExists, isChildItemExists } from './lib';
import { collection, add, get, upset, Ref } from 'typesaurus';
export { addChildCollectionItem, addGrandChildCollectionItem, addGrandGrandChildCollectionItem, addGrandGrandGrandChildCollectionItem, getChildCollectionItem, getGrandChildCollectionItems, isItemExists, isChildItemExists, Ref, collection, add, get, upset, };
export declare const addCollectionItem: <T>(collectionName: string, params: T, id?: string) => Promise<Ref<T>>;
