const { combineResolvers } = require('graphql-resolvers')
const AttributeService = require('../services/attribute.service')

const { isAuthenticated } = require( '../middlewares')

module.exports = {
    
    Query: {
        attributes: () => AttributeService.getAttributes(),
        attribute: (_, { id } ) => AttributeService.getAttribute(id),
    },

    Mutation: {
        createAttribute: combineResolvers( isAuthenticated, async (_, { input }, { email } ) => {
            return AttributeService.createAttribute(input);   
        }),

        updateAttribute: combineResolvers( isAuthenticated, async (_, { id, input }, { email } ) => {
            return AttributeService.updateAttribute(id, input)
        }),

        deleteAttribute: combineResolvers( isAuthenticated, async (_, { id }, { email } ) => {
            return AttributeService.deleteAttribute(id)
        })
    }
}