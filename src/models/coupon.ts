import  { Document, model, Model, Schema } from 'mongoose';

interface ICoupon extends Document {
    description: string
}
const couponSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

export default model<ICoupon>( 'Coupon', couponSchema )