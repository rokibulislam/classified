"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_resolvers_1 = require("graphql-resolvers");
const category_service_1 = tslib_1.__importDefault(require("../services/category.service"));
const post_service_1 = tslib_1.__importDefault(require("../services/post.service"));
const middlewares_1 = require("../middlewares");
exports.default = {
    Query: {
        categories: () => category_service_1.default.getCategories(),
        category: (_, { id }) => category_service_1.default.getCategory(id),
    },
    Category: {
        posts: (parent, args) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            let posts = yield post_service_1.default.postbymeta({
                category: parent._id
            });
            return posts;
        }),
    },
    Mutation: {
        createCategory: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { input }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return category_service_1.default.createCategory(input);
        })),
        updateCategory: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { id, input }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return category_service_1.default.updateCategory(id, input);
        })),
        deleteCategory: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { id }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return category_service_1.default.deleteCategory(id);
        })),
        bulkdeleteCategory: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { id }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return category_service_1.default.bulkdeleteCategory(id);
        }))
    }
};