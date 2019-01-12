exports.login = (req, res, next) => {
    console.log('authenticate successful, backend login route hit!')
    console.log('sending back authenticated user & logging in...')
    res.json(req.user) 
}

exports.logout = (req, res) => {
    req.logout()
    // res.redirect('/') // figure out what to do here, add an error onto req object and send it back?
    // res.json(req.body)
}

exports.isLoggedIn = (req, res, next) => {
    // check if user is authenticated
    if (req.isAuthenticated()) {
        next() // allow user through to next controller action
    } else {
        req.body.error = 'must be logged in to to that'
        res.json(req.body)
    }
}