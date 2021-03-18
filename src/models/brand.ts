import { Document, model, Model, Schema } from 'mongoose';

interface IBrand extends Document {
    name: string,
    description: string,
    slug: string
}

const brandSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    slug: { type: String, unique: true, index: true }
}, {
    timestamps: true
})

export default model<IBrand>( 'Brand', brandSchema )