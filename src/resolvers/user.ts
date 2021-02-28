import AuthService from '../services/auth.service';
import { combineResolvers } from 'graphql-resolvers';
import { isAuthenticated } from '../middlewares';
import PubSub from '../subscription';
import userEvents from '../subscription/events';

import UserService from '../services/user.service';
import PostService from '../services/post.service';

export default {
    Query: {
        users: async ( _: any,{ cursor, limit = 10 } : { cursor: any, limit: number }, { email } : { email : string }) => {
            return UserService.getUsers( cursor, limit)
        },
        // users: () => UserService.getUsers(),
        user: combineResolvers( isAuthenticated, (_: any, __: any, { email, loggedInUserId, esClient } : { email: string,  loggedInUserId: string ,esClient: any }) => {
        //   return  UserService.getUser(loggedInUserId);
        })
    },

    User: {
        posts: async ( parent : any, args : any ) => {
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
        signup: async (_: any, { input } : { input: any } ) => {
            return AuthService.signup(input)
        },

        login: async (_: any, { input } : { input: any } ) => {
            return AuthService.login(input)
        }
    },

    Subscription: {
        userCreated: {
          subscribe: () => {
            //   return PubSub.asyncIterator.USER_CREATED)
          }
        }
    },
}