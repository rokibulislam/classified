"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_resolvers_1 = require("graphql-resolvers");
const package_service_1 = tslib_1.__importDefault(require("../services/package.service"));
const middlewares_1 = require("../middlewares");
exports.default = {
    Query: {
        packages: () => package_service_1.default.getPackages(),
        package: (_, { id }) => package_service_1.default.getPackage(id),
    },
    Package: {},
    Mutation: {
        createPackage: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { input }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return package_service_1.default.createPackage(input);
        })),
        updatePackage: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { id, input }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return package_service_1.default.updatePackage(id, input);
        })),
        deletePackage: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { id }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return package_service_1.default.deletePackage(id);
        }))
    }
};
