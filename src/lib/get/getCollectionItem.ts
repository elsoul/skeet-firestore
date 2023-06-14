import { collection, get } from 'typesaurus'

export const getCollectionItem = async <Parent>(
  parentCollectionName: string,
  parentId: string
) => {
  try {
    const parentCollection = collection<Parent>(parentCollectionName)
    const parentCollectionItem = await get(parentCollection, parentId)
    if (!parentCollectionItem)
      throw new Error('parentCollectionItem is undefined')

    return parentCollectionItem
  } catch (error) {
    return null
  }
}
