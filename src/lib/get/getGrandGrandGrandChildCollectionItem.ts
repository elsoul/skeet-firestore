import { collection, subcollection, get } from 'typesaurus'

export const getGrandGrandGrandChildCollectionItem = async <
  GrandGrandGrandChild,
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
  grandGrandGrandChildId: string
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
    >(grandGrandChildCollectionName, grandChildCollection(childId))

    const grandGrandGrandChildCollection = subcollection<
      GrandGrandGrandChild,
      GrandGrandChild
    >(
      grandGrandGrandChildCollectionName,
      grandGrandChildCollection(grandChildId)
    )
    const grandGrandGrandChildCollectionItem = await get(
      grandGrandGrandChildCollection(grandGrandChildId),
      grandGrandGrandChildId
    )
    if (!grandGrandGrandChildCollectionItem)
      throw new Error('grandGrandGrandChildCollectionItem is undefined')

    return grandGrandGrandChildCollectionItem
  } catch (error) {
    return null
  }
}
