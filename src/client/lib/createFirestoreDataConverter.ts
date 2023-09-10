import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
} from 'firebase/firestore'

export const createFirestoreDataConverter = <
  T extends DocumentData
>(): FirestoreDataConverter<T> => {
  return {
    toFirestore(data: T): DocumentData {
      return data
    },
    fromFirestore(snapshot: QueryDocumentSnapshot<T>): T {
      return snapshot.data()
    },
  }
}
