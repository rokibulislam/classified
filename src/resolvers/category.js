const { posts, users, categories, tags, brands } =  require('../constants')
const CategoryModel = require('../models/category')
const CategoryService = require('../services/category.service')

module.exports = {
    
    Query: {
        categories: () => CategoryService.getCategories(),
        category: (_, { id } ) => CategoryService.getCategory(),
    },

    Category: {

    },

    Mutation: {
        createCategory: async (_, { input } ) => {
            return CategoryService.createCategory( input );
        },

        updateCategory: async (_, { input } ) => {

        },

        deleteCategory: async (_, { input } ) => {

        }
    }
}