import { Document, model, Model, Schema } from 'mongoose';

interface IMessage extends Document {
    from: string
    text: string
}

const messageSchema = new Schema({
    from: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
})

export default model<IMessage>( 'Message', messageSchema )