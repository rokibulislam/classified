const mongoose = require('mongoose')
const { Schema } = mongoose

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: String
    }
})

module.exports = mongoose.model( 'Post', postSchema )