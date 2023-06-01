import { Timestamp as firestoreTimestamp } from '@google-cloud/firestore';
export class Timestamp extends firestoreTimestamp {
    constructor(seconds, nanoseconds) {
        super(seconds, nanoseconds);
    }
}
//# sourceMappingURL=timestamp.js.map