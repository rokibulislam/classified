const AuthService =  require('../services/auth.service')
const { combineResolvers } = require('graphql-resolvers')
const { isAuthenticated } = require( '../middlewares')
const PubSub = require('../subscription');
const { userEvents } = require('../subscription/events');

const UserService = require('../services/user.service')
const PostService = require('../services/post.service')

module.exports = {
    Query: {
        users: () => UserService.getUsers(),
        user: combineResolvers( isAuthenticated, (_, __, { loggedInUserId } ) => {
          return  UserService.getUser(loggedInUserId);
        })
    },

    User: {
        posts: async ( parent, args ) => {
            try {
               const posts = PostService.postbymeta({
                    user: parent._id
               })
               return posts; 
            } catch( error ) {
                throw error
            }
        }
    },

    Mutation: {
        signup: async (_, { input } ) => {
            return AuthService.signup(input)
        },

        login: async (_, { input } ) => {
            return AuthService.login(input)
        }
    },

    Subscription: {
        userCreated: {
          subscribe: () => {
              return PubSub.asyncIterator(userEvents.USER_CREATED)
          }
        }
    },
}