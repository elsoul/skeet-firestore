import { collection, subcollection, ref, get } from 'typesaurus'

export const getChildCollectionItem = async <Child, Parent>(
  parentCollectionName: string,
  childCollectionName: string,
  parentId: string,
  childCollectionId: string,
  isRef = true
) => {
  try {
    const parentCollection = collection<Parent>(parentCollectionName)
    const subCollection = subcollection<Child, Parent>(
      childCollectionName,
      parentCollection
    )
    const parentRef = ref(parentCollection, parentId)
    const subCollectionRef = ref(subCollection(parentRef), childCollectionId)
    const subCollectionDoc = await get(
      subCollection(parentId),
      childCollectionId
    )
    if (isRef) return subCollectionRef
    return subCollectionDoc
  } catch (error) {
    throw new Error(`getChildCollectionItem: ${error}`)
  }
}
