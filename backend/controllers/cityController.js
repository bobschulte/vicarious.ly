const models = require("../models/index");
const City = models.City;

exports.index = (req, res) => {
    City.findAll({
        include: [{
            model: models.Stay,
            include: [ models.User ]
        }]
    })
    .then(cities => res.json(cities))
}