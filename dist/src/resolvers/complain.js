"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_resolvers_1 = require("graphql-resolvers");
const complain_service_1 = tslib_1.__importDefault(require("../services/complain.service"));
const middlewares_1 = require("../middlewares");
exports.default = {
    Query: {
        complains: () => complain_service_1.default.getComplains(),
        complain: (_, { id }) => complain_service_1.default.getComplain(id),
    },
    Mutation: {
        createComplain: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { input }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return complain_service_1.default.createComplain(input);
        })),
        updateComplain: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { id, input }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return complain_service_1.default.updateComplain(id, input);
        })),
        deleteComplain: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { id }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return complain_service_1.default.deleteComplain(id);
        }))
    },
    Subscription: {
        complainCreated: {
            subscribe: () => {
            }
        }
    },
};
