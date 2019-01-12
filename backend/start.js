const db = require('./models/index')
const seed = require('./seeds/seed')

db.sequelize.sync({ force: true }).then(async () => {

    await seed(db)

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