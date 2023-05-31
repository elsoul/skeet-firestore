import { collection, update } from 'typesaurus'
import { FieldValue } from 'firebase-admin/firestore'

export const updateCollectionItem = async <T>(
  collectionName: string,
  collectionId: string,
  params: Partial<T>
) => {
  try {
    const mainCollection = collection<T>(collectionName)
    const data = {
      ...params,
      updatedAt: FieldValue.serverTimestamp(),
    }
    await update(mainCollection, collectionId, data)
    return true
  } catch (error) {
    throw new Error(`updateCollectionItem(${collectionName}): ${error}`)
  }
}
