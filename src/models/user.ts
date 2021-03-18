import { Document, model, Model, Schema } from 'mongoose';

interface IUser extends Document {
    name: string,
    email: string,
    password: string,
    photo: string,
    role: string,
    permission: string,
    posts: Schema.Types.ObjectId,
}

const userSchema = new Schema({
    name: { type: String, required: true }, 
    email: { type: String, required: true },
    password: { type: String, required: true},
    photo:   { data: Buffer, contentType: String},
    mobile:  { type: String, required: false },
    address: { type: String, required: false },
    description: { type: String, required: false },
    profile: {},
    follwings: {},
    followers: {},
    favourites: {},
    payments: {},
    reviews: {},
    usertype: {
        type: String,
        enum: []
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin", "superadmin"]
    },
    permission: {
        type: String,
        default: "user",
        enum: ["user", "admin", "superadmin"]
    },
    posts: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }
}, {
    timestamps: true
})
export default model<IUser>( 'User', userSchema )