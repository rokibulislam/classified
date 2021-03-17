"use strict";
const mongoose = require('mongoose');
const { Schema } = mongoose;
const Reviews = mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: Number, required: true },
});
const postSchema = new Schema({
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    tag: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag'
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand'
    }
}, {
    timestamps: true
});
module.exports = mongoose.model('Post', postSchema);
