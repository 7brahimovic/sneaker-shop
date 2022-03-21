const express = require('express')

const SexCtrl = require('../controllers/sex-ctrl')

const router = express.Router()
const MongoClient = require('mongodb').MongoClient;

router.get('/mongo', function (req, res, next) {
  const url = 'mongodb://localhost:27017';

  const dbName = 'myproject';

  const client = new MongoClient(url, {useNewUrlParser: true});

  client.connect()
    .then(() => {
      res.json({
        isConnected: true,
      });
    })
    .catch(error => {
      console.error(error);
      res.json({
        isConnected: false,
      });
    });
});

router.post('/sex', SexCtrl.createSex)
router.put('/sex/:id', SexCtrl.updateSex)
router.delete('/sex/:id', SexCtrl.deleteSex)
router.get('/sex/:id', SexCtrl.getSexById)
router.get('/sexs', SexCtrl.getSexs)


module.exports = router
