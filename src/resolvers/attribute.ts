import { combineResolvers } from 'graphql-resolvers';
import AttributeService from '../services/attribute.service';
import { isAuthenticated } from '../middlewares';

export default {
    
    Query: {
        attributes: () => AttributeService.getAttributes(),
        attribute: (_: any, { id }: { id: string }) : Promise<any> => AttributeService.getAttribute(id),
    },

    Mutation: {
        createAttribute: combineResolvers( isAuthenticated, async (_: any, { input } : { input: any }, { email } : { email: string } ) => {
            return AttributeService.createAttribute(input);   
        }),

        updateAttribute: combineResolvers( isAuthenticated, async (_: any, { id, input } : { id: string, input: any }, { email } : { email: string } ) => {
            return AttributeService.updateAttribute(id, input)
        }),

        deleteAttribute: combineResolvers( isAuthenticated, async (_: any, { id } : { id: string }, { email } : { email: string } ) => {
            return AttributeService.deleteAttribute(id)
        })
    }
}