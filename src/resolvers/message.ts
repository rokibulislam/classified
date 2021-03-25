import { combineResolvers } from 'graphql-resolvers';
import MessageService from '../services/message.service';
import { isAuthenticated } from '../middlewares';

module.exports = {
    
    Query: {
        messages: async ( cursor : any, limit : any ) : Promise<any>  => MessageService.getMessages( cursor, limit),
        message: (_: any, { id } : { id: string } ) : Promise<any> => MessageService.getMessage(id)
    },

    Mutation: {
        createMessage: combineResolvers( isAuthenticated, async (_, { input }, { email } ) => {
            return MessageService.createMessage(input);   
        }),

        updateMessage: combineResolvers( isAuthenticated, async (_, { id, input }, { email } ) => {
            return MessageService.updateMessage(id,input)
        }),

        deletePackage: combineResolvers( isAuthenticated, async (_, { id }, { email } ) => {
            return MessageService.deleteMessage(id)
        })
    }
}