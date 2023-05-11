import { collection, subcollection, query, order } from 'typesaurus'

export const getGrandChildCollectionItems = async <GrandChild, Child, Parent>(
  parentCollectionName: string,
  childCollectionName: string,
  grandChildCollectionName: string,
  parentId: string,
  childCollectionId: string
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
    const childCollectionDocs = await query(
      grandChildCollection(childCollectionId),
      [order('createdAt', 'asc')]
    )
    const messages = []
    for await (const childCollectionDoc of childCollectionDocs) {
      messages.push(childCollectionDoc.data)
    }
    return messages
  } catch (error) {
    throw new Error(`getChildCollectionItem: ${error}`)
  }
}
