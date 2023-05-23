import { collection, query, Query } from 'typesaurus'

export const queryCollectionItem = async <Parent>(
  collectionName: string,
  queries: Query<Parent, keyof Parent>[]
) => {
  try {
    const parentCollection = collection<Parent>(collectionName)
    const data = await query(parentCollection, queries)
    if (data.length === 0)
      throw new Error(`no data found for ${collectionName}`)

    return data
  } catch (error) {
    return []
  }
}
