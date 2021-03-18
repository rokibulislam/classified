import  { Document, model, Model, Schema } from 'mongoose';

interface ICoupon extends Document {
    name: string
}

const couponSchema = new Schema({
    name: { type: String, required: true }
}, {
    timestamps: true
})

export default model<ICoupon>( 'Coupon', couponSchema )