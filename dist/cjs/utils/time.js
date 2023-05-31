"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimestamp = exports.formatTime = exports.utcNow = exports.sleep = void 0;
const date_fns_tz_1 = require("date-fns-tz");
const date_fns_1 = require("date-fns");
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
exports.sleep = sleep;
const utcNow = (formatType = 0) => {
    const now = new Date();
    const timeZone = 'UTC';
    const nowUtc = (0, date_fns_tz_1.utcToZonedTime)(now, timeZone);
    const formatOptions = [
        'yyyy-MM-dd-HH:mm:ss',
        'yyyy-MM-dd',
        'yyyy-MM-dd-HH-mm-ss',
        'yyyy-MM-dd-HH:00',
    ];
    const formattedDate = (0, date_fns_1.format)(nowUtc, formatOptions[formatType]);
    return formattedDate;
};
exports.utcNow = utcNow;
const formatTime = (ms) => {
    let seconds;
    let hours;
    let minutes;
    seconds = Math.floor(ms / 1000);
    hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    // パディングを追加して二桁に整形する
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return `${hours}:${minutes}:${seconds}`;
};
exports.formatTime = formatTime;
const getTimestamp = () => {
    const now = new Date();
    const timeZone = 'UTC';
    const nowUtc = (0, date_fns_tz_1.utcToZonedTime)(now, timeZone);
    const timestamp = (0, date_fns_1.format)(nowUtc, 'yyyy-MM-dd:HH:mm:ss:SSS');
    return timestamp;
};
exports.getTimestamp = getTimestamp;
//# sourceMappingURL=time.js.map