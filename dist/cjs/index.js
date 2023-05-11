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
exports.upset = exports.get = exports.add = exports.collection = exports.isChildItemExists = exports.isItemExists = exports.getGrandChildCollectionItems = exports.getChildCollectionItem = exports.addGrandGrandGrandChildCollectionItem = exports.addGrandGrandChildCollectionItem = exports.addGrandChildCollectionItem = exports.addChildCollectionItem = exports.addCollectionItem = void 0;
const lib_1 = require("@/lib");
Object.defineProperty(exports, "addCollectionItem", { enumerable: true, get: function () { return lib_1.addCollectionItem; } });
Object.defineProperty(exports, "addChildCollectionItem", { enumerable: true, get: function () { return lib_1.addChildCollectionItem; } });
Object.defineProperty(exports, "addGrandChildCollectionItem", { enumerable: true, get: function () { return lib_1.addGrandChildCollectionItem; } });
Object.defineProperty(exports, "addGrandGrandChildCollectionItem", { enumerable: true, get: function () { return lib_1.addGrandGrandChildCollectionItem; } });
Object.defineProperty(exports, "addGrandGrandGrandChildCollectionItem", { enumerable: true, get: function () { return lib_1.addGrandGrandGrandChildCollectionItem; } });
Object.defineProperty(exports, "getChildCollectionItem", { enumerable: true, get: function () { return lib_1.getChildCollectionItem; } });
Object.defineProperty(exports, "getGrandChildCollectionItems", { enumerable: true, get: function () { return lib_1.getGrandChildCollectionItems; } });
Object.defineProperty(exports, "isItemExists", { enumerable: true, get: function () { return lib_1.isItemExists; } });
Object.defineProperty(exports, "isChildItemExists", { enumerable: true, get: function () { return lib_1.isChildItemExists; } });
const typesaurus_1 = require("typesaurus");
Object.defineProperty(exports, "collection", { enumerable: true, get: function () { return typesaurus_1.collection; } });
Object.defineProperty(exports, "add", { enumerable: true, get: function () { return typesaurus_1.add; } });
Object.defineProperty(exports, "get", { enumerable: true, get: function () { return typesaurus_1.get; } });
Object.defineProperty(exports, "upset", { enumerable: true, get: function () { return typesaurus_1.upset; } });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
//# sourceMappingURL=index.js.map