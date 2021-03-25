import { combineResolvers } from 'graphql-resolvers';
import AttributeService from '../services/attribute.service';
import { isAuthenticated } from '../middlewares';

export default {
    
    Query: {
        attributes: ( _: any,{ cursor, limit = 10, sortBy = '_id', order = 'asc',  } : { cursor: any, limit: number, sortBy: string, order: string } ) : Promise<any>  => AttributeService.getAttributes( cursor, limit, sortBy,order ),
        attribute: (_: any, { id }: { id: string }) : Promise<any> => AttributeService.getAttribute(id)
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
        }),

        bulkdeleteAttribute: combineResolvers( isAuthenticated, async (_: any, { id } : { id: string }, { email } : { email: string } ) => {
            try {
                return  await AttributeService.bulkdeleteAttribute( id )
            } catch( ex ) {
                return ex;
            }
        })
    }
}