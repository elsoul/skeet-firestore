export declare const encrypt: (data: string, iv: string, password: string, salt: string) => string;
export declare const decrypt: (data: string, iv: string, password: string, salt: string) => string;
export declare const generateIv: () => string;
