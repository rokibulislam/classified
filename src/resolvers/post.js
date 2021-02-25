const { combineResolvers } = require('graphql-resolvers')
const { ApolloError } = require('apollo-server-express')
const PostService = require('../services/post.service')
const CategoryService = require('../services/category.service')
const TagService = require('../services/tag.service')
const BrandService = require('../services/brand.service')
const UserService = require('../services/user.service')
const { isAuthenticated } = require( '../middlewares')
const PubSub = require('../subscription')
const { postEvents } = require('../subscription/events');

const { createesPost } = require( '../elasticService/posts' );

module.exports = {
    
    Query: {
        esposts: async (_,{ cursor, limit = 3 }, { email, esClient }) => {
           
            try {
               
                let response = await esClient.search({
                    index: "posts",
                    body: {
                        query: {
                            match_all: {}
                        }
                    }
                })
                results = response.hits.hits.map(function(hit){ return hit._source });
               
                return results
            } catch( ex ) {

            }
        },
        posts: async (_,{ cursor, limit = 3 }, { email, esClient }) => {

            return PostService.getPosts(  cursor, limit )
        },
        post: async (_, { id }, { email } ) => {
            return PostService.getPost(id)
        },
    },

    Post: {
        category: async ( parent, args, { loaders } ) => {
            const categories = await loaders.category.load( parent.category.toString() );
            // let categories = await CategoryService.getCategory(parent.category)
            return [categories];
        },
        tag: async ( parent, args, { loaders } ) => {
            const tags = await loaders.tag.load( parent.tag.toString() );
            // let tags = await TagService.getTag(parent.tag)
            return [tags];
        },
        brand: async ( parent, args, { loaders } ) => {
            const brands = await loaders.brand.load( parent.brand.toString() );
            // let brands = await BrandService.getBrand(parent.brand)
            return [brands];
        },
        user: async ( parent, args, { loaders } ) => {
            const user = await loaders.user.load( parent.user.toString() );
            // let user = await UserService.getUser(parent.user.toString())
            return user;
        },
        
    },

    Mutation: {
        // createPost: combineResolvers( isAuthenticated, async (_, { input }, { email } ) => {            
        createPost: combineResolvers( isAuthenticated, async (_, { input }, { email, loggedInUserId, esClient } ) => {            
            try {
                let response = await PostService.createPost( input, loggedInUserId );
                let esResult = await createesPost( esClient, response )
                console.log( esResult );
                return response
            } catch( ex ) {

            }
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