<a href="https://skeet.dev">
  <img src="https://user-images.githubusercontent.com/20677823/221215449-93a7b5a8-5f33-4da8-9dd4-d0713db0a280.png" alt="Skeet Framework Logo">
</a>
<p align="center">
  <a href="https://twitter.com/intent/follow?screen_name=SkeetDev">
    <img src="https://img.shields.io/twitter/follow/ELSOUL_LABO2.svg?label=Follow%20@ELSOUL_LABO2" alt="Follow @ELSOUL_LABO2" />
  </a>
  <br/>

  <a aria-label="npm version" href="https://www.npmjs.com/package/@skeet-framework/firestore">
    <img alt="" src="https://badgen.net/npm/v/@skeet-framework/firestore">
  </a>
  <a aria-label="Downloads Number" href="https://www.npmjs.com/package/@skeet-framework/firestore">
    <img alt="" src="https://badgen.net/npm/dt/@skeet-framework/firestore">
  </a>
  <a aria-label="License" href="https://github.com/elsoul/skeet-firestore/blob/master/LICENSE.txt">
    <img alt="" src="https://badgen.net/badge/license/Apache/blue">
  </a>
    <a aria-label="Code of Conduct" href="https://github.com/elsoul/skeet-firestore/blob/master/CODE_OF_CONDUCT.md">
    <img alt="" src="https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg">
  </a>
</p>

# Skeet Framework Plugin - Firestore

Skeet Firestore Plugin for CRUD Firestore operation with Firestore Converter.
Type safe, easy to use, and easy to test.

# Installation

```bash
$ skeet yarn add -p @skeet-framework/firestore
```

or

```bash
$ yarn add @skeet-framework/firestore
```

# Skeet Firestore Docs

- [https://skeet.dev/doc/backend/skeet-firestore/](https://skeet.dev/doc/backend/skeet-firestore/)

- [Skeet Firestore TypeDoc](https://elsoul.github.io/skeet-firestore/)

# Features

All CRUD operations are supported with Firestore Converter.
createdAt and updatedAt are automatically added to the document with Firebase ServerTimestamp.

- [x] Add Collection Item
- [x] Adds Collection Items
- [x] Update Collection Item
- [x] Delete Collection Item
- [x] Get Collection Item
- [x] Query Collection Items

# Usage

## Initialize

```typescript
import * as admin from 'firebase-admin'

admin.initializeApp()
```

or

```typescript
import * as firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
  // Project configuration
})
```

## Add Collection Item

```ts
import { firestore } from 'firebase-admin'
import * as admin from 'firebase-admin'
import { add } from '@skeet-framework/firestore'

const db = admin.firestore()
const data: User = {
  name: 'John Doe',
  age: 30,
}

async function run() {
  try {
    const path = 'Users'
    const docRef = await add<User>(db, path, data)
    console.log(`Document added with ID: ${docRef.id}`)
  } catch (error) {
    console.error(`Error adding document: ${error}`)
  }
}

run()
```

## Adds Collection Items

```ts
import { firestore } from 'firebase-admin'
import * as admin from 'firebase-admin'
import { adds } from '@skeet-framework/firestore'

const db = admin.firestore()
const users: User[] = [
  { name: 'John Doe', age: 30 },
  { name: 'Jane Smith', age: 25 },
  // ... more users ...
]

async function run() {
  try {
    const path = 'Users'
    const results = await adds<User>(db, path, users)
    console.log(`Added ${users.length} users in ${results.length} batches.`)
  } catch (error) {
    console.error(`Error adding documents: ${error}`)
  }
}

run()
```

# Skeet Framework Document

- [https://skeet.dev](https://skeet.dev)

# Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/elsoul/skeet This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

# License

The package is available as open source under the terms of the [Apache-2.0 License](https://www.apache.org/licenses/LICENSE-2.0).

# Code of Conduct

Everyone interacting in the SKEET project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/elsoul/skeet-firestore/blob/master/CODE_OF_CONDUCT.md).
