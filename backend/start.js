const db = require('./models/index')
const seed = require('./seeds/seed')
const teleport = require('./seeds/teleportCities')
const app = require('./app')

db.sequelize.sync().then(async () => { // { force: true }
    // await seed(db)
    await teleport(db)

    app.set('port', process.env.PORT || 7777)

    const server = app.listen(app.get('port'), error => {
        if (!error) {
            console.log(`Express running → PORT ${server.address().port}`);
        } else {
            console.log(error, 'app launch didnt work')
        }
    })
})