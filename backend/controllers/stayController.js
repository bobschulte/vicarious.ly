const models = require("../models/index");
const Stay = models.Stay;

exports.index = (req, res) => {
    Stay.findAll({
        include: [ models.City, models.User ]
    })
    .then(stays => res.json(stays))
}