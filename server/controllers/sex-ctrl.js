const Sex = require('../models/sex-model')
const Shoplist = require('../models/sex-model')
createSex = (req, res) => {
    let sex = new Sex(req.body);
    sex.save()
        .then(todo => {
            res.status(200).json({ 'sex': 'sex added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new sex failed');
        });
}

updateSex = async (req, res) => {
    Sex.findById(req.params.id, function (err, sex) {
        if (!sex)
            res.status(404).send("data is not found");
        else {
            sex.name = req.body.name;
            sex.time = req.body.time;
            sex.rating = req.body.rating;
            sex.customer = req.body.customer;
            sex.userId = req.body.userId;
            sex.save().then(sex => {
                res.json('sex updated!');
            }).catch(err => {
                res.status(400).send("Update not possible");
            });
        }

    });
}

deleteSex = async (req, res) => {
    await Sex.findOneAndDelete({ _id: req.params.id }, (err, sex) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!sex) {
            return res
                .status(404)
                .json({ success: false, error: `Sex not found` })
        }

        return res.status(200).json({ success: true, data: sex })
    }).catch(err => console.log(err))
}

getSexById = async (req, res) => {
    let id = req.params.id;
    Sex.findById(id, function (err, todo) {
        res.json(todo);
    });
}

getSexes = async (req, res) => {
    Sex.find(function (err, sexes) {
        if (err) {
            console.log(err);
        } else {
            res.json(sexes);
        }
    });
}

module.exports = {
    createSex,
    updateSex,
    deleteSex,
    getSexes,
    getSexById,
}