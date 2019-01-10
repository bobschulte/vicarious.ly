const express = require("express");
const router = express.Router();
const models = require('../models/index')


router.get('/cities', function (req, res) {
    models.City.findAll({ include: models.Stay })
    .then(cities => res.json(cities))
});

router.get('/travelers', function (req, res) {
    models.Traveler.findAll({ include: models.Stay })
    .then(travelers => res.json(travelers))
});

router.get('/stays', function (req, res) {
    models.Stay.findAll({ include: [ models.City, models.Traveler ] })
    .then(stays => res.json(stays))
});

module.exports = router