import { add, collection, get, set, subcollection } from 'typesaurus'
import { FieldValue } from 'firebase-admin/firestore'

export const addChildCollectionItem = async <Child, Parent>(
  parentCollectionName: string,
  childCollectionName: string,
  parentId: string,
  params: Child,
  id?: string
) => {
  try {
    const parentCollection = collection<Parent>(parentCollectionName)
    const mainCollection = subcollection<Child, Parent>(
      childCollectionName,
      parentCollection
    )

    const body = mainCollection(parentId)
    const datetimeNow = FieldValue.serverTimestamp()
    const data = {
      ...params,
      createdAt: datetimeNow,
      updatedAt: datetimeNow,
    }

    if (!id) {
      return await add(body, data)
    } else {
      const collectionId = id || '1'
      await set(body, collectionId, data)
      const doc = await get(body, collectionId)
      if (!doc) throw new Error('doc is undefined')
      return doc.ref
    }
  } catch (error) {
    throw new Error(`addChildCollectionItem(${childCollectionName}): ${error}`)
  }
}
