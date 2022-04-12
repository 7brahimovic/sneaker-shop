const Sex = require('../models/sex-model')

createSex = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a sex',
        })
    }
    console.log(req.body)

    const sex = new Sex(body)

    if (!sex) {
        return res.status(400).json({ success: false, error: err })
    }

    sex
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: sex._id,
                message: 'Sex created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Sex not created!',
            })
        })
}

updateSex = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Sex.findOne({ _id: req.params.id }, (err, sex) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Sex not found!',
            })
        }
        sex.name = body.name
        sex.time = body.time
        sex.rating = body.rating
        sex
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: sex._id,
                    message: 'Sex updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Sex not updated!',
                })
            })
    })
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
    await Sex.findOne({ _id: req.params.id }, (err, sex) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: sex })
    }).catch(err => console.log(err))
}

getSexs = async (req, res) => {
    await Sex.find({}, (err, sexs) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!sexs.length) {
            return res
                .status(404)
                .json({ success: false, error: `Sex not found` })
        }
        return res.status(200).json({ success: true, data: sexs })
    }).catch(err => console.log(err))
}

module.exports = {
    createSex,
    updateSex,
    deleteSex,
    getSexs,
    getSexById,
}