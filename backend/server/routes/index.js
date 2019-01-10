const express = require("express");
const router = express.Router();
const models = require('../models/index')


router.get('/cities', function (req, res) {
    console.log('cities route call made!')
    models.City.findAll({ include: models.Stay })
    .then(cities => {
        console.log(cities)
        res.json(cities)
    });
});

router.get('/travelers', function (req, res) {
    console.log('travelers route call made!')
    models.Traveler.findAll({ include: models.Stay })
    .then(travelers => {
        console.log(travelers)
        res.json(travelers)
    })
});

router.get('/stays', function (req, res) {
    console.log('stays route call made!')
    models.Stay.findAll({ include: [ models.City, models.Traveler ] })
    .then(stays => {
        console.log(stays)
        res.json(stays)
    });
});

module.exports = router