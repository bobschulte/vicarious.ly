const express = require('express');
const passport = require('passport')
const userController = require('../controllers/userController')
const cityController = require('../controllers/cityController')
const stayController = require('../controllers/stayController')
const placeController = require('../controllers/placeController')

const router = express.Router();

const authenticateCredentials = passport.authenticate('local', { session: false })
const isAuthenticated = passport.authenticate('jwt', { session: false })


router.get('/users/:userIdSlug/:idSlugToken',
    userController.show
);

router.get('/users',
    userController.index
);

router.patch('/users/:userIdSlug',
    isAuthenticated,
    userController.patch
)

router.get('/cities',
    cityController.index
);

router.get('/cities/:slug',
    cityController.show
)

// router.get('/stays/:id',
//     stayController.show
// );

router.get('/stays',
    stayController.index
);

router.post('/stays',
    isAuthenticated,
    stayController.create
),

router.patch('/stays/:id',
    isAuthenticated,
    stayController.update
)

router.post('/places',
    isAuthenticated,
    placeController.create
),

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