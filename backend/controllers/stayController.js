const db = require("../models/index");
const Stay = db.Stay;


// NEEDS ERROR HANDLING
exports.index = (req, res) => {
    Stay.findAll({
        include: [ db.City, db.User ]
    })
    .then(stays => res.status(200).json(stays))
}

exports.create = (req, res) => {
    Stay.create({
        CityId: req.body.CityId,
        UserId: req.user.id,
        arrival: new Date()
    })
    .catch(error => {
        console.log('ERROR CREATING STAY: ', error)
        res.status(500).json(error)
    })
    .then(newStay => {
        res.status(200).json(newStay)
    })
}

exports.update = (req, res) => {
    Stay.findOne({ where: {
        CityId: req.body.CityId,
        UserId: req.body.UserId
    } })
    .then(stay => {
        if (req.user && req.user.id === stay.UserId) {
            stay.update(req.body)
            .catch(error => console.log('update did not work: ', error))
            .then(updatedStay => res.status(200).json(updatedStay))
        } else {
            res.status(401).json({ error: 'Not authorized to alter this stay' })
        }
    })
    
}