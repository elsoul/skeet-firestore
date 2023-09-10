import { Firestore, DocumentData } from 'firebase/firestore';
export declare const createDocRef: <T extends DocumentData>(db: Firestore, collectionPath: string, docPath?: string) => import("@firebase/firestore").DocumentReference<T, DocumentData>;
