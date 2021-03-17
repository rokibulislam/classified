import {Document, model, Model, Schema} from 'mongoose';

interface IAttribute extends Document {
    name: string
}

const attributeSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

export default model<IAttribute>('Attribute', attributeSchema);