import { combineResolvers } from 'graphql-resolvers';
import { ApolloError } from 'apollo-server-express';
import PostService from '../services/post.service';
import CategoryService from '../services/category.service';
import TagService from '../services/tag.service';
import BrandService from '../services/brand.service';
import UserService from '../services/user.service';
import { isAuthenticated } from '../middlewares';
import PubSub from '../subscription';
import Events from '../subscription/events';

import { createesPost, getesPosts } from '../elasticService/posts';

export default {
    
    Query: {
        esposts: async (_: any,{ cursor, limit = 3 } : { cursor: any, limit: number }, { email, esClient } : { email: string,  esClient: any }) => {
            return getesPosts( esClient );
        },
        posts: async (_: any,{ cursor, limit = 3 } : { cursor: any, limit: number }, { email, esClient } : { email: string,  esClient: any }) => {

            return PostService.getPosts(  cursor, limit )
        },
        post: async (_: any, { id } : { id: string }, { email } : { email: string } ) => {
            return PostService.getPost(id)
        },
    },

    Post: {
        category: async ( parent: any, args: any, { loaders } : { loaders: any } ) => {
            const categories = await loaders.category.load( parent.category.toString() );
            // let categories = await CategoryService.getCategory(parent.category)
            return [categories];
        },
        tag: async ( parent: any, args: any, { loaders } : { loaders: any } ) => {
            const tags = await loaders.tag.load( parent.tag.toString() );
            // let tags = await TagService.getTag(parent.tag)
            return [tags];
        },
        brand: async ( parent: any, args : any, { loaders } : { loaders: any } ) => {
            const brands = await loaders.brand.load( parent.brand.toString() );
            // let brands = await BrandService.getBrand(parent.brand)
            return [brands];
        },
        user: async ( parent: any, args : any, { loaders } : { loaders: any } ) => {
            const user = await loaders.user.load( parent.user.toString() );
            // let user = await UserService.getUser(parent.user.toString())
            return user;
        },
        
    },

    Mutation: {
        // createPost: combineResolvers( isAuthenticated, async (_, { input }, { email } ) => {            
        createPost: combineResolvers( isAuthenticated, async (_: any, { input } : { input: any }, { email, loggedInUserId, esClient } : { email: string, loggedInUserId: string, esClient: any } ) => {            
            try {
                let response = await PostService.createPost( input, loggedInUserId );
                let esResult = await createesPost( esClient, response )
                console.log( esResult );
                return response
            } catch( ex ) {

            }
        }),

        updatePost: combineResolvers( isAuthenticated, async (_: any, { id, input } : { id: string, input: any }, { email } ) => {
            if( !email ) {
                throw new Error('You Must Login First')
            }
            return PostService.updatePost( id , input )
        }),

        deletePost: combineResolvers( isAuthenticated, async (_: any, { id } : { id: string}, { email } : { email: string} ) => {
            return PostService.deletePost( id  )
        }),

        bulkdeletePost: combineResolvers( isAuthenticated, async (_: any, { id } : { id: string}, { email } : { email: string} ) => {
            try {
                return  await PostService.bulkdeletePost( id  )
            } catch( ex ) {
                return ex;
            }
        })
    },

    Subscription: {
        postCreated: {
          subscribe: () => {
            //   return PubSub.asyncIterator(Events.POST_CREATED)
          }
        }
    },
}

