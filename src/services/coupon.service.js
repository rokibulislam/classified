const Coupon = require ('../models/coupon')

const getCoupons = async () => {
    return Coupon.find()
}

const getCoupon = async (id) => {
    return Coupon.findById(id)
}

const createCoupon = async ( input ) => {
    let coupon = new Coupon({ ...input});
    let result = coupon.save();
    
    return result
}

const updateCoupon = async ( id, post ) => {
    return Coupon.findOneAndUpdate( { _id: id }, post, { new: true } )
}

const deleteCoupon = async ( id ) => {
    return Coupon.findOneAndDelete( { _id: id } )
}

module.exports = {
    getCoupons,
    getCoupon,
    createCoupon,
    updateCoupon,
    deleteCoupon,
}
