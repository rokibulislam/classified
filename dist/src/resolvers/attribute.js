"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_resolvers_1 = require("graphql-resolvers");
const attribute_service_1 = tslib_1.__importDefault(require("../services/attribute.service"));
const middlewares_1 = require("../middlewares");
exports.default = {
    Query: {
        attributes: () => attribute_service_1.default.getAttributes(),
        attribute: (_, { id }) => attribute_service_1.default.getAttribute(id)
    },
    Mutation: {
        createAttribute: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { input }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return attribute_service_1.default.createAttribute(input);
        })),
        updateAttribute: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { id, input }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return attribute_service_1.default.updateAttribute(id, input);
        })),
        deleteAttribute: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { id }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return attribute_service_1.default.deleteAttribute(id);
        })),
        bulkdeleteAttribute: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { id }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            try {
                return yield attribute_service_1.default.bulkdeleteAttribute(id);
            }
            catch (ex) {
                return ex;
            }
        }))
    }
};
