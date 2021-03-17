"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
exports.default = apollo_server_express_1.gql `

    extend type Query {
        posts( cursor: String, limit: Int ): PostFeed!,
        post(id: ID!): Post,
        esposts( cursor: String, limit: Int ): [esPost]!
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
        bulkdeletePost( id: [ ID! ] ) : Post
    }


    type Post {
        id: ID!
        title: String!
        body: String!
        user: User
        category: [Category]
        tag: [Tag]
        brand: [Brand]
        createdAt: Date
        updatedAt:  Date
    }

    type esPost {
        title: String!
        body: String!
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
`;
