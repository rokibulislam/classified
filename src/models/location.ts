import { Document, model, Model, Schema } from 'mongoose';

interface ILocation extends Document {
    name: string
}

const locationSchema = new Schema({
    name: { type: String, required: true }
}, {
    timestamps: true
})

export default model<ILocation>( 'Location', locationSchema )