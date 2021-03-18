import { Document, model, Model, Schema } from 'mongoose';

interface ITag extends Document {
    name: string,
    description: string,
    slug: string
}

const tagSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    slug: { type: String, unique: true, index: true }
}, {
    timestamps: true
})

export default model<ITag>( 'Tag', tagSchema )