"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const user_1 = tslib_1.__importDefault(require("./user"));
const post_1 = tslib_1.__importDefault(require("./post"));
const complain_1 = tslib_1.__importDefault(require("./complain"));
exports.default = {
    userEvents: user_1.default,
    postEvents: post_1.default,
    complainEvents: complain_1.default
};
