"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_resolvers_1 = require("graphql-resolvers");
const coupon_service_1 = tslib_1.__importDefault(require("../services/coupon.service"));
const middlewares_1 = require("../middlewares");
exports.default = {
    Query: {
        coupons: () => coupon_service_1.default.getCoupons(),
        coupon: (_, { id }) => coupon_service_1.default.getCoupon(id),
    },
    Mutation: {
        createCoupon: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { input }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return coupon_service_1.default.createCoupon(input);
        })),
        updateCoupon: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { id, input }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return coupon_service_1.default.updateCoupon(id, input);
        })),
        deleteCoupon: graphql_resolvers_1.combineResolvers(middlewares_1.isAuthenticated, (_, { id }, { email }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            return coupon_service_1.default.deleteCoupon(id);
        }))
    }
};
