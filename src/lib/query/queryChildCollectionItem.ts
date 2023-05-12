import { collection, query, Query, subcollection } from 'typesaurus'

export const queryChildCollectionItem = async <Child, Parent>(
  parentCollectionName: string,
  childCollectionName: string,
  parentId: string,
  queries: Query<Parent, keyof Parent>[]
) => {
  try {
    const parentCollection = collection<Parent>(parentCollectionName)
    const childCollection = subcollection<Child, Parent>(
      childCollectionName,
      parentCollection
    )
    const data = await query(childCollection(parentId), queries)
    if (data.length === 0)
      throw new Error(`no data found for ${childCollectionName}`)

    return data
  } catch (error) {
    throw new Error(`queryChildCollectionItem: ${error}`)
  }
}
