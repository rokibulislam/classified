import Coupon from '../models/coupon'
const { stringToBase64, base64ToString  } = require('../helper/index')

interface Iquery {
    _id?: any
}

class CouponService {

    public getCoupons = async ( cursor : any, limit : any, sortBy: string ,order: string ) : Promise<any> => {
        try {
            const query: Iquery  = { }

            if (cursor) {
                query['_id'] = {
                    '$lt': base64ToString(cursor)
                }
            }

            let lim = parseInt( limit ) + 1

            let coupons = await Coupon.find()

            const hasNextPage = coupons.length > limit;
            coupons = hasNextPage ? coupons.slice(0, -1) : coupons;

            return {
                couponFeed: coupons,
                pageInfo : {
                    nextPageCursor: hasNextPage ? stringToBase64(coupons[coupons.length - 1].id) : null,
                    hasNextPage: hasNextPage
                }
            }
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
            let result = await coupon.save();
        
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



