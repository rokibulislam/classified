"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const auth_service_1 = tslib_1.__importDefault(require("../services/auth.service"));
const graphql_resolvers_1 = require("graphql-resolvers");
const middlewares_1 = require("../middlewares");
const user_service_1 = tslib_1.__importDefault(require("../services/user.service"));
const post_service_1 = tslib_1.__importDefault(require("../services/post.service"));
exports.default = {
    Query: {
        users: (_, { cursor, limit = 10 }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return user_service_1.default.getUsers(cursor, limit);
        }),
        user: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, __, { email, loggedInUserId, esClient }) => {
        })
    },
    User: {
        posts: (parent, args) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            try {
                const posts = post_service_1.default.postbymeta({
                    user: parent._id
                });
                return posts;
            }
            catch (error) {
                throw error;
            }
        })
    },
    Mutation: {
        signup: (_, { input }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return auth_service_1.default.signup(input);
        }),
        login: (_, { input }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return auth_service_1.default.login(input);
        })
    },
    Subscription: {
        userCreated: {
            subscribe: () => {
            }
        }
    },
};
