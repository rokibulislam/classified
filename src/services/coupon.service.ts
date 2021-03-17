import Coupon from '../models/coupon'

const getCoupons = async () : Promise<any> => {
    return Coupon.find()
}

const getCoupon = async ( id: string ) : Promise<any> => {
    return Coupon.findById(id)
}

const createCoupon = async ( input: any ) : Promise<any> => {
    let coupon = new Coupon({ ...input});
    let result = coupon.save();
    
    return result
}

const updateCoupon = async (id: string, post: any): Promise<any> => {
    return Coupon.findOneAndUpdate( { _id: id }, post, { new: true } )
}

const deleteCoupon = async ( id: string ) : Promise<any> => {
    return Coupon.findOneAndDelete( { _id: id } )
}

const bulkdeleteCoupon = async ( id: string ) : Promise<any> => {
    return Coupon.deleteMany({ _id: id })
}

export default  {
    getCoupons,
    getCoupon,
    createCoupon,
    updateCoupon,
    deleteCoupon,
    bulkdeleteCoupon
}



