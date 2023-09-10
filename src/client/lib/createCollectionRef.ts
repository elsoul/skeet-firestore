import { createFirestoreDataConverter } from './createFirestoreDataConverter'
import { DocumentData, collection, Firestore } from 'firebase/firestore'

export const createCollectionRef = <T extends DocumentData>(
  db: Firestore,
  collectionPath: string
) => {
  return collection(db, collectionPath).withConverter(
    createFirestoreDataConverter<T>()
  )
}
