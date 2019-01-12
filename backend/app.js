const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const passport = require('passport')
require('./services/passport')
const flash = require('connect-flash')
const routes = require('./routes/index')

// create Express app
const app = express()

app.use(express.static('./public'));

// enable cross-origin resource sharing
app.use(cors())

// takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// populates req.cookies with any cookies that came along with the request
app.use(cookieParser());

// enable data validation methods on 'req'
app.use(expressValidator());

// add passport to handle authentication
app.use(passport.initialize())
app.use(passport.session())

// enable flash so we can use req.flash to pass messages back to user via the next page they request
app.use(flash())

// enable routes
app.use('/', routes);

// ERROR HANDLING

// export so we can start the app in start.js
module.exports = app