const passport = require('passport')
const jwt = require('passport-jwt')
const JwtStrategy = jwt.Strategy
const ExtractJwt = jwt.ExtractJwt
const db = require("../models/index");
const User = db.User;

// local strategy
passport.use(User.createStrategy())

// jwt strategy
const jwtOptions = {
    secret: process.env.SECRET,
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    issuer: 'vicarious.ly'
}

passport.use(new JwtStrategy(jwtOptions, function (payload, done) {
    User.findById(payload.sub, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));