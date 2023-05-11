import {
  addCollectionItem,
  addChildCollectionItem,
  addGrandChildCollectionItem,
  addGrandGrandChildCollectionItem,
  addGrandGrandGrandChildCollectionItem,
  getChildCollectionItem,
  getGrandChildCollectionItems,
  isItemExists,
  isChildItemExists,
} from '@/lib'
import { collection, add, get, upset, Ref } from 'typesaurus'
import * as dotenv from 'dotenv'
dotenv.config()

export {
  addCollectionItem,
  addChildCollectionItem,
  addGrandChildCollectionItem,
  addGrandGrandChildCollectionItem,
  addGrandGrandGrandChildCollectionItem,
  getChildCollectionItem,
  getGrandChildCollectionItems,
  isItemExists,
  isChildItemExists,
  Ref,
  collection,
  add,
  get,
  upset,
}
