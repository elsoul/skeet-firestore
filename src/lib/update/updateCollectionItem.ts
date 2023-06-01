import { collection, update, value } from 'typesaurus'

export const updateCollectionItem = async <T>(
  collectionName: string,
  collectionId: string,
  params: Partial<T>
) => {
  try {
    const mainCollection = collection<T>(collectionName)
    const data = {
      ...params,
      updatedAt: value('serverDate'),
    }
    await update(mainCollection, collectionId, data)
    return true
  } catch (error) {
    throw new Error(`updateCollectionItem(${collectionName}): ${error}`)
  }
}
