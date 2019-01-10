// import models
const models = require('./server/models/index')
// models.City.destroy({where: {}})
// models.City.destroy({where: {}})
models.City.findAll({ include: models.Stay }).then(resp => {
    let cities = resp.map(city => city.get())
    console.log(cities)
})
models.Traveler.findAll({ include: models.Stay }).then(resp => {
    let travelers = resp.map(traveler => traveler.get())
    console.log(travelers)
})


// start the app!
const app = require('./app')
app.set('port', process.env.PORT || 7777)
const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
})


// // connect to database and handle any bad connections
// mongoose.connect(process.env.DATABASE);
// mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
// mongoose.connection.on('error', (err) => {
    //     console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
    // });