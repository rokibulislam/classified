"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_resolvers_1 = require("graphql-resolvers");
const post_service_1 = tslib_1.__importDefault(require("../services/post.service"));
const middlewares_1 = require("../middlewares");
const { createesPost, getesPosts } = require('../elasticService/posts');
exports.default = {
    Query: {
        esposts: (_, { cursor, limit = 3 }, { email, esClient }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return getesPosts(esClient);
        }),
        posts: (_, { cursor, limit = 3 }, { email, esClient }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return post_service_1.default.getPosts(cursor, limit);
        }),
        post: (_, { id }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return post_service_1.default.getPost(id);
        }),
    },
    Post: {
        category: (parent, args, { loaders }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            const categories = yield loaders.category.load(parent.category.toString());
            return [categories];
        }),
        tag: (parent, args, { loaders }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            const tags = yield loaders.tag.load(parent.tag.toString());
            return [tags];
        }),
        brand: (parent, args, { loaders }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            const brands = yield loaders.brand.load(parent.brand.toString());
            return [brands];
        }),
        user: (parent, args, { loaders }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            const user = yield loaders.user.load(parent.user.toString());
            return user;
        }),
    },
    Mutation: {
        createPost: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { input }, { email, loggedInUserId, esClient }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            try {
                let response = yield post_service_1.default.createPost(input, loggedInUserId);
                let esResult = yield createesPost(esClient, response);
                console.log(esResult);
                return response;
            }
            catch (ex) {
            }
        })),
        updatePost: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { id, input }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            if (!email) {
                throw new Error('You Must Login First');
            }
            return post_service_1.default.updatePost(id, input);
        })),
        deletePost: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { id }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return post_service_1.default.deletePost(id);
        }))
    },
    Subscription: {
        postCreated: {
            subscribe: () => {
            }
        }
    },
};
