"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_resolvers_1 = require("graphql-resolvers");
const message_service_1 = tslib_1.__importDefault(require("../services/message.service"));
const middlewares_1 = require("../middlewares");
module.exports = {
    Query: {
        messages: () => message_service_1.default.getMessages(),
        message: (_, { id }) => message_service_1.default.getMessage(id)
    },
    Mutation: {
        createMessage: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { input }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return message_service_1.default.createMessage(input);
        })),
        updateMessage: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { id, input }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return message_service_1.default.updateMessage(id, input);
        })),
        deletePackage: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { id }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return message_service_1.default.deleteMessage(id);
        }))
    }
};
