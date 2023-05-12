import { collection, update } from 'typesaurus'
import { getTimestamp } from '../../utils/time'

export const updateCollectionItem = async <T>(
  collectionName: string,
  collectionId: string,
  params: Partial<T>
) => {
  try {
    const mainCollection = collection<T>(collectionName)
    const data = {
      ...params,
      updatedAt: getTimestamp(),
    }
    await update(mainCollection, collectionId, data)
  } catch (error) {
    throw new Error(`addCollectionItem: ${error}`)
  }
}