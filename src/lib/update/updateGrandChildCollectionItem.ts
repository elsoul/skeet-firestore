import { collection, subcollection, update } from 'typesaurus'
import { getTimestamp } from '@/utils/time'

export const updateGrandChildCollectionItem = async <GrandChild, Child, Parent>(
  parentCollectionName: string,
  childCollectionName: string,
  grandChildCollectionName: string,
  parentId: string,
  childId: string,
  grandChildId: string,
  params: Partial<GrandChild>
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

    const data = {
      ...params,
      updatedAt: getTimestamp(),
    }
    await update(grandChildCollection(childId), grandChildId, data)
    return true
  } catch (error) {
    throw new Error(
      `updateGrandChildCollectionItem(${grandChildCollectionName}): ${error}`
    )
  }
}
