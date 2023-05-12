import { Query } from 'typesaurus';
export declare const queryGrandChildCollectionItem: <GrandChild, Child, Parent>(parentCollectionName: string, childCollectionName: string, grandChildCollectionName: string, parentId: string, childCollectionId: string, queries: Query<Parent, keyof Parent>[]) => Promise<import("typesaurus").Doc<Parent>[]>;
