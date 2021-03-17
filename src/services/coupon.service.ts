import Coupon from '../models/coupon'

class CouponController {

    public getCoupons = async () : Promise<any> => {
        return Coupon.find()
    }

    public getCoupon = async ( id: string ) : Promise<any> => {
        return Coupon.findById(id)
    }

    public createCoupon = async ( input: any ) : Promise<any> => {
        let coupon = new Coupon({ ...input});
        let result = coupon.save();
        
        return result
    }

    public updateCoupon = async (id: string, post: any): Promise<any> => {
        return Coupon.findOneAndUpdate( { _id: id }, post, { new: true } )
    }

    public deleteCoupon = async ( id: string ) : Promise<any> => {
        return Coupon.findOneAndDelete( { _id: id } )
    }

    public bulkdeleteCoupon = async ( id: string ) : Promise<any> => {
        return Coupon.deleteMany({ _id: id })
    }
}

export default new CouponController()

/*
export default  {
    getCoupons,
    getCoupon,
    createCoupon,
    updateCoupon,
    deleteCoupon,
    bulkdeleteCoupon
}
*/



