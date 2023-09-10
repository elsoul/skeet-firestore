"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverTimestamp = exports.delete = exports.update = exports.query = exports.adds = exports.createCollectionRef = exports.add = exports.get = exports.createFirestoreDataConverter = exports.createDocRef = void 0;
var lib_1 = require("./lib");
Object.defineProperty(exports, "createDocRef", { enumerable: true, get: function () { return lib_1.createDocRef; } });
Object.defineProperty(exports, "createFirestoreDataConverter", { enumerable: true, get: function () { return lib_1.createFirestoreDataConverter; } });
Object.defineProperty(exports, "get", { enumerable: true, get: function () { return lib_1.getCollectionItem; } });
Object.defineProperty(exports, "add", { enumerable: true, get: function () { return lib_1.addCollectionItem; } });
Object.defineProperty(exports, "createCollectionRef", { enumerable: true, get: function () { return lib_1.createCollectionRef; } });
Object.defineProperty(exports, "adds", { enumerable: true, get: function () { return lib_1.addMultipleCollectionItems; } });
Object.defineProperty(exports, "query", { enumerable: true, get: function () { return lib_1.queryCollectionItems; } });
Object.defineProperty(exports, "update", { enumerable: true, get: function () { return lib_1.updateCollectionItem; } });
Object.defineProperty(exports, "delete", { enumerable: true, get: function () { return lib_1.deleteCollectionItem; } });
var firestore_1 = require("firebase/firestore");
Object.defineProperty(exports, "serverTimestamp", { enumerable: true, get: function () { return firestore_1.serverTimestamp; } });
//# sourceMappingURL=index.js.map