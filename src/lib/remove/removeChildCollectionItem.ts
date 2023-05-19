import { collection, subcollection, remove } from 'typesaurus'

export const removeChildCollectionItem = async <Child, Parent>(
  parentCollectionName: string,
  childCollectionName: string,
  parentId: string,
  childCollectionId: string
) => {
  try {
    const parentCollection = collection<Parent>(parentCollectionName)
    const childCollection = subcollection<Child, Parent>(
      childCollectionName,
      parentCollection
    )
    await remove(childCollection(parentId), childCollectionId)

    return true
  } catch (error) {
    throw new Error(
      `removeChildCollectionItem(${childCollectionName}): ${error}`
    )
  }
}
