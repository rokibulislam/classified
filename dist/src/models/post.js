"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Reviews = new mongoose_1.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: Number, required: true },
});
const postSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: String
    },
    price: {
        type: Number
    },
    featuredImage: {
        type: String,
        required: false
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    reviews: [Reviews],
    user: {
        type: mongoose_1.Types.ObjectId,
        ref: 'User'
    },
    category: {
        type: mongoose_1.Types.ObjectId,
        ref: 'Category'
    },
    tag: {
        type: mongoose_1.Types.ObjectId,
        ref: 'Tag'
    },
    brand: {
        type: mongoose_1.Types.ObjectId,
        ref: 'Brand'
    }
}, {
    timestamps: true
});
exports.default = mongoose_1.model('Post', postSchema);
