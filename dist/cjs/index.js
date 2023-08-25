"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timestamp = exports.delete = exports.update = exports.query = exports.adds = exports.createCollectionRef = exports.add = exports.serverTimestamp = exports.getCollectionItemData = exports.get = exports.createFirestoreDataConverter = exports.createDataRef = void 0;
var lib_1 = require("./lib");
Object.defineProperty(exports, "createDataRef", { enumerable: true, get: function () { return lib_1.createDataRef; } });
Object.defineProperty(exports, "createFirestoreDataConverter", { enumerable: true, get: function () { return lib_1.createFirestoreDataConverter; } });
Object.defineProperty(exports, "get", { enumerable: true, get: function () { return lib_1.getCollectionItem; } });
Object.defineProperty(exports, "getCollectionItemData", { enumerable: true, get: function () { return lib_1.getCollectionItemData; } });
Object.defineProperty(exports, "serverTimestamp", { enumerable: true, get: function () { return lib_1.serverTimestamp; } });
Object.defineProperty(exports, "add", { enumerable: true, get: function () { return lib_1.addCollectionItem; } });
Object.defineProperty(exports, "createCollectionRef", { enumerable: true, get: function () { return lib_1.createCollectionRef; } });
Object.defineProperty(exports, "adds", { enumerable: true, get: function () { return lib_1.addMultipleCollectionItems; } });
Object.defineProperty(exports, "query", { enumerable: true, get: function () { return lib_1.queryCollectionItems; } });
Object.defineProperty(exports, "update", { enumerable: true, get: function () { return lib_1.updateCollectionItem; } });
Object.defineProperty(exports, "delete", { enumerable: true, get: function () { return lib_1.deleteCollectionItem; } });
var firestore_1 = require("@google-cloud/firestore");
Object.defineProperty(exports, "Timestamp", { enumerable: true, get: function () { return firestore_1.Timestamp; } });
//# sourceMappingURL=index.js.map