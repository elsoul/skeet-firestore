"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timestamp = void 0;
const firestore_1 = require("@google-cloud/firestore");
class Timestamp extends firestore_1.Timestamp {
    constructor(seconds, nanoseconds) {
        super(seconds, nanoseconds);
    }
}
exports.Timestamp = Timestamp;
//# sourceMappingURL=timestamp.js.map