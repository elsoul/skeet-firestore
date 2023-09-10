"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFirestoreDataConverter = void 0;
const createFirestoreDataConverter = () => {
    return {
        toFirestore(data) {
            return data;
        },
        fromFirestore(snapshot) {
            return snapshot.data();
        },
    };
};
exports.createFirestoreDataConverter = createFirestoreDataConverter;
//# sourceMappingURL=createFirestoreDataConverter.js.map