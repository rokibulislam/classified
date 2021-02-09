const { combineResolvers } = require('graphql-resolvers')
const { posts, users, categories, tags, brands } =  require('../constants')
const PackageModel = require('../models/package')
const PackageService = require('../services/package.service')

const { isAuthenticated } = require( '../middlewares')

module.exports = {
    
    Query: {
        packages: () => PackageService.getPackages(),
        package: (_, { id } ) => PackageService.getPackage(id),
    },

    Package: {

    },

    Mutation: {
        createPackage: combineResolvers( isAuthenticated, async (_, { input }, { email } ) => {
            return PackageService.createPackage(input);   
        }),

        updatePackage: combineResolvers( isAuthenticated, async (_, { id, input }, { email } ) => {
            console.log( 'update package' );
            console.log( id );
            console.log( input );
            return PackageService.updatePackage(id, input)
        }),

        deletePackage: combineResolvers( isAuthenticated, async (_, { id }, { email } ) => {
            return PackageService.deletePackage(id)
        })
    }
}