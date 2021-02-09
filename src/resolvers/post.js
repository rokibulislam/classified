const { combineResolvers } = require('graphql-resolvers')

const { posts, users, categories, tags, brands } =  require('../constants')
const Postmodel = require('../models/post')
const PostService = require('../services/post.service')
const { isAuthenticated } = require( '../middlewares')
const PubSub = require('../subscription')
const { postEvents } = require('../subscription/events');

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
        // createPost: combineResolvers( isAuthenticated, async (_, { input }, { email } ) => {            
        createPost: combineResolvers( isAuthenticated, async (_, { input }, { email } ) => {            
            return PostService.createPost( input );
        }),

        updatePost: combineResolvers( isAuthenticated, async (_, { id, input }, { email } ) => {
            return PostService.updatePost( id , input )
        }),

        deletePost: combineResolvers( isAuthenticated, async (_, { id }, { email } ) => {
            return PostService.deletePost( id  )
        })
    },

    Subscription: {
        postCreated: {
          subscribe: () => {
              return PubSub.asyncIterator(postEvents.POST_CREATED)
          }
        }
    },
}