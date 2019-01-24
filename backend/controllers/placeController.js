const db = require("../models/index");
const googleMapsClient = require('../services/googleMapsClient')
const Place = db.Place;

exports.create = (req, res) => {
    console.log('backend controller hit: ', req.body)
    const { StayId, placeType } = req.body

    googleMapsClient.findPlace({ input: req.body.name, inputtype: "textquery" }).asPromise()
    .catch(err => console.log('error: ', err))
    .then(googleResponse1 => {
        const placeId = googleResponse1.json.candidates[0].place_id
        googleMapsClient.place({ placeid: placeId, fields: ['name', 'formatted_address', 'geometry', 'type', 'url', 'website'] }).asPromise()
        .catch(err => console.log('error: ', err))
        .then(googleResponse2 => {
            const address = googleResponse2.json.result.formatted_address
            const lat = googleResponse2.json.result.geometry.location.lat
            const lng = googleResponse2.json.result.geometry.location.lng
            const name = googleResponse2.json.result.name
            const url = googleResponse2.json.result.url
            
            const place = { StayId, name, placeType, address, url, lat, lng };
            console.log("PLACE TO SAVE: ", place)

            Place.create(place)
            .catch(error => {
                console.log('ERROR CREATING PLACE: ', error)
                res.status(500).json(error)
            })
            .then(newPlace => {
                console.log('WE BE CREATIN PLACES YALL: ', newPlace)
                res.status(200).json(newPlace)
            })
        })
    })
}