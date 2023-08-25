import { createDataRef } from './createDataRef'
import { firestore } from 'firebase-admin'
import * as admin from 'firebase-admin'
import { getCollectionItem } from './getCollectionItem'

export const getCollectionItemData = async <T extends firestore.DocumentData>(
  db: admin.firestore.Firestore,
  path: string
) => {
  const ref = createDataRef<T>(db, path)
  const data = await getCollectionItem(ref)
  return data
}
