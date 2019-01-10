// import environment variables from variables.env
require('dotenv').config({ path: 'variables.env' })


// // connect to database and handle any bad connections
// mongoose.connect(process.env.DATABASE);
// mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
// mongoose.connection.on('error', (err) => {
    //     console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
    // });
    
// import db
const db = require('./server/models/index')

// start the app!
const app = require('./app')
app.set('port', process.env.PORT || 7777)
const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
})