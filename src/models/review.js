const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: { 
        type: String,
         required: true 
    },
    comment: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model( 'Review', reviewSchema )