"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.default = apollo_server_express_1.gql `

    extend type Query {
        tags: [Tag!],
        tag(id: ID!): Tag,
    }

    input createTagInput {
        name: String!
        description: String!
    }

    extend type Mutation {
        createTag( input: createTagInput ) : Tag
        updateTag(id: ID!, input: createTagInput ) : Tag
        deleteTag(id: ID!) : Tag
    }


    type Tag {
        id: ID!
        name: String!
        description: String!
        posts: [Post!]
    }
`;
