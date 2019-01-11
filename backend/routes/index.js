const express = require("express");
const router = express.Router();
const models = require('../models/index')
const userController = require('../controllers/userController')
const authController = require('../controllers/authController')

// the callback needs to be abstracted out into the appropriate controller file!
router.get('/cities', function (req, res) {
    models.City.findAll({ include: models.Stay })
    .then(cities => res.json(cities))
});

// the callback needs to be abstracted out into the appropriate controller file!
router.get('/users', function (req, res) {
    models.User.findAll({ include: models.Stay })
    .then(users => res.json(users))
});

// the callback needs to be abstracted out into the appropriate controller file!
router.get('/stays', function (req, res) {
    models.Stay.findAll({ include: [ models.City, models.User ] })
    .then(stays => res.json(stays))
});

// USER/AUTH ROUTES
router.post('/login', userController.login)
// 1) Validate Registration Info, 2) Register User, 3) automatically log them in
router.post('/register',
    userController.validateRegistrationData,
    userController.register,
    authController.login
)


module.exports = router