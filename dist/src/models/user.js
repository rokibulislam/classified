"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Post'
    }
}, {
    timestamps: true
});
exports.default = mongoose_1.model('User', userSchema);
