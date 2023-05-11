<a href="https://skeet.dev">
  <img src="https://user-images.githubusercontent.com/20677823/221215449-93a7b5a8-5f33-4da8-9dd4-d0713db0a280.png" alt="Skeet Framework Logo">
</a>
<p align="center">
  <a href="https://twitter.com/intent/follow?screen_name=ELSOUL_LABO2">
    <img src="https://img.shields.io/twitter/follow/ELSOUL_LABO2.svg?label=Follow%20@ELSOUL_LABO2" alt="Follow @ELSOUL_LABO2" />
  </a>
  <br/>

  <a aria-label="npm version" href="https://www.npmjs.com/package/skeet">
    <img alt="" src="https://badgen.net/npm/v/skeet">
  </a>
  <a aria-label="Downloads Number" href="https://www.npmjs.com/package/skeet">
    <img alt="" src="https://badgen.net/npm/dt/skeet">
  </a>
  <a aria-label="License" href="https://github.com/elsoul/skeet-cli/blob/master/LICENSE.txt">
    <img alt="" src="https://badgen.net/badge/license/Apache/blue">
  </a>
    <a aria-label="Code of Conduct" href="https://github.com/elsoul/skeet-cli/blob/master/CODE_OF_CONDUCT.md">
    <img alt="" src="https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg">
  </a>
</p>

# Skeet Framework Plugin - Firestore

## Install

```bash
$ skeet yarn add -p @skeet-framework/firestore
```

or

```bash
$ yarn add @skeet-framework/firestore
```

## Usage

### Create Firestore Collection/Document

Autogenerate ID String

```typescript
import { addCollectionItem } from '@skeet-framework/firestore'
import { User } from '@/models/userModels.ts'

const run = async () => {
  const collectionName = 'User'
  const params: User = {
    name: 'Satoshi',
  }
  const response = await addCollectionItem<User>(collectionName, params)
  console.log('Ref', response)
}

run()
```

Define Your ID

```typescript
import { addCollectionItem } from '@skeet-framework/firestore'
import { User } from '@/models/userModels.ts'

const run = async () => {
  const collectionName = 'User'
  const params: User = {
    name: 'Satoshi',
  }
  const id = '2023-04-20'
  const response = await addCollectionItem<User>(collectionName, params, id)
  console.log('Ref', response)
}

run()
```

## Skeet Document

- [https://skeet.dev](https://skeet.dev)

## Skeet TypeScript Serverless Framework

Firestore, Cloud Functions, TypeScript, Jest Test, Google Cloud Load Balancer, Cloud Armor

## What's Skeet?

TypeScript Serverless Framework 'Skeet'.

The Skeet project was launched with the goal of reducing software development, operation, and maintenance costs.

Build Serverless Apps faster.
Powered by TFirestore, Cloud Functions, Typesaurus, Jest, Prettier, and Google Cloud.

## Dependency

- [TypeScript](https://www.typescriptlang.org/)
- [Node](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Google SDK](https://cloud.google.com/sdk/docs)
- [GitHub CLI](https://cli.github.com/)
- [Typesaurus](https://typesaurus.com/)

```bash
$ npm i -g @skeet-framework/cli
$ skeet create web-app
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/elsoul/skeet This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The package is available as open source under the terms of the [Apache-2.0 License](https://www.apache.org/licenses/LICENSE-2.0).

## Code of Conduct

Everyone interacting in the SKEET project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/elsoul/skeet-cli/blob/master/CODE_OF_CONDUCT.md).
