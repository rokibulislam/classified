import { combineResolvers } from 'graphql-resolvers';
import ComplainService from '../services/complain.service';
import { isAuthenticated } from '../middlewares';
import PubSub  from '../subscription'
import complainEvents from '../subscription/events';


export default {
    
    Query: {
        complains: () => ComplainService.getComplains(),
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
        })
    },

    Subscription: {
        complainCreated: {
          subscribe: () => {
            //   return PubSub.asyncIterator( complainEvents.COMPLAIN_CREATED )
          }
        }
    },
}