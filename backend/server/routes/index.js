const express = require("express");
const router = express.Router();
const models = require('../models/index')

router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/travelers', function (req, res) {
    models.Traveler.findAll({}).then(travelers => res.json(travelers));
});

router.get('/cities', function (req, res) {
    models.City.findAll({}).then(cities => res.json(cities));
});

module.exports = router