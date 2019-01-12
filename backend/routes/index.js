const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController')
const userController = require('../controllers/userController')
const cityController = require('../controllers/cityController')
const stayController = require('../controllers/stayController')

router.get('/cities', cityController.index); // authController.isLoggedIn,
router.get('/users', userController.index); // authController.isLoggedIn,
router.get('/stays', stayController.index); // authController.isLoggedIn,

// USER/AUTH ROUTES
router.post('/login',
    authController.authenticate,
    authController.login
)
router.post('/register',
    userController.validateRegistrationData,
    userController.register,
    authController.login
)

module.exports = router