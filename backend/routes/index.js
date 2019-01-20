const express = require('express');
const passport = require('passport')
const userController = require('../controllers/userController')
const cityController = require('../controllers/cityController')
const stayController = require('../controllers/stayController')

const router = express.Router();

const authenticateCredentials = passport.authenticate('local', { session: false })
const isAuthenticated = passport.authenticate('jwt', { session: false })


router.get('/users/:userIdSlug',
    isAuthenticated,
    userController.show
);

router.get('/users',
    isAuthenticated,
    userController.index
);

router.patch('/users/:userIdSlug',
    isAuthenticated,
    userController.patch
)

router.get('/cities',
    // isAuthenticated,
    cityController.index
);

router.get('/cities/:slug',
    cityController.show
)

router.get('/stays',
    isAuthenticated,
    stayController.index
);

// USER/AUTH ROUTES
router.post('/login',
    authenticateCredentials,
    userController.login
)
router.post('/register',
    userController.validateRegistrationData,
    userController.register,
    userController.login
)

module.exports = router