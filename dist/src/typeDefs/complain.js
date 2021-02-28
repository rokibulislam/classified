"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.default = apollo_server_express_1.gql `

    extend type Query {
        complains: [Complain!],
        complain(id: ID!): Complain,
    }

    input createComplainInput {
        description: String!
    }

    extend type Mutation {
        createComplain( input: createComplainInput ) : Complain
        updateComplain(id: ID!, input: createComplainInput ) : Complain
        deleteComplain(id: ID!) : Complain
    }

    type Complain {
        id: ID!
        description: String!
    }

    extend type Subscription {
        complainCreated: Complain
    }
`;
