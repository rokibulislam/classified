import { Document, model, Model, Schema } from 'mongoose';

interface ITag extends Document {
    name: string,
    description: string
}

const tagSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

export default model<ITag>( 'Tag', tagSchema )