"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.default = apollo_server_express_1.gql `

    extend type Query {
        categories: [Category!],
        category(id: ID!): Category,
    }

    input createCategoryInput {
        name: String!
        description: String!
    }

    extend type Mutation {
        createCategory( input: createCategoryInput ) : Category
        updateCategory(id: ID!, input: createCategoryInput ) : Category
        deleteCategory(id: ID!) : Category
    }

    type Category {
        id: ID!
        name: String!
        description: String!
        posts: [Post!]
    }
`;
