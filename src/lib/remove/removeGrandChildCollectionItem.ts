import { collection, subcollection, remove } from 'typesaurus'

export const removeGrandChildCollectionItem = async <GrandChild, Child, Parent>(
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
    await remove(
      grandChildCollection(childCollectionId),
      grandChildCollectionId
    )
    return true
  } catch (error) {
    throw new Error(
      `removeGrandChildCollectionItem(${grandChildCollectionName}): ${error}`
    )
  }
}
