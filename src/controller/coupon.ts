import CouponService from '../services/coupon.service'
import { Request, Response } from 'express';

const getCoupons = async ( req: Request, res: Response ) : Promise<any> => {
    let coupons = await CouponService.getCoupons()

    return res.send({
        'data': coupons
    })
}

const getCoupon = async ( req: Request, res: Response ) : Promise<any> => {
    let coupon = await CouponService.getCoupon(req.params.id)

    return res.send(coupon)
}

const createCoupon = async ( req: Request, res: Response ) : Promise<any> => {
    let coupon = await CouponService.createCoupon(req.body)

    return res.send(coupon)
}

const updateCoupon = async ( req: Request, res: Response ) : Promise<any> => {
    let id = req.params.id
    let coupon = await CouponService.updateCoupon(id,req.body)

    return res.send(coupon)
}

const deleteCoupon = async ( req: Request, res: Response ) : Promise<any> => {
    let coupon = await CouponService.deleteCoupon(req.params.id)

    if ( !coupon )
        return res.status(404).send("The coupon with the given ID was not found.");

    return res.send(coupon)
}

export default {
    getCoupons,
    getCoupon,
    createCoupon,
    updateCoupon,
    deleteCoupon
}