"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const auth_service_1 = tslib_1.__importDefault(require("../services/auth.service"));
const graphql_resolvers_1 = require("graphql-resolvers");
const middlewares_1 = require("../middlewares");
const subscription_1 = tslib_1.__importDefault(require("../subscription"));
const events_1 = require("../subscription/events");
const user_service_1 = tslib_1.__importDefault(require("../services/user.service"));
exports.default = {
    Query: {
        users: () => user_service_1.default.getUsers(),
        user: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, __, { email }) => {
            return user_service_1.default.getUser(email);
        })
    },
    User: {},
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
                return subscription_1.default.asyncIterator(events_1.userEvents.USER_CREATED);
            }
        }
    }
};
