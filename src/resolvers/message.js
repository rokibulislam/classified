const { combineResolvers } = require('graphql-resolvers')
const MessageService = require('../services/message.service')
const { isAuthenticated } = require( '../middlewares')

module.exports = {
    
    Query: {
        messages: () => MessageService.getMessages(),
        message: (_, { id } ) => MessageService.getMessage(),
    },

    Mutation: {
        createMessage: combineResolvers( isAuthenticated, async (_, { input }, { email } ) => {
            return MessageService.createPackage(input);   
        }),

        updateMessage: combineResolvers( isAuthenticated, async (_, { id, input }, { email } ) => {
            return MessageService.updatePackage(id, input)
        }),

        deletePackage: combineResolvers( isAuthenticated, async (_, { id }, { email } ) => {
            return PackageService.deletePackage(id)
        })
    }
}