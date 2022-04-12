const express = require('express')

const SexCtrl = require('../controllers/sex-ctrl')

const router = express.Router()
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { useNewUrlParser: true });
client.connect()
  .then((connectedClient) => {
    console.log('mongodb is connected');
  })
  .catch(error => {
    console.error(error);
  });

router.get('/mongo', function (req, res, next) {
  res.json({
    isConnected: 'ddd',
  });
});
router.post('/api/echo', function (req, res, next) {
  const body = req.body;

  const worker = (async function (data) {
    const db = client.db(dbName);
    const collection = db.collection('echo');
    const result = await collection.insertOne(data);
    console.log(result);
    return result;
  })(body);

  // 回應
  worker.then(() => {
    res.json(body);
  })
    .catch(next); // 發生 error 的話，next() 交給之後的 middleware 處理，express 有預設的處理方法
});

router.post('/sex', SexCtrl.createSex)
router.put('/sex/:id', SexCtrl.updateSex)
router.delete('/sex/:id', SexCtrl.deleteSex)
router.get('/sex/:id', SexCtrl.getSexById)
router.get('/sexs', SexCtrl.getSexs)


module.exports = router
