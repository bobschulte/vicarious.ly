const passport = require('passport')

// may need to add redirect functionality here somehow
exports.authenticate = passport.authenticate('local', {
    failureFlash: true,
    successFlash: 'Welcome!'
})

exports.login = (req, res, next) => {
    console.log('authenticate successful, backend login route hit!')
    console.log('sending back authenticated user & logging in...')
    res.json(req.user)
}

exports.logout = (req, res) => {
    req.logout()
    req.flash('success', 'You are now logged out.')
    // res.redirect('/') // figure out what to do here, add an error onto req object and send it back?
}

exports.isLoggedIn = (req, res, next) => {
    // check if user is authenticated
    if (req.isAuthenticated()) {
        next() // allow user through to next controller action
    } else {
        req.flash('error', 'Must be logged in to do that')
        // res.redirect('/login') // figure out what to do here, add an error onto req object and send it back?
    }
}