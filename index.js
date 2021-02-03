const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotEnv = require('dotenv')
const app = express();

const { posts, users, categories, tags, brands } =  require('./constants')

//set env variables
dotEnv.config();

//cors
app.use(cors())
app.use(express.json())

// database connection 
mongoose.connect('mongodb://localhost:27017/classified')

mongoose.connection.once('open', () => {
    console.log('conneted to database');
});
/*
const typeDefs = gql`
    type Query {
        greetings: String!,
        posts: [Post!],
        post(id: ID!): Post,
        users: [User!],
        user(id: ID!): User,
        categories: [Category!],
        category(id: ID!): Category,
        tags: [Tag!],
        tag(id: ID!): Tag,
        brands: [Brand!],
        brand(id: ID!): Brand,
        getMessage: String
    } 

    type User {
        id: ID!
        name: String!
        email: String!
        posts: [Post!]
    }

    type Post {
        id: ID!
        name: String!
        completed: Boolean!
        user: User! 
    }

    type Category {
        id: ID!
        name: String!
        posts: [Post!]
    }

    type Tag {
        id: ID!
        name: String!
        posts: [Post!]
    }

    type Brand {
        id: ID!
        name: String!
        posts: [Post!]
    }

    input createTagInput {
        name: String!
    }

    input createBrandInput {
        name: String!
    }


    type Mutation {
        createTag( input: createTagInput! ) : Tag
        updateTag(id: ID!, input: createTagInput! ) : Tag
        deleteTag(id: ID!) : Tag,
        createBrand( input: createBrandInput! ) : Brand
        updateBrand(id: ID!, input: createBrandInput! ) : Brand
        deleteBrand(id: ID!) : Brand
    }


`;

const resolvers = {
    Query: {
        greetings: () => "Hello",
        posts: () => posts,
        post: (_, { id } ) => posts.find( post => post.id = id),
        users: () => users,
        user: (_, { id } ) => users.find( user => user.id = id),
        categories: () => categories,
        category: (_, { id } ) => categories.find( category => category.id = id),
        tags: () => tags,
        tag: (_, { id } ) => tags.find( tag => tag.id = id) 
    },

    Post: {
        user: ( {userId } ) => users.find( user => user.id = userId )
    },

    Category: {

    },

    Tag: {

    },

    Brand: {

    },

    User: {
        // posts: ( {id } ) => posts.find( post => post.userId = id )
    },

    Mutation: {
        createTag: async (_, { input } ) => {
            console.log( ...input );
        },
        createBrand: async (_, { input } ) => {
            console.log( input );
        },

        updateBrand: async (_, { input } ) => {

        },

        deleteBrand: async (_, { input } ) => {

        }
    }
}; */

const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

const apolloServer =  new ApolloServer({
    typeDefs,
    resolvers
})

apolloServer.applyMiddleware({
    app,
    path: '/graphql'
})

const PORT = process.env.PORT || 3000

app.use( '/', (req,res,next) => {
    res.send({ message: 'Hello' });
})

app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
    console.log(`Graphql Endpoint: ${PORT}`);
})