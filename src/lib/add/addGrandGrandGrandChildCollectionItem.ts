import { collection, add, get, set, value, subcollection } from 'typesaurus'

export const addGrandGrandGrandChildCollectionItem = async <
  GrandGrandChild,
  GrandChild,
  Child,
  Parent
>(
  parentCollectionName: string,
  childCollectionName: string,
  grandChildCollectionName: string,
  grandGrandChildCollectionName: string,
  grandGrandGrandChildCollectionName: string,
  parentId: string,
  childId: string,
  grandChildId: string,
  grandGrandChildId: string,
  params: GrandGrandChild,
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
    const grandGrandGrandChildCollection = subcollection<
      GrandGrandChild,
      GrandChild
    >(
      grandGrandGrandChildCollectionName,
      grandGrandChildCollection(grandChildId)
    )

    const body = grandGrandGrandChildCollection(grandGrandChildId)
    const datetimeNow = value('serverDate')
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
      `addGrandGrandGrandChildCollectionItem(${grandGrandGrandChildCollectionName}): ${error}`
    )
  }
}
