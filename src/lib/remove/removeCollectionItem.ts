import { collection, remove } from 'typesaurus'

export const removeCollectionItem = async <Parent>(
  parentCollectionName: string,
  parentId: string
) => {
  try {
    const parentCollection = collection<Parent>(parentCollectionName)
    await remove(parentCollection, parentId)

    return true
  } catch (error) {
    throw new Error(`removeCollectionItem(${parentCollectionName}): ${error}`)
  }
}
