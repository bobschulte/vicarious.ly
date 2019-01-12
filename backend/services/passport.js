const passport = require('passport')
const db = require('../models/index')
const User = db.User

// connect passport to User model
passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())