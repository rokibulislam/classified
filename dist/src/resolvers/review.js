"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_resolvers_1 = require("graphql-resolvers");
const review_service_1 = tslib_1.__importDefault(require("../services/review.service"));
const middlewares_1 = require("../middlewares");
exports.default = {
    Query: {
        reviews: () => review_service_1.default.getReviews(),
        review: (_, { id }) => review_service_1.default.getReview(id)
    },
    Mutation: {
        createReview: (_, { input }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return review_service_1.default.createReview(input);
        }),
        updateReview: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { id, input }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return review_service_1.default.updateReview(id, input);
        })),
        deleteReview: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { id }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return review_service_1.default.deleteReview(id);
        })),
        bulkdeleteReview: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { id }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return review_service_1.default.bulkdeleteReview(id);
        }))
    }
};
