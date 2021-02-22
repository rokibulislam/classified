const { gql } = require('apollo-server-express')

module.exports =  gql`

    extend type Query {
        posts( cursor: String, limit: Int ): PostFeed!,
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
        brand: [Brand],
        createdAt: Date!,
        updatedAt:  Date!
    }

    type PostFeed {
        postFeed: [Post!]
        pageInfo: PageInfo
    }

    type PageInfo {
        nextPageCursor: String
        hasNextPage: Boolean
    }

    extend type Subscription {
        postCreated: Post
    }
`