import { collection, subcollection, update, value } from 'typesaurus'

export const updateGrandGrandGrandChildCollectionItem = async <
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
  grandGrandGrandChildId: string,
  params: Partial<GrandGrandGrandChild>
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
    const data = {
      ...params,
      updatedAt: value('serverDate'),
    }
    await update(
      grandGrandGrandChildCollection(grandGrandChildId),
      grandGrandGrandChildId,
      data
    )
    return true
  } catch (error) {
    throw new Error(
      `updateGrandGrandGrandChildCollectionItem(${grandGrandChildCollectionName}): ${error}`
    )
  }
}
