const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Order = new Schema(
    {
        userId: { type: String, required: true },
        cartItems: { type: Array, required: true },
    },
    { timestamps: true },
)


Order.methods.comparePassword = function() {
    console.log('sad')
};

module.exports = mongoose.model('order', Order)

