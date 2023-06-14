import { collection, subcollection, get } from 'typesaurus'

export const getGrandChildCollectionItem = async <GrandChild, Child, Parent>(
  parentCollectionName: string,
  childCollectionName: string,
  grandChildCollectionName: string,
  parentId: string,
  childCollectionId: string,
  grandChildCollectionId: string
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
    const grandChildCollectionItem = await get(
      grandChildCollection(childCollectionId),
      grandChildCollectionId
    )
    if (!grandChildCollectionItem)
      throw new Error('getGrandChildCollectionItem is undefined')

    return grandChildCollectionItem
  } catch (error) {
    return null
  }
}
