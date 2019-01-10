const express = require('express')
const session = require('express-session')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const passport = require('passport')
const routes = require('./routes/index')

// create Express app
const app = express()

// MIDDLEWARE
// enable cross-origin resource sharing
app.use(cors())

// takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// populates req.cookies with any cookies that came along with the request
app.use(cookieParser());

// enable routes
app.use('/', routes);

// ERROR HANDLING

// export so we can start the app in start.js
module.exports = app