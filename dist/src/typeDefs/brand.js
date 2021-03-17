"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.default = apollo_server_express_1.gql `

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
        bulkdeleteBrand( id: [ ID! ] ) : Brand
    }

    type Brand {
        id: ID!
        name: String!
        description: String!
        posts: [Post!]
    }
`;