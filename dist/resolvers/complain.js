"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_resolvers_1 = require("graphql-resolvers");
const complaain_service_1 = tslib_1.__importDefault(require("../services/complaain.service"));
const subscription_1 = tslib_1.__importDefault(require("../subscription"));
const events_1 = require("../subscription/events");
const middlewares_1 = require("../middlewares");
exports.default = {
    Query: {
        complains: () => complaain_service_1.default.getComplains(),
        complain: (_, { id }) => complaain_service_1.default.getComplain(id)
    },
    Package: {},
    Mutation: {
        createComplain: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { input }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return complaain_service_1.default.createComplain(input);
        })),
        updateComplain: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { input }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return complaain_service_1.default.updateComplain(input.id, input);
        })),
        deleteComplain: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { id }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return complaain_service_1.default.deleteComplain(id);
        }))
    },
    Subscription: {
        complainCreated: {
            subscribe: () => {
                return subscription_1.default.asyncIterator(events_1.complainEvents.COMPLAIN_CREATED);
            }
        }
    }
};
