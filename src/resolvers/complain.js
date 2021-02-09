const { combineResolvers } = require('graphql-resolvers')
const { posts, users, categories, tags, brands } =  require('../constants')
const ComplainModel = require('../models/complain')
const ComplainService = require('../services/complaain.service')
const PubSub = require('../subscription')
const { complainEvents } = require('../subscription/events');

const { isAuthenticated } = require( '../middlewares')

module.exports = {
    
    Query: {
        complains: () => ComplainService.getComplains(),
        complain: (_, { id } ) => ComplainService.getComplain(id),
    },

    Package: {

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
              return PubSub.asyncIterator(complainEvents.COMPLAIN_CREATED)
          }
        }
    },
}