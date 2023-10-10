"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverTimestamp = void 0;
const firebase_admin_1 = require("firebase-admin");
const serverTimestamp = () => {
    return firebase_admin_1.firestore.FieldValue.serverTimestamp();
};
exports.serverTimestamp = serverTimestamp;
//# sourceMappingURL=serverTimestamp.js.map