const jwt = require('jwt-simple')

const generateTokenFor = user => {
    const timestamp = new Date().getTime()
    return jwt.encode({ sub: user.id, iat: timestamp }, process.env.SECRET)
}

exports.login = (req, res, next) => {
    console.log('authenticate successful, backend login route hit!')
    console.log('sending back authenticated user & logging in...')
    // send back the token with user -> implement the jwt strategy here?
    const token = generateTokenFor(req.user)
    res.status(200).json(req.user, token)
}

// RESPONSE MAY NEED WORK
exports.logout = (req, res) => {
    req.logout()
    req.body.msg = 'logged out'
    res.status(200).json(req.body)
}

// // deprecated this in favor of JWT
// exports.isLoggedIn = (req, res, next) => {
//     // check if user is authenticated
//     if (req.isAuthenticated()) { // needs to change after implementing JWT
//         next() // allow user through to next controller action
//     } else {
//         res.status(401).json({ error: 'must be logged in to do that' });
//     }
// }
