import { combineResolvers } from 'graphql-resolvers';
import ComplainService from '../services/complain.service';
import { isAuthenticated } from '../middlewares'

export default {
    
    Query: {
        complains: async ( _: any,{ cursor, limit = 10, sortBy="_id", order="asc" } : { cursor: any, limit: number, sortBy: string, order: string } ) => ComplainService.getComplains(cursor,limit,sortBy,order),
        complain: (_: any, { id }: { id: string } ) => ComplainService.getComplain(id),
    },
    
    Mutation: {
        createComplain: combineResolvers( isAuthenticated, async (_, { input }, { email } ) => {
            return ComplainService.createComplain(input);   
        }),

        updateComplain: combineResolvers( isAuthenticated, async (_, { id, input }, { email } ) => {
            return ComplainService.updateComplain(id, input)
        }),

        deleteComplain: combineResolvers( isAuthenticated, async (_, { id }, { email } ) => {
            return ComplainService.deleteComplain(id)
        }),

        bulkdeleteComplain: combineResolvers( isAuthenticated, async (_, { id }, { email } ) => {
            return ComplainService.bulkdeleteComplain(id)
        })
    },
}