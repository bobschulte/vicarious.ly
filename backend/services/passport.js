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
    secretOrKey: process.env.SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    passReqToCallback: true
}

passport.use(new JwtStrategy(jwtOptions, function (req, payload, done) {
    User.findOne({ 
        where: { id: payload.sub },
        include: [{
            model: db.Stay,
            include: [ db.City ]
        }]
    })
    .then((user, error) => {
        if (error) {
            console.log('ERROR!!! -> ', error)
            return done(error, false)
        } else if (user) {
            return done(null, user)
        } else {
            console.log('NEITHER!!!')
            return done(null, false)
        }
    })
}));

module.exports = passport