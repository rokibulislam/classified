const { posts, users, categories, tags, brands } =  require('../constants')
const BrandModel = require('../models/brand')

module.exports = {
    
    Query: {
        brands: () => BrandModel.find(),
        brand: (_, { id } ) => BrandModel.findById(id),
    },

    Brand: {

    },

    Mutation: {
        createBrand: async (_, { input } ) => {
            let brand = new BrandModel({ ...input});
            let result = brand.save();

            return result;   
        },

        updateBrand: async (_, { input } ) => {

        },

        deleteBrand: async (_, { input } ) => {

        }
    }
}