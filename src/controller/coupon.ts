import CouponService from '../services/coupon.service'
import { Request, Response } from 'express';

class CouponController {
    service: any;
    
    constructor() {
        this.service  = CouponService;
    }

    public getCoupons = async ( req: Request, res: Response ) : Promise<any> => {
        let coupons = await this.service.getCoupons()
    
        return res.send({
            'data': coupons
        })
    }
    
    public getCoupon = async ( req: Request, res: Response ) : Promise<any> => {
        let coupon = await this.service.getCoupon(req.params.id)
    
        return res.send(coupon)
    }
    
    public createCoupon = async ( req: Request, res: Response ) : Promise<any> => {
        let coupon = await this.service.createCoupon(req.body)
    
        return res.send(coupon)
    }
    
    public updateCoupon = async ( req: Request, res: Response ) : Promise<any> => {
        let id = req.params.id
        let coupon = await this.service.updateCoupon(id,req.body)
    
        return res.send(coupon)
    }
    
    public deleteCoupon = async ( req: Request, res: Response ) : Promise<any> => {
        let coupon = await this.service.deleteCoupon(req.params.id)
    
        if ( !coupon )
            return res.status(404).send("The coupon with the given ID was not found.");
    
        return res.send(coupon)
    }
}

export default new CouponController();