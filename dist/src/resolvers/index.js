"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const { GraphQLDateTime } = require('graphql-iso-date');
const user_1 = tslib_1.__importDefault(require("./user"));
const post_1 = tslib_1.__importDefault(require("./post"));
const tag_1 = tslib_1.__importDefault(require("./tag"));
const category_1 = tslib_1.__importDefault(require("./category"));
const brand_1 = tslib_1.__importDefault(require("./brand"));
const package_1 = tslib_1.__importDefault(require("./package"));
const complain_1 = tslib_1.__importDefault(require("./complain"));
const attribute_1 = tslib_1.__importDefault(require("./attribute"));
const coupon_1 = tslib_1.__importDefault(require("./coupon"));
const review_1 = tslib_1.__importDefault(require("./review"));
const customDateScalarResolver = {
    Date: GraphQLDateTime
};
module.exports = [
    user_1.default,
    post_1.default,
    tag_1.default,
    category_1.default,
    brand_1.default,
    package_1.default,
    complain_1.default,
    review_1.default,
    attribute_1.default,
    coupon_1.default,
    customDateScalarResolver
];
