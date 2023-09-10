import { DocumentData, Firestore, CollectionReference } from 'firebase/firestore';
export declare const createCollectionRef: <T extends DocumentData>(db: Firestore, collectionPath: string) => CollectionReference<T, DocumentData>;
