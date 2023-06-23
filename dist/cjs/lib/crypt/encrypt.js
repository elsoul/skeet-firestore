"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateIv = exports.decrypt = exports.encrypt = void 0;
const crypto_1 = require("crypto");
const algorithm = 'aes-256-cbc';
const inputEncoding = 'utf8';
const outputEncoding = 'base64';
const encrypt = (data, iv, password, salt) => {
    try {
        const key = (0, crypto_1.scryptSync)(password, salt, 32);
        const cipher = (0, crypto_1.createCipheriv)(algorithm, key, Buffer.from(iv, outputEncoding));
        let cipheredData = cipher.update(data, inputEncoding, outputEncoding);
        cipheredData += cipher.final(outputEncoding);
        return cipheredData;
    }
    catch (error) {
        throw new Error(`encrypt: ${error}`);
    }
};
exports.encrypt = encrypt;
const decrypt = (data, iv, password, salt) => {
    try {
        const key = (0, crypto_1.scryptSync)(password, salt, 32);
        const decipher = (0, crypto_1.createDecipheriv)(algorithm, key, Buffer.from(iv, outputEncoding));
        let decipheredData = decipher.update(data, outputEncoding, inputEncoding);
        decipheredData += decipher.final(inputEncoding);
        return decipheredData;
    }
    catch (error) {
        throw new Error(`decrypt: ${error}`);
    }
};
exports.decrypt = decrypt;
const generateIv = () => {
    try {
        const iv = (0, crypto_1.randomBytes)(16);
        return Buffer.from(iv).toString(outputEncoding);
    }
    catch (error) {
        throw new Error(`generateIv: ${error}`);
    }
};
exports.generateIv = generateIv;
//# sourceMappingURL=encrypt.js.map