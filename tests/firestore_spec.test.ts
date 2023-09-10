import {
  describe,
  test,
  beforeEach,
  beforeAll,
  afterAll,
  expect,
} from '@jest/globals'
import {
  QueryCondition,
  addCollectionItem,
  addMultipleCollectionItems,
  deleteCollectionItem,
  getCollectionItem,
  queryCollectionItems,
  updateCollectionItem,
} from '../src/lib/index'
import * as admin from 'firebase-admin'
import {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
  RulesTestEnvironment,
} from '@firebase/rules-unit-testing'

/**
 * The emulator will accept any project ID for testing.
 *
 * Reference: https://firebase.google.com/docs/rules/unit-tests
 *            https://github.com/firebase/quickstart-testing/tree/master/unit-test-security-rules-v9
 */
const PROJECT_ID = 'fakeproject'
let adminApp: admin.app.App
let testEnv: RulesTestEnvironment

beforeAll(async () => {
  // Initialize the admin app with the project ID  before all tests
  adminApp = admin.initializeApp({ projectId: PROJECT_ID })

  testEnv = await initializeTestEnvironment({
    projectId: PROJECT_ID,
  })
})

beforeEach(async () => {
  // Clear the database between tests
  await testEnv.clearFirestore()
})

afterAll(async () => {
  // Cleanup the test environment after all tests have been run
  await testEnv.cleanup()
})

// asserting utiliy : expectFirestorePermissionDenied
async function expectFirestorePermissionDenied(promise: Promise<any>) {
  const errorResult = await assertFails(promise)
  expect(errorResult.code).toBe('permission-denied' || 'PERMISSION_DENIED')
}

// asserting utiliy : expectFirestorePermissionUpdateSucceeds
async function expectFirestorePermissionUpdateSucceeds(promise: Promise<any>) {
  const successResult = await assertSucceeds(promise)
  expect(successResult).toBeUndefined()
}

// asserting utiliy : expectPermissionGetSucceeds
async function expectPermissionGetSucceeds(promise: Promise<any>) {
  const result = await assertSucceeds(promise)
  expect(result).not.toBeUndefined()
}

type User = {
  name?: string
  age?: number
}

describe('Add Collection Item', () => {
  test('should add a item to the database', async () => {
    const db = adminApp.firestore()
    const path = 'Users'
    const data: User = {
      name: 'John Doe',
      age: 30,
    }

    const docRef = await addCollectionItem<User>(db, path, data)

    await expectPermissionGetSucceeds(docRef.get())
    expect((await docRef.get()).data()?.name).toBe('John Doe')
    expect((await docRef.get()).data()?.age).toBe(30)
  })
  test('should item has createdAt and updatedAt', async () => {
    const db = adminApp.firestore()
    const path = 'Users'
    const data: User = {
      name: 'John Doe',
      age: 30,
    }

    const docRef = await addCollectionItem<User>(db, path, data)
    const docData = (await docRef.get()).data()
    expect(docData).toHaveProperty('createdAt')
    expect(docData).toHaveProperty('updatedAt')
  })
})

describe('Adds Collection Items', () => {
  test('should write two items and return length of items', async () => {
    const db = adminApp.firestore()
    const path = 'Users'
    const users: User[] = [
      { name: 'John Doe', age: 30 },
      { name: 'Jane Smith', age: 25 },
    ]

    const results = await addMultipleCollectionItems<User>(db, path, users)

    expect(results[0].length).toBe(users.length)
  })
  test('should write two items and return length of items', async () => {
    const db = adminApp.firestore()
    const path = 'Users'
    const users: User[] = [
      { name: 'John Doe', age: 30 },
      { name: 'Jane Smith', age: 25 },
    ]

    await addMultipleCollectionItems<User>(db, path, users)

    const querySnapshot = await db.collection(path).get()
    const results: User[] = []
    querySnapshot.forEach((doc) => {
      results.push(doc.data() as User)
    })

    expect(results.find((v) => v.name === 'John Doe')).toBeDefined()
    expect(results.find((v) => v.name === 'Jane Smith')).toBeDefined()
  })
})

describe('Get Collection Item', () => {
  test('should get item from the database', async () => {
    const db = adminApp.firestore()
    const path = 'Users'
    const docId = 'user123'
    const user = { name: 'John Doe', age: 30 }
    await db.doc(`${path}/${docId}`).set(user)

    const result = await getCollectionItem<User>(db, path, docId)

    expect(result.name).toBe('John Doe')
    expect(result.age).toBe(30)
  })
})

