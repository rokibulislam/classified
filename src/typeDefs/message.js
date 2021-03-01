const { gql } = require('apollo-server-express')

module.exports = gql`
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
`