import  {Document, model, Model, Schema } from 'mongoose';

interface IOrder extends Document {
    status: string,
    user: Schema.Types.ObjectId
}

const orderSchema = new Schema({
        status: {
            type: String,
            default: "Not processed",
            enum: [ "Not processed", "Processing", "Shipped", "Delivered", "Cancelled" ]
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },

    {
        timestamps: true,
    }
)


export default model<IOrder>( 'order', orderSchema )