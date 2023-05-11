import { collection, add, get, upset, Ref } from 'typesaurus'
import { getTimestamp } from '@/utils/time'

export const addCollectionItem = async <T>(
  collectionName: string,
  params: T,
  id?: string
): Promise<Ref<T>> => {
  try {
    const mainCollection = collection<T>(collectionName)
    const datetimeNow = getTimestamp()
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
      const collectionRef = await get(mainCollection, collectionId)
      if (!collectionRef) throw new Error('collectionRef is undefined')
      return collectionRef.ref
    }
  } catch (error) {
    throw new Error(`addCollectionItem: ${error}`)
  }
}
