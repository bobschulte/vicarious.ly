const db = require('./models/index')
const seed = require('./seeds/seed')

db.sequelize.sync({ force: true }).then(() => {
    // seed db tables
    seed(db)
    .then(res => console.log('DATABASE RE-SEEDED'))
    .then (res => {
        // console.log playground
        
    })
    .catch(error => console.log(error, 'error while re-seeding'))

    // start the app! (this should maybe go below this db sync function?)
    const app = require('./config/app')
    app.set('port', process.env.PORT || 7777)
    const server = app.listen(app.get('port'), error => {
        if (!error) {
            console.log(`Express running → PORT ${server.address().port}`);
        } else {
            console.log(error, 'app launch didnt work')
        }
    })
}).catch(error => console.log(error, 'something went wrong'))