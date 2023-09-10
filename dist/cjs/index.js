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
exports.client = exports.FieldValue = exports.Timestamp = exports.delete = exports.update = exports.query = exports.adds = exports.createCollectionRef = exports.serverTimestamp = exports.add = exports.get = exports.createFirestoreDataConverter = exports.createDataRef = void 0;
var lib_1 = require("./lib");
Object.defineProperty(exports, "createDataRef", { enumerable: true, get: function () { return lib_1.createDataRef; } });
Object.defineProperty(exports, "createFirestoreDataConverter", { enumerable: true, get: function () { return lib_1.createFirestoreDataConverter; } });
Object.defineProperty(exports, "get", { enumerable: true, get: function () { return lib_1.getCollectionItem; } });
Object.defineProperty(exports, "add", { enumerable: true, get: function () { return lib_1.addCollectionItem; } });
Object.defineProperty(exports, "serverTimestamp", { enumerable: true, get: function () { return lib_1.serverTimestamp; } });
Object.defineProperty(exports, "createCollectionRef", { enumerable: true, get: function () { return lib_1.createCollectionRef; } });
Object.defineProperty(exports, "adds", { enumerable: true, get: function () { return lib_1.addMultipleCollectionItems; } });
Object.defineProperty(exports, "query", { enumerable: true, get: function () { return lib_1.queryCollectionItems; } });
Object.defineProperty(exports, "update", { enumerable: true, get: function () { return lib_1.updateCollectionItem; } });
Object.defineProperty(exports, "delete", { enumerable: true, get: function () { return lib_1.deleteCollectionItem; } });
var firestore_1 = require("firebase/firestore");
Object.defineProperty(exports, "Timestamp", { enumerable: true, get: function () { return firestore_1.Timestamp; } });
Object.defineProperty(exports, "FieldValue", { enumerable: true, get: function () { return firestore_1.FieldValue; } });
exports.client = __importStar(require("./client"));
//# sourceMappingURL=index.js.map