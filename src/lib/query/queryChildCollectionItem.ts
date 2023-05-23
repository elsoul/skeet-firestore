import { collection, query, Query, subcollection } from 'typesaurus'

export const queryChildCollectionItem = async <Child, Parent>(
  parentCollectionName: string,
  childCollectionName: string,
  parentId: string,
  queries: Query<Child, keyof Child>[]
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
    return []
  }
}
