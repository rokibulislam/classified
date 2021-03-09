const { gql } = require('apollo-server-express')

module.exports = gql`

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
        bulkdeleteAttribute( id: [ ID! ] ) : Attribute
    }

    type Attribute {
        id: ID!
        name: String!
    }
`;