import  { Document, model, Model, Schema } from 'mongoose';

interface IPayment extends Document {
    name: string,
    amount: string,
    duration: string,
    allowedpost: string
}

const paymentSchema = new Schema({

})

export default model<IPayment>( 'Payment', paymentSchema )