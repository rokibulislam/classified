"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_resolvers_1 = require("graphql-resolvers");
const constants_1 = require("../constants");
const post_service_1 = tslib_1.__importDefault(require("../services/post.service"));
const middlewares_1 = require("../middlewares");
const subscription_1 = tslib_1.__importDefault(require("../subscription"));
const events_1 = require("../subscription/events");
exports.default = {
    Query: {
        posts: (_, {}, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return post_service_1.default.getPosts();
        }),
        post: (_, { id }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return post_service_1.default.getPost(id);
        })
    },
    Post: {
        user: ({ userId }) => constants_1.users.find(user => (user.id = userId))
    },
    Mutation: {
        createPost: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { input }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return post_service_1.default.createPost(input);
        })),
        updatePost: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { input }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return post_service_1.default.updatePost(input.id, input);
        })),
        deletePost: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { id }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return post_service_1.default.deletePost(id);
        }))
    },
    Subscription: {
        postCreated: {
            subscribe: () => {
                return subscription_1.default.asyncIterator(events_1.postEvents.POST_CREATED);
            }
        }
    }
};
