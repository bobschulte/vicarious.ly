const db = require("../models/index");
const Stay = db.Stay;


// NEEDS ERROR HANDLING
exports.index = (req, res) => {
    Stay.findAll({
        include: [ db.City, db.User ]
    })
    .then(stays => res.status(200).json(stays))
}