"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_resolvers_1 = require("graphql-resolvers");
const brand_service_1 = tslib_1.__importDefault(require("../services/brand.service"));
const post_service_1 = tslib_1.__importDefault(require("../services/post.service"));
const middlewares_1 = require("../middlewares");
exports.default = {
    Query: {
        brands: () => brand_service_1.default.getBrands(),
        brand: (_, { id }) => brand_service_1.default.getBrand(id),
    },
    Brand: {
        posts: (parent, args) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            let posts = yield post_service_1.default.postbymeta({
                brand: parent._id
            });
            return posts;
        }),
    },
    Mutation: {
        createBrand: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { input }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return brand_service_1.default.createBrand(input);
        })),
        updateBrand: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { id, input }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return brand_service_1.default.updateBrand(id, input);
        })),
        deleteBrand: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { id }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return brand_service_1.default.deleteBrand(id);
        })),
        bulkdeleteBrand: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { id }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return brand_service_1.default.bulkdeleteBrand(id);
        }))
    }
};
