"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const graphql_resolvers_1 = require("graphql-resolvers");
const isAuthenticated = (_, __, { email }) => {
    if (!email) {
        throw new Error('Access Denied! Please login to continue');
    }
    return graphql_resolvers_1.skip;
};
exports.isAuthenticated = isAuthenticated;
