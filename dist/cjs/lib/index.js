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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./addCollectionItem"), exports);
__exportStar(require("./createDataRef"), exports);
__exportStar(require("./createFirestoreDataConverter"), exports);
__exportStar(require("./serverTimestamp"), exports);
__exportStar(require("./getCollectionItem"), exports);
__exportStar(require("./createCollectionRef"), exports);
__exportStar(require("./addMultipleCollectionItems"), exports);
__exportStar(require("./queryCollectionItems"), exports);
__exportStar(require("./updateCollectionItem"), exports);
__exportStar(require("./deleteCollectionItem"), exports);
//# sourceMappingURL=index.js.map