import  { Document, model, Model, Schema } from 'mongoose';

interface IPackage extends Document {
    name: string,
    amount: string,
    duration: string,
    allowedpost: string
}

const packageSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    amount: {
        type: String,
        required: true
    },

    duration: {
        type: String,
        required: true
    },

   	allowedpost: {
        type: String,
        required: true
    }
})

export default model<IPackage>( 'Package', packageSchema )