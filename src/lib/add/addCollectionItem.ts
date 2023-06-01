import { collection, add, get, upset, Ref, value } from 'typesaurus'

export const addCollectionItem = async <T>(
  collectionName: string,
  params: T,
  id?: string
): Promise<Ref<T>> => {
  try {
    const mainCollection = collection<T>(collectionName)
    const datetimeNow = value('serverDate')
    const data = {
      ...params,
      createdAt: datetimeNow,
      updatedAt: datetimeNow,
    }
    if (!id) {
      return await add(mainCollection, data)
    } else {
      const collectionId = id || '1'
      await upset(mainCollection, collectionId, data)
      const doc = await get(mainCollection, collectionId)
      if (!doc) throw new Error('doc is undefined')
      return doc.ref
    }
  } catch (error) {
    throw new Error(`addCollectionItem(${collectionName}): ${error}`)
  }
}
