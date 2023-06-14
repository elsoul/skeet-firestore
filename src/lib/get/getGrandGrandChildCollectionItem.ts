import { collection, subcollection, get } from 'typesaurus'

export const getGrandGrandChildCollectionItem = async <
  GrandGrandChild,
  GrandChild,
  Child,
  Parent
>(
  parentCollectionName: string,
  childCollectionName: string,
  grandChildCollectionName: string,
  grandGrandChildCollectionName: string,
  parentId: string,
  childCollectionId: string,
  grandChildCollectionId: string,
  grandGrandChildCollectionId: string
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
    const grandGrandChildCollection = subcollection<
      GrandGrandChild,
      GrandChild
    >(grandGrandChildCollectionName, grandChildCollection(childCollectionId))

    const grandGrandChildCollectionItem = await get(
      grandGrandChildCollection(grandChildCollectionId),
      grandGrandChildCollectionId
    )
    if (!grandGrandChildCollectionItem)
      throw new Error('grandGrandChildCollectionItem is undefined')

    return grandGrandChildCollectionItem
  } catch (error) {
    return null
  }
}
