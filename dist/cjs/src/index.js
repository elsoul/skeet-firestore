"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldValue = exports.Timestamp = exports.upsert = exports.remove = exports.update = exports.query = exports.adds = exports.createCollectionRef = exports.serverTimestamp = exports.add = exports.get = exports.createFirestoreDataConverter = exports.createDataRef = void 0;
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
Object.defineProperty(exports, "remove", { enumerable: true, get: function () { return lib_1.deleteCollectionItem; } });
Object.defineProperty(exports, "upsert", { enumerable: true, get: function () { return lib_1.upsertCollectionItem; } });
var firestore_1 = require("firebase/firestore");
Object.defineProperty(exports, "Timestamp", { enumerable: true, get: function () { return firestore_1.Timestamp; } });
Object.defineProperty(exports, "FieldValue", { enumerable: true, get: function () { return firestore_1.FieldValue; } });
//# sourceMappingURL=index.js.map