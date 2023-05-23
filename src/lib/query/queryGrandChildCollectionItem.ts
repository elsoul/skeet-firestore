import { collection, query, Query, subcollection } from 'typesaurus'

export const queryGrandChildCollectionItem = async <GrandChild, Child, Parent>(
  parentCollectionName: string,
  childCollectionName: string,
  grandChildCollectionName: string,
  parentId: string,
  childCollectionId: string,
  queries: Query<GrandChild, keyof GrandChild>[]
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
    const data = await query(grandChildCollection(childCollectionId), queries)
    if (data.length === 0)
      throw new Error(`no data found for ${grandChildCollectionName}`)

    return data
  } catch (error) {
    return []
  }
}
