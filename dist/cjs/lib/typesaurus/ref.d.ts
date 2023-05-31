import { Collection } from 'typesaurus';
export interface Ref<Model> {
    __type__: 'ref';
    collection: Collection<Model>;
    id: string;
}
