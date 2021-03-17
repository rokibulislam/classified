"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.default = apollo_server_express_1.gql `

    extend type Query {
        reviews: [Review!],
        review(id: ID!): Review,
    }

    input createReviewInput {
        name: String!
        rating: String!
        comment: String!
    }

    extend type Mutation {
        createReview( input: createReviewInput ) : Review
        updateReview(id: ID!, input: createReviewInput ) : Review
        deleteReview(id: ID!) : Review
        bulkdeleteReview(id: ID!): Review
    }

    type Review {
        id: ID!
        name: String!
        rating: String!
        comment: String!
    }
`;
