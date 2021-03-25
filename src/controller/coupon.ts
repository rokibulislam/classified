import CouponService from '../services/coupon.service'
import { Request, Response } from 'express';

class CouponController {
    service: any;
    
    constructor() {
        this.service  = CouponService;
    }

    public getCoupons = async ( req: Request, res: Response ) : Promise<any> => {
        try { 
            let cursor = req.query.cursor ? req.query.cursor : '';
            let limit = req.query.limit ? req.query.limit : 10;
            let order = req.query.order ? req.query.order : 'asc';
            let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
            
            let coupons = await this.service.getCoupons( cursor, limit, sortBy, order )
    
            return res.json({
                'data': coupons
            })
        } catch( error ) {

        }
    }
    
    public getCoupon = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let coupon = await this.service.getCoupon(req.params.id)
            return res.json(coupon)
        } catch( error ) {

        }
    }
    
    public createCoupon = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let coupon = await this.service.createCoupon(req.body)
            return res.json(coupon)
        } catch( error ) {

        }
    }
    
    public updateCoupon = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let id = req.params.id
            let coupon = await this.service.updateCoupon(id,req.body)
            
            return res.json(coupon)
        } catch( error ) {

        }
    }
    
    public deleteCoupon = async ( req: Request, res: Response ) : Promise<any> => {
        try {
            let cursor = req.query.cursor ? req.query.cursor : '';
            let limit = req.query.limit ? req.query.limit : 10;
            let order = req.query.order ? req.query.order : 'asc';
            let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
            
            let coupon = await this.service.deleteCoupon(req.params.id)
    
            if ( !coupon )
                return res.status(404).send("The coupon with the given ID was not found.");
        
            return res.json(coupon)
        } catch( error ) {
            
        }
    }
}

export default new CouponController();