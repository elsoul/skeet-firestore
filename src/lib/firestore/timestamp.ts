import { Timestamp as firestoreTimestamp } from '@google-cloud/firestore'

export class Timestamp extends firestoreTimestamp {
  constructor(seconds: number, nanoseconds: number) {
    super(seconds, nanoseconds)
  }
}
