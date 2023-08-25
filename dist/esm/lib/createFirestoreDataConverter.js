export const createFirestoreDataConverter = () => {
    return {
        toFirestore(data) {
            return data;
        },
        fromFirestore(snapshot) {
            return snapshot.data();
        },
    };
};
//# sourceMappingURL=createFirestoreDataConverter.js.map