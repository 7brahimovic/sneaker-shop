const Shoplist = require('../models/shoplist-model')
const Order = require('../models/order-model')

saveOrder = async (req, res) => {
    let order = new Order(req.body);
    order.comparePassword();
    Order.findOne(
        { "userId" :  order.userId}, function (err, oldOrder) {
        if (!oldOrder)
            order.save()
                .then(order => {
                    res.status(200).json({ 'order': 'order added successfully' });
                })
                .catch(err => {
                    res.status(400).send('adding new sex failed');
                });
        else {
            oldOrder.cartItems = order.cartItems;
            oldOrder.save().then(order => {
                res.json('sex updated!');
            }).catch(err => {
                res.status(400).send("Update not possible");
            });
        }

    });
}

getOrder = async (req, res) => {
    Order.findOne(
        { "userId" : req.params.id}, function (err, oldOrder) {
        if (!oldOrder) {
        }
        else {
            res.json(oldOrder);
        }

    });

}
module.exports = {
    saveOrder,
    getOrder
}