import { Ref } from 'typesaurus';
export type AddCollectionItemParams<T> = {
    collectionName: string;
    body: T;
    id?: string;
};
export declare const addCollectionItem: <T>(params: AddCollectionItemParams<T>) => Promise<Ref<T>>;
