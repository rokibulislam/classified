const { combineResolvers } = require('graphql-resolvers')
const CouponService = require('../services/coupon.service')

const { isAuthenticated } = require( '../middlewares')

module.exports = {
    
    Query: {
        coupons: () => CouponService.getCoupons(),
        coupon: (_, { id } ) => CouponService.getCoupon(id),
    },

    Mutation: {
        createCoupon: combineResolvers( isAuthenticated, async (_, { input }, { email } ) => {
            return CouponService.createCoupon(input);   
        }),

        updateCoupon: combineResolvers( isAuthenticated, async (_, { id, input }, { email } ) => {
            return CouponService.updateCoupon(id, input)
        }),

        deleteCoupon: combineResolvers( isAuthenticated, async (_, { id }, { email } ) => {
            return CouponService.deleteCoupon(id)
        })
    }
}