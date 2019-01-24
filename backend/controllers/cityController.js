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
    // City.findOne({ where: { slug: req.params.slug } })
    // // .then(city => res.status(200).json(city))
    // .then(city => console.log('found city: ', city))

    City.findAll()
    .then(cities => {
        let city = cities.find(city => city.slug === req.params.slug)
        res.status(200).json(city)
    })
}