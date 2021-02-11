"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_resolvers_1 = require("graphql-resolvers");
const brand_service_1 = tslib_1.__importDefault(require("../services/brand.service"));
const middlewares_1 = require("../middlewares");
exports.default = {
    Query: {
        brands: () => brand_service_1.default.getBrands(),
        brand: (_, { id }) => brand_service_1.default.getBrand(id)
    },
    Brand: {},
    Mutation: {
        createBrand: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { input }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return brand_service_1.default.createBrand(input);
        })),
        updateBrand: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { input }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return brand_service_1.default.updateBrand(input.id, input);
        })),
        deleteBrand: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { id }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return brand_service_1.default.deleteBrand(id);
        }))
    }
};
