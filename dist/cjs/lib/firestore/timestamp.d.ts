import { Timestamp as firestoreTimestamp } from '@google-cloud/firestore';
export declare class Timestamp extends firestoreTimestamp {
    constructor(seconds: number, nanoseconds: number);
}
