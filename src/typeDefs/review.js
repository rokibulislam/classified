const { gql } = require('apollo-server-express')

module.exports = gql`

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
    }

    type Review {
        id: ID!
        name: String!
        rating: String!
        comment: String!
    }
`;