describe('Query Collection Items', () => {
  test('should get item from the database using the simple conditions', async () => {
    const db = adminApp.firestore()
    const path = 'Users'
    const userUnderAge25 = { name: 'Jane Smith', age: 20 }
    const userOverAge25 = { name: 'John Doe', age: 30 }
    await db.doc(`${path}/id1`).set(userUnderAge25)
    await db.doc(`${path}/id2`).set(userOverAge25)

    // Simple query to get users over 25 years old
    const simpleConditions: QueryCondition[] = [
      { field: 'age', operator: '>', value: 25 },
    ]
    const usersByAge = await queryCollectionItems<User>(
      db,
      path,
      simpleConditions
    )

    expect(usersByAge.length).toBe(1)
    expect(usersByAge[0].name).toBe('John Doe')
  })

  test('should get item from the database using the advanced conditions', async () => {
    const db = adminApp.firestore()
    const path = 'Users'
    const userUnderAge25 = { name: 'Jane Smith', age: 20 }
    const userOverAge25_Catherine = { name: 'Catherine Doe', age: 30 }
    const userOverAge25_Bob = { name: 'Bob Doe', age: 40 }
    const userOverAge25_Alice = { name: 'Alice Doe', age: 50 }

    await db.doc(`${path}/id1`).set(userOverAge25_Bob)
    await db.doc(`${path}/id2`).set(userUnderAge25)
    await db.doc(`${path}/id3`).set(userOverAge25_Catherine)
    await db.doc(`${path}/id4`).set(userOverAge25_Alice)

    // Advanced query to get users over 25 years old, ordered by desc
    // Limitations: If you include a filter with a range comparison (<, <=, >, >=), your first ordering must be on the same field
    // So we can't use multiple fields with a range comparison for now.
    // https://firebase.google.com/docs/firestore/query-data/order-limit-data
    const advancedConditions: QueryCondition[] = [
      { field: 'age', operator: '>', value: 25 },
      { field: 'age', orderDirection: 'desc' },
    ]

    const usersByAge = await queryCollectionItems<User>(
      db,
      path,
      advancedConditions
    )

    expect(usersByAge.length).toBe(3)
    expect(usersByAge[0].name).toBe('Alice Doe')
    expect(usersByAge[1].name).toBe('Bob Doe')
    expect(usersByAge[2].name).toBe('Catherine Doe')

    // set timeout 10000ms
    // because "Exceeded timeout of 5000 ms for a test.
    // See https://jestjs.io/docs/api#testname-fn-timeout
  }, 10000)

  test('should get item from the database using the limited conditions', async () => {
    const db = adminApp.firestore()
    const path = 'Users'
    const users = [
      { name: 'John Doe1', age: 30 },
      { name: 'John Doe2', age: 31 },
      { name: 'John Doe3', age: 32 },
      { name: 'John Doe4', age: 33 },
      { name: 'John Doe5', age: 34 },
      { name: 'John Doe6', age: 35 },
      { name: 'John Doe7', age: 36 },
    ]

    for await (const [index, user] of users.entries()) {
      await db.doc(`${path}/${index}`).set(user)
    }

    // Query to get users over 25 years old and limit the results to 5
    const limitedConditions: QueryCondition[] = [
      { field: 'age', operator: '>', value: 25 },
      { field: 'age', orderDirection: 'asc' },
      { limit: 5 },
    ]

    const fiveUsers = await queryCollectionItems<User>(
      db,
      path,
      limitedConditions
    )

    expect(fiveUsers.length).toBe(5)
    expect(fiveUsers[0].name).toBe('John Doe1')
    expect(fiveUsers[4].name).toBe('John Doe5')

    // set timeout 10000ms
    // because "Exceeded timeout of 5000 ms for a test.
    // See https://jestjs.io/docs/api#testname-fn-timeout
  }, 10000)
})

describe('Update Collection Item', () => {
  test('should update item from the database', async () => {
    const db = adminApp.firestore()
    const path = 'Users'
    const docId = 'user123'
    const user = { name: 'John Doe', age: 30 }
    await db.doc(`${path}/${docId}`).set(user)

    const updateData: User = {
      age: 38,
    }

    const result = await updateCollectionItem<User>(db, path, docId, updateData)

    expect(result).toBe(true)

    const updatedData = (await db.doc(`${path}/${docId}`).get()).data() as User
    expect(updatedData.age).toBe(38)
    expect(updatedData.name).toBe('John Doe')
  })

  test('raise an exception if update the item does not exist in the database', async () => {
    const db = adminApp.firestore()
    const path = 'Users'
    const docId = 'user123'
    const user = { name: 'John Doe', age: 30 }
    await db.doc(`${path}/${docId}`).set(user)

    const updatedData: User = {
      age: 38,
    }
    const thrownAction = async () => {
      await updateCollectionItem<User>(db, path, 'ignore', updatedData)
    }
    expect(thrownAction).rejects.toThrow()
  })
})

describe('Delete Collection Item', () => {
  test('should delete item from the database', async () => {
    const db = adminApp.firestore()
    const path = 'Users'
    const docId = 'user123'
    const user = { name: 'John Doe', age: 30 }
    await db.doc(`${path}/${docId}`).set(user)
    const existData = (await db.doc(`${path}/${docId}`).get()).data() as User
    expect(existData.name).toBe('John Doe')

    const result = await deleteCollectionItem(db, path, docId)

    expect(result).toEqual(true)
    expect((await db.doc(`${path}/${docId}`).get()).exists).toBeFalsy
  })

  test('raise an exception if delete the item does not exist in the database', async () => {
    const db = adminApp.firestore()
    const path = 'Users'
    const docId = 'user123'
    const user = { name: 'John Doe', age: 30 }
    await db.doc(`${path}/${docId}`).set(user)
    const existData = (await db.doc(`${path}/${docId}`).get()).data() as User
    expect(existData.name).toBe('John Doe')
    const thrownAction = async () => {
      await deleteCollectionItem(db, path, 'ignore')
    }
    expect(thrownAction).rejects.toThrow()
  })
})
