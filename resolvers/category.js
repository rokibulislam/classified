const { posts, users, categories, tags, brands } =  require('../constants')
const CategoryModel = require('../models/category')

module.exports = {
    
    Query: {
        categories: () => CategoryModel.find(),
        category: (_, { id } ) => CategoryModel.findById(id),
    },

    Category: {

    },

    Mutation: {
        createCategory: async (_, { input } ) => {
            let category = new CategoryModel({ ...input});
            let result = category.save();

            return result;
        },

        updateCategory: async (_, { input } ) => {

        },

        deleteCategory: async (_, { input } ) => {

        }
    }
}