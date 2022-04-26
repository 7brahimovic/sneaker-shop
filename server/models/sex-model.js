const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Sex = new Schema(
    {
        name: { type: String, required: true },
        time: { type: [String], required: true },
        amount: { type: Number, required: true },
        customer: { type: [String], required: true },
        userId: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('Sex', Sex)
