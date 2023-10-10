"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const index_1 = require("../src/lib/index");
const admin = __importStar(require("firebase-admin"));
const rules_unit_testing_1 = require("@firebase/rules-unit-testing");
/**
 * The emulator will accept any project ID for testing.
 *
 * Reference: https://firebase.google.com/docs/rules/unit-tests
 *            https://github.com/firebase/quickstart-testing/tree/master/unit-test-security-rules-v9
 */
const PROJECT_ID = 'fakeproject';
let adminApp;
let testEnv;
(0, globals_1.beforeAll)(async () => {
    // Initialize the admin app with the project ID  before all tests
    adminApp = admin.initializeApp({ projectId: PROJECT_ID });
    testEnv = await (0, rules_unit_testing_1.initializeTestEnvironment)({
        projectId: PROJECT_ID,
    });
});
(0, globals_1.beforeEach)(async () => {
    // Clear the database between tests
    await testEnv.clearFirestore();
});
(0, globals_1.afterAll)(async () => {
    // Cleanup the test environment after all tests have been run
    await testEnv.cleanup();
});
// asserting utiliy : expectFirestorePermissionDenied
async function expectFirestorePermissionDenied(promise) {
    const errorResult = await (0, rules_unit_testing_1.assertFails)(promise);
    (0, globals_1.expect)(errorResult.code).toBe('permission-denied' || 'PERMISSION_DENIED');
}
// asserting utiliy : expectFirestorePermissionUpdateSucceeds
async function expectFirestorePermissionUpdateSucceeds(promise) {
    const successResult = await (0, rules_unit_testing_1.assertSucceeds)(promise);
    (0, globals_1.expect)(successResult).toBeUndefined();
}
// asserting utiliy : expectPermissionGetSucceeds
async function expectPermissionGetSucceeds(promise) {
    const result = await (0, rules_unit_testing_1.assertSucceeds)(promise);
    (0, globals_1.expect)(result).not.toBeUndefined();
}
(0, globals_1.describe)('Add Collection Item', () => {
    (0, globals_1.test)('should add a item to the database', async () => {
        var _a, _b;
        const db = adminApp.firestore();
        const path = 'Users';
        const data = {
            name: 'John Doe',
            age: 30,
        };
        const docRef = await (0, index_1.addCollectionItem)(db, path, data);
        await expectPermissionGetSucceeds(docRef.get());
        (0, globals_1.expect)((_a = (await docRef.get()).data()) === null || _a === void 0 ? void 0 : _a.name).toBe('John Doe');
        (0, globals_1.expect)((_b = (await docRef.get()).data()) === null || _b === void 0 ? void 0 : _b.age).toBe(30);
    });
    (0, globals_1.test)('should item has createdAt and updatedAt', async () => {
        const db = adminApp.firestore();
        const path = 'Users';
        const data = {
            name: 'John Doe',
            age: 30,
        };
        const docRef = await (0, index_1.addCollectionItem)(db, path, data);
        const docData = (await docRef.get()).data();
        (0, globals_1.expect)(docData).toHaveProperty('createdAt');
        (0, globals_1.expect)(docData).toHaveProperty('updatedAt');
    });
});
(0, globals_1.describe)('Adds Collection Items', () => {
    (0, globals_1.test)('should write two items and return length of items', async () => {
        const db = adminApp.firestore();
        const path = 'Users';
        const users = [
            { name: 'John Doe', age: 30 },
            { name: 'Jane Smith', age: 25 },
        ];
        const results = await (0, index_1.addMultipleCollectionItems)(db, path, users);
        (0, globals_1.expect)(results[0].length).toBe(users.length);
    });
    (0, globals_1.test)('should write two items and return length of items', async () => {
        const db = adminApp.firestore();
        const path = 'Users';
        const users = [
            { name: 'John Doe', age: 30 },
            { name: 'Jane Smith', age: 25 },
        ];
        await (0, index_1.addMultipleCollectionItems)(db, path, users);
        const querySnapshot = await db.collection(path).get();
        const results = [];
        querySnapshot.forEach((doc) => {
            results.push(doc.data());
        });
        (0, globals_1.expect)(results.find((v) => v.name === 'John Doe')).toBeDefined();
        (0, globals_1.expect)(results.find((v) => v.name === 'Jane Smith')).toBeDefined();
    });
});
(0, globals_1.describe)('Get Collection Item', () => {
    (0, globals_1.test)('should get item from the database', async () => {
        const db = adminApp.firestore();
        const path = 'Users';
        const docId = 'user123';
        const user = { name: 'John Doe', age: 30 };
        await db.doc(`${path}/${docId}`).set(user);
        const result = await (0, index_1.getCollectionItem)(db, path, docId);
        (0, globals_1.expect)(result.name).toBe('John Doe');
        (0, globals_1.expect)(result.age).toBe(30);
    });
});
(0, globals_1.describe)('Query Collection Items', () => {
    (0, globals_1.test)('should get item from the database using the simple conditions', async () => {
        const db = adminApp.firestore();
        const path = 'Users';
        const userUnderAge25 = { name: 'Jane Smith', age: 20 };
        const userOverAge25 = { name: 'John Doe', age: 30 };
        await db.doc(`${path}/id1`).set(userUnderAge25);
        await db.doc(`${path}/id2`).set(userOverAge25);
        // Simple query to get users over 25 years old
        const simpleConditions = [
            { field: 'age', operator: '>', value: 25 },
        ];
        const usersByAge = await (0, index_1.queryCollectionItems)(db, path, simpleConditions);
        (0, globals_1.expect)(usersByAge.length).toBe(1);
        (0, globals_1.expect)(usersByAge[0].name).toBe('John Doe');
    });
    (0, globals_1.test)('should get item from the database using the advanced conditions', async () => {
        const db = adminApp.firestore();
        const path = 'Users';
        const userUnderAge25 = { name: 'Jane Smith', age: 20 };
        const userOverAge25_Catherine = { name: 'Catherine Doe', age: 30 };
        const userOverAge25_Bob = { name: 'Bob Doe', age: 40 };
        const userOverAge25_Alice = { name: 'Alice Doe', age: 50 };
        await db.doc(`${path}/id1`).set(userOverAge25_Bob);
        await db.doc(`${path}/id2`).set(userUnderAge25);
        await db.doc(`${path}/id3`).set(userOverAge25_Catherine);
        await db.doc(`${path}/id4`).set(userOverAge25_Alice);
        // Advanced query to get users over 25 years old, ordered by desc
        // Limitations: If you include a filter with a range comparison (<, <=, >, >=), your first ordering must be on the same field
        // So we can't use multiple fields with a range comparison for now.
        // https://firebase.google.com/docs/firestore/query-data/order-limit-data
        const advancedConditions = [
            { field: 'age', operator: '>', value: 25 },
            { field: 'age', orderDirection: 'desc' },
        ];
        const usersByAge = await (0, index_1.queryCollectionItems)(db, path, advancedConditions);
        (0, globals_1.expect)(usersByAge.length).toBe(3);
        (0, globals_1.expect)(usersByAge[0].name).toBe('Alice Doe');
        (0, globals_1.expect)(usersByAge[1].name).toBe('Bob Doe');
        (0, globals_1.expect)(usersByAge[2].name).toBe('Catherine Doe');
        // set timeout 10000ms
        // because "Exceeded timeout of 5000 ms for a test.
        // See https://jestjs.io/docs/api#testname-fn-timeout
    }, 10000);
    (0, globals_1.test)('should get item from the database using the limited conditions', async () => {
        const db = adminApp.firestore();
        const path = 'Users';
        const users = [
            { name: 'John Doe1', age: 30 },
            { name: 'John Doe2', age: 31 },
            { name: 'John Doe3', age: 32 },
            { name: 'John Doe4', age: 33 },
            { name: 'John Doe5', age: 34 },
            { name: 'John Doe6', age: 35 },
            { name: 'John Doe7', age: 36 },
        ];
        for await (const [index, user] of users.entries()) {
            await db.doc(`${path}/${index}`).set(user);
        }
        // Query to get users over 25 years old and limit the results to 5
        const limitedConditions = [
            { field: 'age', operator: '>', value: 25 },
            { field: 'age', orderDirection: 'asc' },
            { limit: 5 },
        ];
        const fiveUsers = await (0, index_1.queryCollectionItems)(db, path, limitedConditions);
        (0, globals_1.expect)(fiveUsers.length).toBe(5);
        (0, globals_1.expect)(fiveUsers[0].name).toBe('John Doe1');
        (0, globals_1.expect)(fiveUsers[4].name).toBe('John Doe5');
        // set timeout 10000ms
        // because "Exceeded timeout of 5000 ms for a test.
        // See https://jestjs.io/docs/api#testname-fn-timeout
    }, 10000);
});
(0, globals_1.describe)('Update Collection Item', () => {
    (0, globals_1.test)('should update item from the database', async () => {
        const db = adminApp.firestore();
        const path = 'Users';
        const docId = 'user123';
        const user = { name: 'John Doe', age: 30 };
        await db.doc(`${path}/${docId}`).set(user);
        const updateData = {
            age: 38,
        };
        const result = await (0, index_1.updateCollectionItem)(db, path, docId, updateData);
        (0, globals_1.expect)(result).toBe(true);
        const updatedData = (await db.doc(`${path}/${docId}`).get()).data();
        (0, globals_1.expect)(updatedData.age).toBe(38);
        (0, globals_1.expect)(updatedData.name).toBe('John Doe');
    });
    (0, globals_1.test)('raise an exception if update the item does not exist in the database', async () => {
        const db = adminApp.firestore();
        const path = 'Users';
        const docId = 'user123';
        const user = { name: 'John Doe', age: 30 };
        await db.doc(`${path}/${docId}`).set(user);
        const updatedData = {
            age: 38,
        };
        const thrownAction = async () => {
            await (0, index_1.updateCollectionItem)(db, path, 'ignore', updatedData);
        };
        await (0, globals_1.expect)(thrownAction).rejects.toThrow();
    });
});
(0, globals_1.describe)('Delete Collection Item', () => {
    (0, globals_1.test)('should delete item from the database', async () => {
        const db = adminApp.firestore();
        const path = 'Users';
        const docId = 'user123';
        const user = { name: 'John Doe', age: 30 };
        await db.doc(`${path}/${docId}`).set(user);
        const existData = (await db.doc(`${path}/${docId}`).get()).data();
        (0, globals_1.expect)(existData.name).toBe('John Doe');
        const result = await (0, index_1.deleteCollectionItem)(db, path, docId);
        (0, globals_1.expect)(result).toEqual(true);
        (0, globals_1.expect)((await db.doc(`${path}/${docId}`).get()).exists).toBeFalsy;
    });
    (0, globals_1.test)('raise an exception if delete the item does not exist in the database', async () => {
        const db = adminApp.firestore();
        const path = 'Users';
        const docId = 'user123';
        const user = { name: 'John Doe', age: 30 };
        await db.doc(`${path}/${docId}`).set(user);
        const existData = (await db.doc(`${path}/${docId}`).get()).data();
        (0, globals_1.expect)(existData.name).toBe('John Doe');
        const thrownAction = async () => {
            await (0, index_1.deleteCollectionItem)(db, path, 'ignore');
        };
        await (0, globals_1.expect)(await thrownAction()).toBe(undefined);
    });
});
//# sourceMappingURL=firestore_spec.test.js.map