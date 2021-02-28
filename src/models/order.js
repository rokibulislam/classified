const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const orderSchema =  mongoose.Schema(
    {
        status: {
            type: String,
            default: "Not processed",
            enum: [ "Not processed", "Processing", "Shipped", "Delivered", "Cancelled" ]
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },

    {
        timestamps: true,
    }
)