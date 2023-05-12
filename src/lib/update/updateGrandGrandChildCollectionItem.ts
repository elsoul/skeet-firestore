import { add, collection, subcollection, set, get, update } from 'typesaurus'
import { getTimestamp } from '../../utils/time'

export const updateGrandGrandChildCollectionItem = async <
  GrandGrandChild,
  GrandChild,
  Child,
  Parent
>(
  parentCollectionName: string,
  childCollectionName: string,
  grandChildCollectionName: string,
  grandGrandChildCollectionName: string,
  parentId: string,
  childId: string,
  grandChildId: string,
  grandGrandChildId: string,
  params: Partial<GrandGrandChild>
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
    const grandGrandChildCollection = subcollection<
      GrandGrandChild,
      GrandChild
    >(grandGrandChildCollectionName, grandChildCollection(childId))
    const data = {
      ...params,
      updatedAt: getTimestamp(),
    }
    await update(
      grandGrandChildCollection(grandChildId),
      grandGrandChildId,
      data
    )
  } catch (error) {
    throw new Error(`updateGrandGrandChildCollectionItem: ${error}`)
  }
}
