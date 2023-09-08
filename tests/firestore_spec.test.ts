import { describe, test, beforeEach, beforeAll, afterAll, expect } from '@jest/globals'
import { addCollectionItem } from '../src/lib/index'
import * as admin from 'firebase-admin'
import { assertFails, assertSucceeds, initializeTestEnvironment, RulesTestEnvironment } from '@firebase/rules-unit-testing'

/**
 * The emulator will accept any project ID for testing.
 * 
 * Reference: https://firebase.google.com/docs/rules/unit-tests
 *            https://github.com/firebase/quickstart-testing/tree/master/unit-test-security-rules-v9
 */
const PROJECT_ID = "fakeproject"
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
  //await testEnv.cleanup()
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
  expect(assertSucceeds(promise)).not.toBeUndefined()
}

type User = {
  name: string,
  age: number
}

describe("Add Collection Item", () => {
  test("should add a document to the database", async () => {
    const db = adminApp.firestore()
    const path = 'Users'
    const data: User = {
      name: 'John Doe',
      age: 30,
    }
    //firebase.firestore.Firestore
    const docRef = await addCollectionItem<User>(db, path, data)
    await expectPermissionGetSucceeds(docRef.get())
    expect((await docRef.get()).data()?.name).toBe('John Doe')
  })
})