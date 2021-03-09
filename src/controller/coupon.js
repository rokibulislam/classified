const CouponService = require('../services/coupon.service')

const getCoupons = async ( req, res ) => {
    let coupons = await CouponService.getCoupons()

    return res.send({
        'data': result
    })
}

const getCoupon = async ( req, res ) => {
    let coupon = await CouponService.getCoupon(req.params.id)

    return res.send(coupon)
}

const createCoupon = async ( req, res ) => {
    let coupon = await CouponService.createCoupon(req.body)

    return res.send(coupon)
}

const updateCoupon = async ( req, res ) => {
    let coupon = await CouponService.updateCoupon(req.body)

    return res.send(coupon)
}

const deleteCoupon = async ( req, res ) => {
    let coupon = await CouponService.deleteCoupon(req.params.id)

    if ( !coupon )
        return res.status(404).send("The coupon with the given ID was not found.");

    return res.send(coupon)
}

module.exports = {
    getCoupons,
    getCoupon,
    createCoupon,
    updateCoupon,
    deleteCoupon
}