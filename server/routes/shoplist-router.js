const express = require('express')

const ShoplistCtrl = require('../controllers/shoplist-ctrl')

const shoplistRouter = express.Router()

shoplistRouter.get('/', ShoplistCtrl.getShoplist)

module.exports = shoplistRouter
