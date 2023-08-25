import { firestore } from 'firebase-admin';
import * as admin from 'firebase-admin';
export declare const getCollectionItemData: <T extends firestore.DocumentData>(db: admin.firestore.Firestore, path: string) => Promise<T>;
