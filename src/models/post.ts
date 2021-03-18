import { Document, model, Model, Schema, Types } from 'mongoose';
import Brand from './brand'
import Category from './category'
import Tag from './tag'
import User from './user'

interface IPost extends Document {
    title: string,
    body: string,
    price: number,
    featuredImage: string
}

const Reviews = new Schema(
    {
        name: { type: String, required: true },
        rating: { type: Number, required: true },
        comment: { type: Number, required: true },
    }
)

const postSchema = new Schema(
    {
        title: { type: String, required: true },
        body: { type: String, required: true },
        price: { type: Number, required: true },
        featuredImage: { type: String, required: false },
        photo: { data: Buffer, contentType: String },
        reviews  : [Reviews],
        user: { type: Types.ObjectId, ref: 'User'},
        category: { type: Types.ObjectId, ref: 'Category'},
        tag: { type: Types.ObjectId, ref: 'Tag'},
        brand: { type: Types.ObjectId, ref: 'Brand' }
    },
    {
        timestamps: true
    }
)

export default  model<IPost>( 'Post', postSchema )