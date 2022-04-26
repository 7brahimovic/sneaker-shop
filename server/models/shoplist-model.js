const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Shoplist = new Schema(
    {
        list: { type: Array, required: true },
    },
)

module.exports = mongoose.model('Shoplist', Shoplist)

