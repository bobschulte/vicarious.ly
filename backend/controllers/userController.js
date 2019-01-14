const { promisify } = require("es6-promisify");
const jwt = require('jwt-simple')
const db = require("../models/index");
const User = db.User


// NEEDS ERROR HANDLING
exports.index = (req, res) => {
    User.findAll({
        include: [{
            model: db.Stay,
            include: [ db.City ]
        }]
    })
    .then(users => res.status(200).json(users))
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
        errors.forEach(error => console.log(error.msg))
        res.status(400).json(req.errors)
    } else {
        next() // only pass along to .register if no errors
    }
}

// more middleware, registers the user in the database, first hashing the password
exports.register = async (req, res, next) => {
    console.log('req data validated, now registering...')
    const user = new User({ firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email })
    const register = promisify(User.register.bind(User))
    await register(user, req.body.password)
    next() // go on to authController.login
}

exports.login = (req, res, next) => {
    const timestamp = new Date().getTime()
    const token = jwt.encode({ sub: req.body.id, iat: timestamp }, process.env.SECRET);
    console.log('Logged in! Here is your token: ', token)
    res.status(200).json({ token })
}

// DO WE NEED THIS AT ALL WITH JWT (CLIENT CLEARS TOKEN)... RESPONSE MAY NEED WORK
exports.logout = (req, res) => {
    req.logout() // may not need this since no sessions
    req.body.msg = 'logged out'
    res.status(200).json(req.body)
}