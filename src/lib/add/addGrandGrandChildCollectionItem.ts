import { add, collection, subcollection, set, get } from 'typesaurus'
import { getTimestamp } from '@/utils/time'

export const addGrandGrandChildCollectionItem = async <
  GrandChild,
  Child,
  Parent
>(
  parentCollectionName: string,
  childCollectionName: string,
  grandChildCollectionName: string,
  grandGrandChildCollectionName: string,
  parentId: string,
  childId: string,
  grandChildId: string,
  params: GrandChild,
  id?: string
) => {
  try {
    const parentCollection = collection<Parent>(parentCollectionName)
    const childCollection = subcollection<Child, Parent>(
      childCollectionName,
      parentCollection
    )
    const grandChildCollection = subcollection<GrandChild, Child>(
      grandChildCollectionName,
      childCollection(parentId)
    )
    const grandGrandChildCollection = subcollection<GrandChild, Child>(
      grandGrandChildCollectionName,
      grandChildCollection(childId)
    )

    const body = grandGrandChildCollection(grandChildId)
    const datetimeNow = getTimestamp()
    const data = {
      ...params,
      createdAt: datetimeNow,
      updatedAt: datetimeNow,
    }
    if (!id) {
      return await add(body, data)
    } else {
      const collectionId = id || '1'
      await set(body, collectionId, data)
      const collectionRef = await get(body, collectionId)
      if (!collectionRef) throw new Error('collectionRef is undefined')
      return collectionRef.ref
    }
  } catch (error) {
    throw new Error(`addGrandGrandChildCollectionItem: ${error}`)
  }
}
