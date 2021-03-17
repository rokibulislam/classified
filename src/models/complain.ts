import  { Document, model, Model, Schema } from 'mongoose';

interface IComplain extends Document {
    description: string
}

const complaineSchema = new Schema({
    description: {
        type: String,
        required: true
    }
})

export default model<IComplain>( 'Complain', complaineSchema )