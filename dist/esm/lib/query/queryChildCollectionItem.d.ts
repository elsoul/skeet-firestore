import { Query } from 'typesaurus';
export declare const queryChildCollectionItem: <Child, Parent>(parentCollectionName: string, childCollectionName: string, parentId: string, queries: Query<Parent, keyof Parent>[]) => Promise<import("typesaurus").Doc<Parent>[]>;
