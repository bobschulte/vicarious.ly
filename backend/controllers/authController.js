exports.login = (req, res, next) => {
    console.log('authenticate successful, backend login route hit!')
    console.log('sending back authenticated user & logging in...')
    res.json(req.user) 
}

// RESPONSE MAY NEED WORK
exports.logout = (req, res) => {
    req.logout()
    req.body.msg = 'logged out'
    res.json(req.body)
}

exports.isLoggedIn = (req, res, next) => {
    // check if user is authenticated
    if (req.isAuthenticated()) {
        next() // allow user through to next controller action
    } else {
        res.status(401).json({ error: 'must be logged in to do that' });
    }
}
