import { collection, subcollection, query, Query } from 'typesaurus'

export const queryGrandGrandGrandChildCollectionItem = async <
  GrandGrandGrandChild,
  GrandGrandChild,
  GrandChild,
  Child,
  Parent
>(
  parentCollectionName: string,
  childCollectionName: string,
  grandChildCollectionName: string,
  grandGrandChildCollectionName: string,
  grandGrandGrandChildCollectionName: string,
  parentId: string,
  childCollectionId: string,
  grandChildCollectionId: string,
  grandGrandChildCollectionId: string,
  queries: Query<GrandGrandGrandChild, keyof GrandGrandGrandChild>[]
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
    const grandGrandGrandChildCollection = subcollection<
      GrandGrandGrandChild,
      GrandGrandChild
    >(
      grandGrandGrandChildCollectionName,
      grandGrandChildCollection(grandChildCollectionId)
    )

    const data = await query(
      grandGrandGrandChildCollection(grandGrandChildCollectionId),
      queries
    )
    if (data.length === 0)
      throw new Error(`no data found for ${grandGrandGrandChildCollectionName}`)

    return data
  } catch (error) {
    return []
  }
}
