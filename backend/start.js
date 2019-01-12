const db = require('./models/index')
const seed = require('./seeds/seed')

db.sequelize.sync({ force: true }).then(() => {
    // seed db tables
    seed(db)
    .catch(error => console.log(error, 'ERROR WHILE RE-SEEDING'))
    .then(() => console.log('DATABASE RE-SEEDED'))
    .then (() => {
        // console.log playground
        
    })
    .then(() => {
        // start the app! (this should maybe go below this db sync function?)
        const app = require('./app')
        app.set('port', process.env.PORT || 7777)
        const server = app.listen(app.get('port'), error => {
            if (!error) {
                console.log(`Express running → PORT ${server.address().port}`);
            } else {
                console.log(error, 'app launch didnt work')
            }
        })
    })
})