const Shoplist = require('../models/shoplist-model')

getShoplist = async(req, res) => {
    Shoplist.find(function (err, list) {

        if (err) {
            console.log(err);
        } else {
            res.json(list);
        }
    });
}
module.exports = {
    getShoplist
}