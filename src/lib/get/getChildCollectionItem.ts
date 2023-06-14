import { collection, subcollection, get } from 'typesaurus'

export const getChildCollectionItem = async <Child, Parent>(
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
    const childCollectionItem = await get(
      childCollection(parentId),
      childCollectionId
    )
    if (!childCollectionItem)
      throw new Error(`${childCollectionName} is undefined`)

    return childCollectionItem
  } catch (error) {
    return null
  }
}
