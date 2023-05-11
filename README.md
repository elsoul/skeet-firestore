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
  <a aria-label="License" href="https://github.com/elsoul/skeet/blob/master/LICENSE.txt">
    <img alt="" src="https://badgen.net/badge/license/Apache/blue">
  </a>
    <a aria-label="Code of Conduct" href="https://github.com/elsoul/skeet/blob/master/CODE_OF_CONDUCT.md">
    <img alt="" src="https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg">
  </a>
</p>

# Skeet API Plugin - Solana Transfer

The Skeet Worker Solana Transfer plugin consists of two primary functions:

- `skeetSolTransfer`

- `skeetSplTransfer`

Skeet Solana Transfer container will be automatically deployed on Google Cloud by Skeet CLI.
Skeet API executes Google Cloud Tasks to run Skeet Worker.

## Install

### Add Skeet Worker Plugin

```bash
$ skeet add workerPlugin
? Select Services to deploy (Use arrow keys)
   = Plugins =
❯ solana-transfer
  orca-swap
  jupiter-swap
```

Select `solana-transfer`

### Add Plugin

```bash
$ skeet add yarn -p @skeet-framework/api-plugin-solana-transfer
```

## Usage

### Send Sol

```javascript
import { generateIv } from '@/lib/crypto'
import { genKeypair, getKeypairData } from '@/lib/solanaUtils'
import {
  skeetSolTransfer,
  SkeetSolTransferParam,
} from '@skeet-framework/api-plugin-solana-transfer'

const queueId = 1 // optional
const fromKeypair = await genKeypair()
const toKeypair = await genKeypair()
const keypairData = await getKeypairData(fromKeypair)
const iv = await generateIv() // decrypt key for worker
const rpcUrl = 'https://api.devnet.solana.com/'
const encodedFromSecretKeyString = await decrypt(
  keypairData.unit8Array.join(','),
  iv
)

const transferSol = async () => {
  const skeetSolTransferParam: SkeetSolTransferParam = {
    id: queueId,
    toAddressPubkey: toKeypair.pubkey.toBase58(),
    transferAmountLamport: 1000,
    encodedFromSecretKeyString,
    iv: iv.toString('base64'),
    rpcUrl,
  }
  await skeetSolTransfer(skeetSolTransferParam)
}

transferSol()
```

### Send SPL Token

```javascript
import { generateIv } from '@/lib/crypto'
import { genKeypair, getKeypairData } from '@/lib/solanaUtils'
import {
  skeetSplTransfer,
  SkeetSplTransferParam,
} from '@skeet-framework/api-plugin-solana-transfer'

const queueId = 1 // optional
// e.g. $EPCT - https://solscan.io/token/CvB1ztJvpYQPvdPBePtRzjL4aQidjydtUz61NWgcgQtP
const TOKEN_MINT_ADDRESS = 'CvB1ztJvpYQPvdPBePtRzjL4aQidjydtUz61NWgcgQtP'
const decimal = 6 // TOKEN_MINT_ADDRESS's decimal
const fromKeypair = await genKeypair()
const toKeypair = await genKeypair()
const keypairData = await getKeypairData(fromKeypair)
const iv = await generateIv() // decrypt key for worker
const rpcUrl = 'https://api.mainnet-beta.solana.com/'
const encodedFromSecretKeyString = await decrypt(
  keypairData.unit8Array.join(','),
  iv
)
const transferSpl = async () => {
  const skeetSplTransferParam: SkeetSplTransferParam = {
    id: queueId,
    toAddressPubkey: toKeypair.pubkey.toBase58(),
    tokenMintAddress: TOKEN_MINT_ADDRESS,
    transferAmountLamport: 1000,
    encodedFromSecretKeyString,
    iv: iv.toString('base64'),
    rpcUrl,
    decimal,
  }
  await skeetSplTransfer(skeetSolTransferParam)
}
transferSpl()
```

## Skeet Document

- [https://skeet.dev](https://skeet.dev)

## Skeet TypeScript Serverless Framework

Nexus Prisma, GraphQL, Relay Connection, ApolloServer with Express, TypeScript, PostgreSQL, Jest Test, Google Cloud Run

## What's Skeet?

TypeScript Serverless Framework 'Skeet'.

The Skeet project was launched with the goal of reducing software development, operation, and maintenance costs.

Build Serverless Apps faster.
Powered by TypeScript GraphQL, Prisma, Jest, Prettier, and Google Cloud.

## Dependency

- [TypeScript](https://www.typescriptlang.org/)
- [Node](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Google SDK](https://cloud.google.com/sdk/docs)
- [Docker](https://www.docker.com/)
- [GitHub CLI](https://cli.github.com/)
- [Git Crypt](https://github.com/AGWA/git-crypt)

```bash
$ npm i -g skeet
$ skeet create web-app
```

![Skeet Create](https://storage.googleapis.com/skeet-assets/animation/skeet-create-compressed.gif)

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/elsoul/skeet This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The package is available as open source under the terms of the [Apache-2.0 License](https://www.apache.org/licenses/LICENSE-2.0).

## Code of Conduct

Everyone interacting in the SKEET project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/elsoul/skeet/blob/master/CODE_OF_CONDUCT.md).
