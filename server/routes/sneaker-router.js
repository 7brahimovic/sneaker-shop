const express = require('express')

const SneakerCtrl = require('../controllers/sneakers-ctrl')

const sneakerRouter = express.Router()

sneakerRouter.post('/', SneakerCtrl.createSneaker)
sneakerRouter.put('/:id', SneakerCtrl.updateSneaker)
sneakerRouter.delete('/:id', SneakerCtrl.deleteSneaker)
sneakerRouter.get('/:id', SneakerCtrl.getSneakerById)
sneakerRouter.get('/', SneakerCtrl.getSneakers)


module.exports = sneakerRouter
