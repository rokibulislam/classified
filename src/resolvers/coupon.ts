import { combineResolvers } from 'graphql-resolvers';
import CouponService from '../services/coupon.service';
import { isAuthenticated } from '../middlewares';

export default {
    
    Query: {
        coupons: () => CouponService.getCoupons(),
        coupon: (_: any, { id }: { id: string } ) : Promise<any> => CouponService.getCoupon(id),
    },

    Mutation: {
        createCoupon: combineResolvers( isAuthenticated, async (_: any, { input } : { input: any }, { email } : { email: string } ) => {
            return CouponService.createCoupon(input);   
        }),

        updateCoupon: combineResolvers( isAuthenticated, async (_: any, { id, input } : { id: string, input: any }, { email } : { email: string } ) => {
            return CouponService.updateCoupon(id, input)
        }),

        deleteCoupon: combineResolvers( isAuthenticated, async (_: any, { id } : { id: string }, { email } : { email: string } ) => {
            return CouponService.deleteCoupon(id)
        }),

        bulkdeleteCoupon: combineResolvers( isAuthenticated, async (_: any, { id } : { id: string }, { email } : { email: string } ) => {
            return CouponService.bulkdeleteCoupon(id)
        })
    }
}