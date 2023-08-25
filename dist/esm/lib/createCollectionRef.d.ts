import { firestore } from 'firebase-admin';
import * as admin from 'firebase-admin';
export declare const createCollectionRef: <T extends firestore.DocumentData>(db: admin.firestore.Firestore, collectionPath: string) => firestore.CollectionReference<T>;
