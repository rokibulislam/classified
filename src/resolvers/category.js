const { combineResolvers } = require('graphql-resolvers')
const { posts, users, categories, tags, brands } =  require('../constants')
const CategoryModel = require('../models/category')
const CategoryService = require('../services/category.service')

const { isAuthenticated } = require( '../middlewares')

module.exports = {
    
    Query: {
        categories: () => CategoryService.getCategories(),
        category: (_, { id } ) => CategoryService.getCategory(),
    },

    Category: {

    },

    Mutation: {
        createCategory: combineResolvers( isAuthenticated, async (_, { input }, { email } ) => {
            return CategoryService.createCategory( input );
        }),

        updateCategory: combineResolvers( isAuthenticated, async (_, { input }, { email } ) => {
            return CategoryService.updateCategory(input.id,input)
        }),

        deleteCategory: combineResolvers( isAuthenticated, async (_, { input }, { email } ) => {
            return CategoryService.deleteCategory(input.id)
        })
    }
}