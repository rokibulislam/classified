import express from 'express'
import CouponController from '../controller/coupon'

const router  = express.Router()

router.get( '/', CouponController.getCoupons);

router.get( '/:id', CouponController.getCoupon);

router.post( '/', CouponController.createCoupon);

router.put( '/', CouponController.updateCoupon);

router.delete( '/', CouponController.deleteCoupon);

export default router;