const express = require('express');
const passport = require('passport')
const authController = require('../controllers/authController')
const userController = require('../controllers/userController')
const cityController = require('../controllers/cityController')
const stayController = require('../controllers/stayController')

const router = express.Router();

const authenticateCredentials = passport.authenticate('local', { session: false })
const isAuthenticated = passport.authenticate('jwt', { session: false })

// use isAuthenticated as middleware to protect any routes
router.get('/cities',
    cityController.index
);

router.get('/users',
    isAuthenticated,
    userController.index
);

router.get('/stays',
    stayController.index
);

// USER/AUTH ROUTES
router.post('/login',
    authenticateCredentials,
    authController.login
)
router.post('/register',
    userController.validateRegistrationData,
    userController.register,
    authController.login
)

module.exports = router