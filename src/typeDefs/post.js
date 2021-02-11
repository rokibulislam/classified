const { gql } = require('apollo-server-express')

module.exports =  gql`

    extend type Query {
        posts: [Post!],
        post(id: ID!): Post,
    }

    input createPostInput {
        title: String!
        body: String!
        category: String
        tag: String
        brand: String
    }

    extend type Mutation {
        createPost( input: createPostInput ) : Post
        updatePost(id: ID!, input: createPostInput ) : Post
        deletePost(id: ID!) : Post
    }


    type Post {
        id: ID!
        title: String!
        body: String!
        user: User! 
        category: [Category]
        tag: [Tag]
        brand: [Brand]
    }

    extend type Subscription {
        postCreated: Post
    }
`