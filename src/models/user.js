const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    photo: {
        data: Buffer,
        contentType: String
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model( 'User', userSchema )