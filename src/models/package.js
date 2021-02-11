const mongoose = require('mongoose')

const packageSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },

    amount: {
        type: String,
        required: true
    },

    duration: {
        type: String,
        required: true
    },

   	allowedpost: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model( 'Package', packageSchema )