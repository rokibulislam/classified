import { Document, model, Model, Schema } from 'mongoose';

interface ICategory extends Document {
    name: string,
    description: string,
    slug: string
}

const categorySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    slug: { type: String, unique: true, index: true },
}, {
    timestamps: true
})

export default model<ICategory>( 'Category', categorySchema )