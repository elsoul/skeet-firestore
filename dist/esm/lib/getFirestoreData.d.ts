import { firestore } from 'firebase-admin';
export declare const getFirestoreData: <T>(dataRef: firestore.DocumentReference<T>) => Promise<T>;
