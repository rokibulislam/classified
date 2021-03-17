"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.default = apollo_server_express_1.gql `
    extend type Query {
        messages: [Message!],
        message(id: ID!): Message,
    }

    extend type Mutation {
        addMessage( input: MessageInput! ) : Message
    }

    type Message {
        id: ID!
        from: String
        text: String
    }

    input MessageInput {
        text: String
    }
`;
