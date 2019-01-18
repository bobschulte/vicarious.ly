const db = require("../models/index");
const City = db.City;
const Sequelize = require('sequelize')

// NEEDS ERROR HANDLING
exports.index = (req, res) => {
    City.findAll({
        include: [{
            model: db.Stay,
            include: [ db.User ]
        }]
    })
    .then(cities => {
        cities = cities.sort((a, b) => {
            return b.population - a.population
        }).map(city => city.nameWithCountry)
        res.status(200).json(cities);
    })
}

exports.show = (req, res) => {
    City.findOne({ where: { nameWithCountry: 'Bogotá, Colombia'} })
    .then(city => res.status(200).json(city))
}


// USED TO SEED
// exports.create = (req, res) => {
    // console.log('city data posted: ', req.body)
    // City.findOrCreate({ where: req.body })
    // .catch(errors => {
    //     console.log('seed error: ', errors.message)
    //     res.status(500).json({ errors: errors.message });
    // })
    // .spread(instance => {
    //     console.log('seeded!', instance.dataValues)
    //     if (instance) {
    //         res.json(instance.dataValues)
    //     } else {
    //         res.json({error: 'couldnt seed'})
    //     }
    // })
// }