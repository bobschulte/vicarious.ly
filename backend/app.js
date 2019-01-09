const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const passport = require('passport')

// create Express app
const app = express()

// export so we can start the app in start.js
module.exports = app