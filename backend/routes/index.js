const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController')
const userController = require('../controllers/userController')
const cityController = require('../controllers/cityController')
const stayController = require('../controllers/stayController')


// use authController.isLoggedIn as middleware to protect any routes
router.get('/cities', cityController.index);
router.get('/users', userController.index);
router.get('/stays', stayController.index);

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