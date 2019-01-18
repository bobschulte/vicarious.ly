const db = require("../models/index");
const City = db.City;
const Sequelize = require('sequelize')
const Op = Sequelize.Op

// NEEDS ERROR HANDLING
exports.index = (req, res) => {
    console.log('hit city index controller!')
    // res.status(200).json([{id: 0, name: 'Bogotá'},{id: 1, name: 'Hanoi'}, {id: 2, name: 'London'}])
    City.findAll({
        include: [{
            model: db.Stay,
            include: [ db.User ]
        }]
    })
    .then(cities => {
        cities = cities.map(city => city.nameWithCountry)
        res.status(200).json(cities);
    })
}

exports.create = (req, res) => {
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
    City.findAndCountAll({where: {population: {[Op.gt]: 100000}}, offset: 1, limit: 1})
    .then(res => console.log('# of cities seeded: ',res.count))
}