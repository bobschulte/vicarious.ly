const jwt = require('jwt-simple')
const { promisify } = require('es6-promisify')
const db = require('../models/index');
const User = db.User

exports.index = (req, res) => {
    res.status(200).json({ msg: 'success, owe you a list of users'})
}

exports.show = (req, res) => {
    if (req.user) {
        // const user = req.user
        req.user.id = 'hidden'
        req.user.passwordHash = 'hidden'
        req.user.passwordSalt = 'hidden'
        res.status(200).json(req.user)
    } else {
        res.status(403).json({ error: 'Please log in' })
    }
}

exports.patch = (req, res) => {
    console.log("TESTS: ", !!req.user, req.user.userIdSlug === req.params.userIdSlug);
    if (req.user && req.user.userIdSlug === req.params.userIdSlug) {
        const currentStay = req.user.Stays.find(stay => stay.departure === null)
        currentStay.update({
            departure: new Date()
        }).then(stay => res.status(200).json(req.user))
    }
    
    
    // User.update({
    //     Stays: req.body.Stays   
    // }, {
    //     where: { id: req.user.id },
    //     include: [{
    //         model: db.Stay,
    //         include: [ db.City ]
    //     }]
    // })
    // .then((user, error) => {
    //     console.log('user:', user)
    //     console.log('error:', error)
    // })
}

// middleware that ensures cleanliness of user-submitted registration data
exports.validateRegistrationData = (req, res, next) => {
    // these come in express-validator
    req.sanitizeBody('firstName')                                    
    req.checkBody('firstName', 'Must provide first name').notEmpty()  
    req.sanitizeBody('lastName')                                    
    req.checkBody('lastName', 'Must provide last name').notEmpty()  
    req.checkBody('email', 'Email invalid').isEmail()         
    req.sanitizeBody('email').normalizeEmail({                  
        remove_dots: false,
        remove_extension: false,
        gmail_remove_subaddress: false
    })
    req.checkBody('password', 'Must provide password').notEmpty();
    req.checkBody('password-confirm', 'Must confirm password').notEmpty()
    req.checkBody('password-confirm', 'Passwords do not match').equals(req.body.password)
    
    // handle errors thrown by the above validators
    const errors = req.validationErrors()
    if (errors) {
        res.status(400).json({ errors })
    } else {
        next()
    }
}

// more middleware, registers the user in the database, first hashing the password
exports.register = (req, res, next) => {
    const user = new User({ firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email })
    const register = promisify(User.register.bind(User))
    
    register(user, req.body.password)
    .catch(errors => res.status(500).json({ errors: errors.message }))
    .then(() => {
        req.user = user
        next();
    })
}

exports.login = (req, res, next) => {
    const timestamp = new Date().getTime()
    const userIdSlug = req.user.userIdSlug
    const token = jwt.encode({ sub: req.user.id, iat: timestamp }, process.env.SECRET);
    res.status(200).json({ token, userIdSlug })
}

// DO WE NEED THIS AT ALL WITH JWT (CLIENT CLEARS TOKEN)... RESPONSE MAY NEED WORK
exports.logout = (req, res) => {
    req.logout() // removes req.user, clears login session, but may not need this since no sessions
    req.body.msg = 'Logged out!'
    res.status(200).json(req.body)
}