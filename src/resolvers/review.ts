import { combineResolvers } from 'graphql-resolvers';
import ReviewService from '../services/review.service';
import { isAuthenticated } from '../middlewares';

export default {
    
    Query: {
        
        reviews: async ( _: any,{ cursor, limit = 10, sortBy="_id", order="asc" } : { cursor: any, limit: number, sortBy: string ,order: string } ) => ReviewService.getReviews( cursor, limit, sortBy, order ),
        review: (_: any, { id }: { id: string } ) => ReviewService.getReview(id)
    },

    Mutation: {
        // createReview: combineResolvers( isAuthenticated, async (_, { input }, { email } ) => {     
        createReview: async (_: any, { input } : { input: any }, { email } : { email: string } ) => {           
            return ReviewService.createReview(input);
        },

        updateReview: combineResolvers( isAuthenticated, async (_: any, { id, input } : { id: string, input: any }, { email } : { email: string } )=> {
            return ReviewService.updateReview(id,input);
        }),

        deleteReview: combineResolvers( isAuthenticated, async (_: any, { id } : { id: string }, { email } : { email: string } ) => {
            return ReviewService.deleteReview(id);
        }),

        bulkdeleteReview: combineResolvers( isAuthenticated, async (_: any, { id } : { id: string }, { email } : { email: string } ) => {
            return ReviewService.bulkdeleteReview(id)
        })
    }
}

