const jwt = require('jwt-simple')
const { promisify } = require('es6-promisify')
const db = require('../models/index');
const User = db.User

exports.index = (req, res) => {
    res.status(200).json({ msg: 'success, owe you a list of users'})
}

exports.show = (req, res) => {
    console.log('params: ', req.params)
    if (req.user) {
        delete req.user.passwordHash
        delete req.user.passwordSalt
        res.status(200).json(req.user)
    } else {
        res.status(403).json({ error: 'Please log in' })
    }
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
    const token = jwt.encode({ sub: req.user.id, iat: timestamp }, process.env.SECRET);
    res.status(200).json({ token })
}

// DO WE NEED THIS AT ALL WITH JWT (CLIENT CLEARS TOKEN)... RESPONSE MAY NEED WORK
exports.logout = (req, res) => {
    req.logout() // removes req.user, clears login session, but may not need this since no sessions
    req.body.msg = 'Logged out!'
    res.status(200).json(req.body)
}