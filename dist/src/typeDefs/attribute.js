"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
module.exports = apollo_server_express_1.gql `

    extend type Query {
        attributes: [Attribute!],
        attribute(id: ID!): Attribute,
    }

    input createAttributeInput {
        name: String!
    }

    extend type Mutation {
        createAttribute( input: createAttributeInput ) : Attribute
        updateAttribute(id: ID!, input: createAttributeInput ) : Attribute
        deleteAttribute(id: ID!) : Attribute
    }

    type Attribute {
        id: ID!
        name: String!
    }
`;
