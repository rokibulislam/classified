const { combineResolvers } = require('graphql-resolvers')
const ReviewService = require('../services/review.service')
const { isAuthenticated } = require( '../middlewares')

module.exports = {
    
    Query: {
        reviews: () => ReviewService.getReviews(),
        review: (_, { id } ) => ReviewService.getReview(id)
    },

    Mutation: {
        // createReview: combineResolvers( isAuthenticated, async (_, { input }, { email } ) => {     
        createReview: async (_, { input } ) => {           
            return ReviewService.createReview(input);
        },

        updateReview: combineResolvers( isAuthenticated, async (_, { id, input }, { email } ) => {
            return ReviewService.updateReview(id,input);
        }),

        deleteReview: combineResolvers( isAuthenticated, async (_, { id }, { email } ) => {
            return ReviewService.deleteReview(id);
        }),

        bulkdeleteReview: combineResolvers( isAuthenticated, async (_, { id }, { email } ) => {
            return ReviewService.bulkdeleteReview(id)
        })
    }
}