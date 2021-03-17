import CouponService from '../services/coupon.service'
import { Request, Response } from 'express';

class CouponController {

    public getCoupons = async ( req: Request, res: Response ) : Promise<any> => {
        let coupons = await CouponService.getCoupons()
    
        return res.send({
            'data': coupons
        })
    }
    
    public getCoupon = async ( req: Request, res: Response ) : Promise<any> => {
        let coupon = await CouponService.getCoupon(req.params.id)
    
        return res.send(coupon)
    }
    
    public createCoupon = async ( req: Request, res: Response ) : Promise<any> => {
        let coupon = await CouponService.createCoupon(req.body)
    
        return res.send(coupon)
    }
    
    public updateCoupon = async ( req: Request, res: Response ) : Promise<any> => {
        let id = req.params.id
        let coupon = await CouponService.updateCoupon(id,req.body)
    
        return res.send(coupon)
    }
    
    public deleteCoupon = async ( req: Request, res: Response ) : Promise<any> => {
        let coupon = await CouponService.deleteCoupon(req.params.id)
    
        if ( !coupon )
            return res.status(404).send("The coupon with the given ID was not found.");
    
        return res.send(coupon)
    }
}

export default new CouponController();

/*
export default {
    getCoupons,
    getCoupon,
    createCoupon,
    updateCoupon,
    deleteCoupon
}
*/