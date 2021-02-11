"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const tslib_1 = require("tslib");
const config = require('config');
const winston_1 = require("winston");
const { combine, splat, timestamp, printf } = winston_1.format;
const myFormat = printf((_a) => {
    var { level, message, timestamps } = _a, metadata = tslib_1.__rest(_a, ["level", "message", "timestamps"]);
    let msg = `${timestamps} [${level}] : ${message} `;
    if (metadata) {
        msg += JSON.stringify(metadata);
    }
    return msg;
});
exports.logger = winston_1.createLogger({
    level: 'debug',
    format: combine(winston_1.format.colorize(), splat(), timestamp(), myFormat),
    transports: [
        new winston_1.transports.Console({ level: 'info' }),
        new winston_1.transports.File({ filename: config.get('app.logging.outputfile'), level: 'debug' })
    ]
});
