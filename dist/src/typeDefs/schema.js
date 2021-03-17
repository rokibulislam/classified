"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("graphql-import-node");
const typeDefs = tslib_1.__importStar(require("./schema.graphql"));
const graphql_tools_1 = require("graphql-tools");
const index_1 = tslib_1.__importDefault(require("../resolvers/index"));
const schema = graphql_tools_1.makeExecutableSchema({
    typeDefs,
    resolvers: index_1.default,
});
exports.default = schema;
