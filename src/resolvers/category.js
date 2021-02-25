const { combineResolvers } = require('graphql-resolvers')
const CategoryService = require('../services/category.service')
const PostService = require('../services/post.service')

const { isAuthenticated } = require( '../middlewares')

module.exports = {
    
    Query: {
        categories: () => CategoryService.getCategories(),
        category: (_, { id } ) => CategoryService.getCategory(id),
    },

    Category: {
        posts: async ( parent, args ) => {
            let posts = await PostService.postbymeta({
               category: parent._id
            })
            return posts;
        },
    },

    Mutation: {
        createCategory: combineResolvers( isAuthenticated, async (_, { input }, { email } ) => {
            return CategoryService.createCategory( input );
        }),

        updateCategory: combineResolvers( isAuthenticated, async (_, { id, input }, { email } ) => {
            return CategoryService.updateCategory( id,input )
        }),

        deleteCategory: combineResolvers( isAuthenticated, async (_, { id }, { email } ) => {
            return CategoryService.deleteCategory(id)
        })
    }
}