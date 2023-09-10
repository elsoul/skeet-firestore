import { Firestore } from 'firebase/firestore';
export declare const deleteCollectionItem: (db: Firestore, collectionPath: string, docId: string) => Promise<boolean>;
