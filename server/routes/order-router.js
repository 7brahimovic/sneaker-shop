const express = require('express')

const OrderCtrl = require('../controllers/order-ctrl')

const orderRouter = express.Router()

orderRouter.post('/', OrderCtrl.saveOrder)
orderRouter.get('/:id', OrderCtrl.getOrder)

module.exports = orderRouter
