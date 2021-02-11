const { gql } = require('apollo-server-express')

module.exports = gql`

    extend type Query {
        brands: [Brand!],
        brand(id: ID!): Brand,
    }

    input createBrandInput {
        name: String!
        description: String!
    }

    extend type Mutation {
        createBrand( input: createBrandInput ) : Brand
        updateBrand(id: ID!, input: createBrandInput ) : Brand
        deleteBrand(id: ID!) : Brand
    }

    type Brand {
        id: ID!
        name: String!
        description: String!
        posts: [Post!]
    }
`;