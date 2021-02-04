const { posts, users, categories, tags, brands } =  require('../constants')
const AuthService =  require('../services/auth.service')
const { combineResolvers } = require('graphql-resolvers')
const { isAuthenticated } = require( '../middlewares')
const UserService = require('../services/user.service')
module.exports = {
    Query: {
        users: () => UserModel.find(),
        user: combineResolvers( isAuthenticated, (_, __, { loggedInUserId } ) => {
          return  UserService.getUser(loggedInUserId);
        })
    },

    User: {
        posts: async ( {id } ) => {
            try {
               const posts =  posts.find( post => post.userId = id )
               return posts; 
            } catch( error ) {
                console.log( error )
                throw error
            }
        }
    },

    Mutation: {
        signup: async (_, { input } ) => {
            console.log(input)
            return AuthService.signup(input)
        },

        login: async (_, { input } ) => {
            console.log( input )
            return AuthService.login(input)
        }
    }
}