import { DocumentData, Firestore } from 'firebase/firestore';
export declare const createCollectionRef: <T extends DocumentData>(db: Firestore, collectionPath: string) => import("@firebase/firestore").CollectionReference<T, DocumentData>;
