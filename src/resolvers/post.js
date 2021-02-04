const { posts, users, categories, tags, brands } =  require('../constants')
const Postmodel = require('../models/post')
const PostService = require('../services/post.service')

const { combineResolvers } = require('graphql-resolvers')
const { isAuthenticated } = require( '../middlewares')


module.exports = {
    
    Query: {
        posts: async (_,{}, { email }) => {
            console.log(email)
            return PostService.getPosts()
        },
        post: async (_, { id }, { email } ) => {
            console.log(email)
            return PostService.getPost(id)
        },
    },

    Post: {
        user: ( {userId } ) => users.find( user => user.id = userId )
    },

    Mutation: {
        createPost: async (_, { input } ) => {            
            return PostService.createPost( input );
        },

        updatePost: async (_, { input } ) => {

        },

        deletePost: async (_, { input } ) => {

        }
    }
}