import { collection, subcollection, remove } from 'typesaurus'

export const removeGrandGrandChildCollectionItem = async <
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

    await remove(
      grandGrandChildCollection(grandChildCollectionId),
      grandGrandChildCollectionId
    )

    return true
  } catch (error) {
    throw new Error(
      `removeGrandGrandChildCollectionItem(${grandGrandChildCollectionName}): ${error}`
    )
  }
}
