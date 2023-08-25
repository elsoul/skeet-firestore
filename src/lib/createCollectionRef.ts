import { firestore } from 'firebase-admin'
import * as admin from 'firebase-admin'
import { createFirestoreDataConverter } from './createFirestoreDataConverter'

export const createCollectionRef = <T extends firestore.DocumentData>(
  db: admin.firestore.Firestore,
  collectionPath: string
) => {
  return db
    .collection(collectionPath)
    .withConverter(createFirestoreDataConverter<T>())
}
