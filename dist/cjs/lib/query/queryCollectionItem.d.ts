import { Query } from 'typesaurus';
export declare const queryCollectionItem: <Parent>(collectionName: string, queries: Query<Parent, keyof Parent>[]) => Promise<import("typesaurus").Doc<Parent>[]>;
