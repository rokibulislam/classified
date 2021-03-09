const { gql } = require('apollo-server-express')

module.exports = gql`

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
        bulkdeleteComplain( id: [ ID! ] ) : Complain
    }

    type Complain {
        id: ID!
        description: String!
    }

    extend type Subscription {
        complainCreated: Complain
    }
`;