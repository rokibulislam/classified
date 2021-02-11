"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const user_1 = tslib_1.__importDefault(require("./user"));
const post_1 = tslib_1.__importDefault(require("./post"));
const tag_1 = tslib_1.__importDefault(require("./tag"));
const category_1 = tslib_1.__importDefault(require("./category"));
const brand_1 = tslib_1.__importDefault(require("./brand"));
const package_1 = tslib_1.__importDefault(require("./package"));
const complain_1 = tslib_1.__importDefault(require("./complain"));
exports.default = [
    user_1.default,
    post_1.default,
    tag_1.default,
    category_1.default,
    brand_1.default,
    package_1.default,
    complain_1.default
];
