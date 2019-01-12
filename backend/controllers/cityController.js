const db = require("../models/index");
const City = db.City;

// NEEDS ERROR HANDLING
exports.index = (req, res) => {
    City.findAll({
        include: [{
            model: db.Stay,
            include: [ db.User ]
        }]
    })
    .then(cities => res.json(cities))
}