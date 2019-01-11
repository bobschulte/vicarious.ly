const express = require("express");
const router = express.Router();
const models = require('../models/index')


router.get('/cities', function (req, res) {
    models.City.findAll({ include: models.Stay })
    .then(cities => res.json(cities))
});

router.get('/users', function (req, res) {
    models.User.findAll({ include: models.Stay })
    .then(users => res.json(users))
});

router.get('/stays', function (req, res) {
    models.Stay.findAll({ include: [ models.City, models.User ] })
    .then(stays => res.json(stays))
});

// user controller routes


module.exports = router