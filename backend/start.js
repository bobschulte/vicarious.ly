const db = require('./server/models/index')
const seed = require('./server/seeds/seed')

db.sequelize.sync({ force: true }).then(() => {
    // seed db tables
    seed(db)
    // start the app!
    const app = require('./app')
    app.set('port', process.env.PORT || 7777)
    const server = app.listen(app.get('port'), () => {
        console.log(`Express running → PORT ${server.address().port}`);
    })
    // add in error handling for any bad/failed connections
    
})