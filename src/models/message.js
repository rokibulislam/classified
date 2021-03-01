const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model( 'Message', messageSchema )