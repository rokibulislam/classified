import Coupon from '../models/coupon'

class CouponService {

    public getCoupons = async () : Promise<any> => {
        try {
            let coupon = await Coupon.find()
            return coupon
        } catch( error ) {

        }
    }

    public getCoupon = async ( id: string ) : Promise<any> => {
        try {
            let coupon = await Coupon.findById(id)
            return coupon
        } catch( error ) {

        }
    }

    public createCoupon = async ( input: any ) : Promise<any> => {
        try {
            let coupon = new Coupon({ ...input});
            let result = coupon.save();
        
            return result
        } catch( error ) {

        }
    }

    public updateCoupon = async (id: string, post: any): Promise<any> => {
        try {
            let coupon = await Coupon.findOneAndUpdate( { _id: id }, post, { new: true } )
            return coupon
        } catch( error ) {

        }
    }

    public deleteCoupon = async ( id: string ) : Promise<any> => {
        try {
            let coupon = await Coupon.findOneAndDelete( { _id: id } )
            return coupon
        } catch( error ) {

        }
    }

    public bulkdeleteCoupon = async ( id: string ) : Promise<any> => {
        try {
            let coupon = await Coupon.deleteMany({ _id: id })
            return coupon
        } catch( error ) {

        }
    }
}

export default new CouponService()



