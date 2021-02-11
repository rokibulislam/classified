const { combineResolvers } = require('graphql-resolvers')

const { posts, users, categories, tags, brands } =  require('../constants')
const Postmodel = require('../models/post')
const Categorymodel = require('../models/category')
const PostService = require('../services/post.service')
const CategoryService = require('../services/category.service')
const TagService = require('../services/tag.service')
const BrandService = require('../services/brand.service')
const UserService = require('../services/user.service')
const { isAuthenticated } = require( '../middlewares')
const PubSub = require('../subscription')
const { postEvents } = require('../subscription/events');

module.exports = {
    
    Query: {
        posts: async (_,{}, { email }) => {
            return PostService.getPosts()
        },
        post: async (_, { id }, { email } ) => {
            return PostService.getPost(id)
        },
    },

    Post: {
        category: async ( parent, args ) => {
            let categories = await CategoryService.getCategory(parent.category)
            return [categories];
        },
        tag: async ( parent, args ) => {
            let tags = await TagService.getTag(parent.tag)
            return [tags];
        },
        brand: async ( parent, args ) => {
            let brands = await BrandService.getBrand(parent.brand)
            return [brands];
        },
        user: async ( parent, args ) => {
            let user = await UserService.getUser(parent.user)
            return user;
        },
        
    },

    Mutation: {
        // createPost: combineResolvers( isAuthenticated, async (_, { input }, { email } ) => {            
        createPost: combineResolvers( isAuthenticated, async (_, { input }, { email, loggedInUserId } ) => {            
            return PostService.createPost( input, loggedInUserId );
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