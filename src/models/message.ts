import { Document, model, Model, Schema } from 'mongoose';

interface IMessage extends Document {
    from: string
    text: string,
    sender: string,
    reciver: string,
    content: string,
}

const messageSchema = new Schema({
    // from: { type: String,required: true},
    // text: {type: String,required: true},
    sender: { type: String, required: true },
    reciver: { type: String, required: true },
    post: {type: String, required: true},
    content: { type: String, required: true}
}, {
    timestamps: true
})

export default model<IMessage>( 'Message', messageSchema )