const { posts, users, categories, tags, brands } =  require('../constants')
const BrandModel = require('../models/brand')
const BrandService = require('../services/brand.service')

module.exports = {
    
    Query: {
        brands: () => BrandService.getBrands(),
        brand: (_, { id } ) => BrandService.getBrand(id),
    },

    Brand: {

    },

    Mutation: {
        createBrand: async (_, { input } ) => {
            return BrandService.createBrand(input);   
        },

        updateBrand: async (_, { input } ) => {

        },

        deleteBrand: async (_, { input } ) => {

        }
    }
}