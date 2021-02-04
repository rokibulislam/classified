const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const orderSchema =  mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },

    {
        timestamps: true,
    }
)