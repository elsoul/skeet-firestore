import { collection, subcollection, update } from 'typesaurus'
import { FieldValue } from 'firebase-admin/firestore'

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
      updatedAt: FieldValue.serverTimestamp(),
    }

    await update(childCollection(parentId), childId, data)
    return true
  } catch (error) {
    throw new Error(
      `updateChildCollectionItem(${childCollectionName}): ${error}`
    )
  }
}
