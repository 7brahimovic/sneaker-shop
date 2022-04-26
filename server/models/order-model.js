const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Order = new Schema(
    {
        userId: { type: String, required: true },
        cartItems: { type: Array, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('order', Order)

