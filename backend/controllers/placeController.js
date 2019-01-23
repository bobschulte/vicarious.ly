const db = require("../models/index");
const googleMapsClient = require('../services/googleMapsClient')
// const Place = db.Place;

exports.create = (req, res) => {

    console.log('backend controller hit: ', req.body)

    // googleMapsClient.findPlace()
    // googleMapsClient.place()
    // googleMapsClient.placesPhoto()

    // Stay.create({
    //     CityId: req.body.CityId,
    //     UserId: req.user.id,
    //     arrival: new Date()
    // })
    // .catch(error => {
    //     console.log('ERROR CREATING STAY: ', error)
    //     res.status(500).json(error)
    // })
    // .then(newStay => {
    //     res.status(200).json(newStay)
    // })
}
