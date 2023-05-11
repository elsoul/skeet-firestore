import { collection, get } from 'typesaurus'

export const isItemExists = async <T>(
  collectionName: string,
  collectionId: string
) => {
  try {
    const mainCollection = collection<T>(collectionName)
    const collectionRef = await get(mainCollection, collectionId)
    if (!collectionRef) return false
    return true
  } catch (error) {
    throw new Error(`isItemExist: ${error}`)
  }
}
