import { collection, get, subcollection } from 'typesaurus'

export const isChildItemExists = async <Child, Parent>(
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
    const collectionRef = await get(
      childCollection(parentId),
      childCollectionId
    )
    if (!collectionRef) return false
    return true
  } catch (error) {
    throw new Error(`isChildItemExist: ${error}`)
  }
}
