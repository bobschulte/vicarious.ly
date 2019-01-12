const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const session = require('express-session')
const passport = require('passport')
require('./passport')
const flash = require('connect-flash')
const routes = require('../routes/index')
const User = require('../models/User')

// create Express app
const app = express()

// enable cross-origin resource sharing
app.use(cors())

// takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// populates req.cookies with any cookies that came along with the request
app.use(cookieParser());

// enable data validation methods on 'req'
app.use(expressValidator());

// enable users to stay logged in and keep their data stored between requests
app.use(session({
    secret: process.env.SECRET,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: true,
    // store: {} // figure out what this should be
}))

// add passport to handle authentication
app.use(passport.initialize())
app.use(passport.session())
passport.use(User.createStrategy());

// enable flash so we can use req.flash to pass messages back to user via the next page they request
app.use(flash())

// enable routes
app.use('/', routes);

// ERROR HANDLING

// export so we can start the app in start.js
module.exports = app