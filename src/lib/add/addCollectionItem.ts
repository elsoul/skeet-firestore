import { collection, add, set, get, upset } from 'typesaurus'
import { getTimestamp } from '@/utils/time'

export const addCollectionItem = async <T>(
  collectionName: string,
  params: T,
  id?: string
) => {
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
    throw new Error(`add ${collectionName}: ${error}`)
  }
}
