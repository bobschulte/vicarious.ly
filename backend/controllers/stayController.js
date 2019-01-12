const db = require("../models/index");
const Stay = db.Stay;

exports.index = (req, res) => {
    Stay.findAll({
        include: [ db.City, db.User ]
    })
    .then(stays => res.json(stays))
}