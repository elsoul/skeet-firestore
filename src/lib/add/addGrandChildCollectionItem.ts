import { collection, add, get, set, value, subcollection } from 'typesaurus'

export const addGrandChildCollectionItem = async <GrandChild, Child, Parent>(
  parentCollectionName: string,
  childCollectionName: string,
  grandChildCollectionName: string,
  parentId: string,
  childId: string,
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

    const body = grandChildCollection(childId)
    const datetimeNow = await value('serverDate')
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
      const doc = await get(body, collectionId)
      if (!doc) throw new Error('doc is undefined')
      return doc.ref
    }
  } catch (error) {
    throw new Error(
      `addGrandChildCollectionItem(${grandChildCollectionName}): ${error}`
    )
  }
}
