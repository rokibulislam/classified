const mongoose = require('mongoose')

const complaineSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model( 'Complain', complaineSchema )