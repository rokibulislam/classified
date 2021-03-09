const express = require('express')
const router  = express.Router()

const { getCoupons, getCoupon, createCoupon, updateCoupon, deleteCoupon } = require('../controller/coupon')

router.get( '/', getCoupons);

router.get( '/:id', getCoupon);

router.post( '/', createCoupon);

router.put( '/', updateCoupon);

router.delete( '/', deleteCoupon);

module.exports = router;