const express = require('express')

const SexCtrl = require('../controllers/sex-ctrl')

const sexRouter = express.Router()

sexRouter.post('/', SexCtrl.createSex)
sexRouter.put('/:id', SexCtrl.updateSex)
sexRouter.delete('/:id', SexCtrl.deleteSex)
sexRouter.get('/:id', SexCtrl.getSexById)
sexRouter.get('/', SexCtrl.getSexes)


module.exports = sexRouter
