const db = require("../models/index");
const User = db.User
const promisify = require("es6-promisify");

exports.index = (req, res) => {
    User.findAll({
        include: [{
            model: db.Stay,
            include: [ db.City ]
        }]
    })
    .then(users => res.json(users))
}

// middleware that ensures cleanliness of user-submitted registration data
exports.validateRegistrationData = (req, res, next) => {
    console.log('backend validate reg data hit!')
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
        req.flash('error', errors.map(error => error.msg))
        res.json(req.body)
    } else {
        next() // only pass along to .register if no errors
    }
}

// more middleware, registers the user in the database, first hashing the password
exports.register = async (req, res, next) => {
    console.log('req data made it thru validation middleware')
    console.log('backend register route hit!');
    const user = new User({ firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email })
    const register = promisify(User.register, User)
    await register(user, req.body.password)
    next() // go on to authController.login
}