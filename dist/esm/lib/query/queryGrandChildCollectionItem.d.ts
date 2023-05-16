import { Query } from 'typesaurus';
export declare const queryGrandChildCollectionItem: <GrandChild, Child, Parent>(parentCollectionName: string, childCollectionName: string, grandChildCollectionName: string, parentId: string, childCollectionId: string, queries: Query<GrandChild, keyof GrandChild>[]) => Promise<import("typesaurus").Doc<GrandChild>[]>;
