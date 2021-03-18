import  { Document, model, Model, Schema } from 'mongoose';

interface IReview extends Document {
    name: string,
    rating: string,
    comment: string,
}

const reviewSchema = new Schema({
    name: {type: String,required: true},
    rating: { type: String,required: true },
    comment: {type: String,required: true}
},  {
    timestamps: true
})

export default model<IReview>( 'Review', reviewSchema )