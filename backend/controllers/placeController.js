const db = require("../models/index");
const googleMapsClient = require('../services/googleMapsClient')
// const Place = db.Place;

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
            // const 
            
            
            const place = { ...googleResponse2.json.result, StayId: StayId, placeType: placeType }
            console.log("PLACE TO SAVE: ", place)
            res.status(200).json(place)
        })
    })

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
// {
//     formatted_address: 'Cl. 30 #20-192, Cartagena, Bolívar, Colombia',
//         geometry:
//     {
//         location: { lat: 10.42349, lng: -75.55315 },
//         viewport: { northeast: [Object], southwest: [Object] }
//     },
//     name: 'Restaurante Bar La Vitrola',
//         types:
//     ['restaurant',
//         'bar',
//         'point_of_interest',
//         'food',
//         'establishment'],
//         url: 'https://maps.google.com/?cid=16899653682543235191',
//             StayId: 'ae7d135f-ccfb-48f1-a0a4-485021c78768',
//                 placeType: 'food-drink'
// }