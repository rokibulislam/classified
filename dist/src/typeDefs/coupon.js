"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.default = apollo_server_express_1.gql `

    extend type Query {
        coupons: [Coupon!],
        coupon(id: ID!): Coupon,
    }

    input createCouponInput {
        name: String!
    }

    extend type Mutation {
        createCoupon( input: createCouponInput ) : Coupon
        updateCoupon(id: ID!, input: createCouponInput ) : Coupon
        deleteCoupon(id: ID!) : Coupon
    }

    type Coupon {
        id: ID!
        name: String!
    }
`;
