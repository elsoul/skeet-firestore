import { collection, subcollection, update } from 'typesaurus'
import { getTimestamp } from '../../utils/time'

export const updateChildCollectionItem = async <Child, Parent>(
  parentCollectionName: string,
  childCollectionName: string,
  parentId: string,
  childId: string,
  params: Partial<Child>
) => {
  try {
    const parentCollection = collection<Parent>(parentCollectionName)
    const childCollection = subcollection<Child, Parent>(
      childCollectionName,
      parentCollection
    )
    const data = {
      ...params,
      updatedAt: getTimestamp(),
    }

    await update(childCollection(parentId), childId, data)
    return true
  } catch (error) {
    throw new Error(`updateChildCollectionItem: ${error}`)
  }
}
