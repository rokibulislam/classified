const { gql } = require('apollo-server-express')

module.exports = gql`

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
        bulkdeleteCategory( id: [ ID! ] ) : Category
    }

    type Category {
        id: ID!
        name: String!
        description: String!
        posts: [Post!]
    }
`;