import { DocumentData, FirestoreDataConverter } from 'firebase/firestore';
export declare const createFirestoreDataConverter: <T extends DocumentData>() => FirestoreDataConverter<T, DocumentData>;
