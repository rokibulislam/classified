const { combineResolvers } = require('graphql-resolvers')
const { posts, users, categories, tags, brands } =  require('../constants')
const ComplainModel = require('../models/complain')
const ComplainService = require('../services/complaain.service')

const { isAuthenticated } = require( '../middlewares')

module.exports = {
    
    Query: {
        complains: () => ComplainService.getComplains(),
        complain: (_, { id } ) => ComplainService.getComplaine(id),
    },

    Package: {

    },

    Mutation: {
        createComplain: combineResolvers( isAuthenticated, async (_, { input }, { email } ) => {
            return ComplainService.createComplain(input);   
        }),

        updateComplain: combineResolvers( isAuthenticated, async (_, { input }, { email } ) => {
            return ComplainService.updateComplain(input.id, input)
        }),

        deleteComplain: combineResolvers( isAuthenticated, async (_, { input }, { email } ) => {
            return ComplainService.deleteComplain(input.id)
        })
    }
}