import { collection, subcollection, query, Query } from 'typesaurus'

export const queryGrandGrandChildCollectionItem = async <
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
  childCollectionId: string,
  grandChildCollectionId: string,
  queries: Query<GrandGrandChild, keyof GrandGrandChild>[]
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
    >(grandGrandChildCollectionName, grandChildCollection(childCollectionId))
    const data = await query(
      grandGrandChildCollection(grandChildCollectionId),
      queries
    )
    if (data.length === 0)
      throw new Error(`no data found for ${grandGrandChildCollectionName}`)

    return data
  } catch (error) {
    return []
  }
}
