import { collection, add, get, upset, Ref } from 'typesaurus'
import { getTimestamp } from '@/utils/time'

export type AddCollectionItemParams<T> = {
  collectionName: string
  body: T
  id?: string
}

export const addCollectionItem = async <T>(
  params: AddCollectionItemParams<T>
): Promise<Ref<T>> => {
  try {
    const mainCollection = collection<T>(params.collectionName)
    const datetimeNow = getTimestamp()
    const data = {
      ...params.body,
      createdAt: datetimeNow,
      updatedAt: datetimeNow,
    }
    if (!params.id) {
      return await add(mainCollection, data)
    } else {
      const collectionId = params.id || '1'
      await upset(mainCollection, collectionId, data)
      const collectionRef = await get(mainCollection, collectionId)
      if (!collectionRef) throw new Error('collectionRef is undefined')
      return collectionRef.ref
    }
  } catch (error) {
    throw new Error(`addCollectionItem: ${error}`)
  }
}
