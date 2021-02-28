"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const { skip } = require('graphql-resolvers');
const isAuthenticated = (_, __, { email }) => {
    if (!email) {
        throw new Error('Access Denied! Please login to continue');
    }
    return skip;
};
exports.isAuthenticated = isAuthenticated;
