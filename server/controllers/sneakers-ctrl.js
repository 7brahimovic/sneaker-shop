const Sneaker = require('../models/sneakers-model')
createSneaker = (req, res) => {
    let sneaker = new Sneaker(req.body);
    sneaker.save()
        .then(todo => {
            res.status(200).json({ 'sneaker': 'sneaker added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new sneaker failed');
        });
}

updateSneaker = async (req, res) => {
    Sneaker.findById(req.params.id, function (err, sneaker) {
        if (!sneaker)
            res.status(404).send("data is not found");
        else {
            sneaker.name = req.body.name;
            sneaker.time = req.body.time;
            sneaker.rating = req.body.rating;
            sneaker.customer = req.body.customer;
            sneaker.userId = req.body.userId;
            sneaker.save().then(sneaker => {
                res.json('sneaker updated!');
            }).catch(err => {
                res.status(400).send("Update not possible");
            });
        }

    });
}

deleteSneaker = async (req, res) => {
    await Sneaker.findOneAndDelete({ _id: req.params.id }, (err, sneaker) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!sneaker) {
            return res
                .status(404)
                .json({ success: false, error: `Sneaker not found` })
        }

        return res.status(200).json({ success: true, data: sneaker })
    }).catch(err => console.log(err))
}

getSneakerById = async (req, res) => {
    let id = req.params.id;
    Sneaker.findById(id, function (err, todo) {
        res.json(todo);
    });
}

getSneakers = async (req, res) => {
    Sneaker.find(function (err, sneakers) {
        if (err) {
            console.log(err);
        } else {
            res.json(sneakers);
        }
    });
}

module.exports = {
    createSneaker,
    updateSneaker,
    deleteSneaker,
    getSneakers,
    getSneakerById,
}