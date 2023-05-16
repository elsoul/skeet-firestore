import { Query } from 'typesaurus';
export declare const queryChildCollectionItem: <Child, Parent>(parentCollectionName: string, childCollectionName: string, parentId: string, queries: Query<Child, keyof Child>[]) => Promise<import("typesaurus").Doc<Child>[]>;
