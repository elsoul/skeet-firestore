import { Firestore, doc, DocumentData } from 'firebase/firestore'
import { createFirestoreDataConverter } from './createFirestoreDataConverter'

export const createDocRef = <T extends DocumentData>(
  db: Firestore,
  collectionPath: string,
  docPath?: string
) => {
  if (!docPath) {
    return doc(db, collectionPath).withConverter(
      createFirestoreDataConverter<T>()
    )
  }
  return doc(db, collectionPath, docPath).withConverter(
    createFirestoreDataConverter<T>()
  )
}
