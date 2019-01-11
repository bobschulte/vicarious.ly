const db = require('./models/index')
const seed = require('./seeds/seed')

db.sequelize.sync({ force: true }).then(() => {
    // seed db tables
    seed(db)
    // start the app!
    const app = require('./config/app')
    app.set('port', process.env.PORT || 7777)
    const server = app.listen(app.get('port'), () => {
        console.log(`Express running → PORT ${server.address().port}`);
    })
    // add in error handling for any bad/failed connections

})