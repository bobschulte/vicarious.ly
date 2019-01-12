const seed = async (db) => {
    db.City.destroy({ where: {} })
    db.User.destroy({ where: {} })
    db.Stay.destroy({ where: {} })

    let cities = await Promise.all([
        db.City.create( { name: 'Bogotá', country: 'Colombia', createdAt: new Date(), updatedAt: new Date() } ),
        db.City.create( { name: 'Bangkok', country: 'Thailand', createdAt: new Date(), updatedAt: new Date() } ),
        db.City.create( { name: 'London', country: 'United Kingdom', createdAt: new Date(), updatedAt: new Date() } ),
    ])
    
    const bogota = cities[0]
    const hanoi = cities[1]
    const london = cities[2]
    
    let users = await Promise.all([
        db.User.create( { email: 'robert@test.com', firstName: 'Robert', lastName: 'Schulte', createdAt: new Date(), updatedAt: new Date() } ),
        db.User.create( { email: 'dawson@test.com', firstName: 'Dawson', lastName: 'Lewis', createdAt: new Date(), updatedAt: new Date() } ),
        db.User.create( { email: 'milam@test.com', firstName: 'Milam', lastName: 'Miller', createdAt: new Date(), updatedAt: new Date() } )
    ])

    const robert = users[0]
    const dawson = users[1]
    const milam = users[2]
    
    await Promise.all([
        db.Stay.create( { UserId: robert.id, CityId: london.id, arrival: new Date(2018, 11, 24), departure: new Date(2019, 1, 4) } ),
        db.Stay.create( { UserId: robert.id, CityId: bogota.id, arrival: new Date(2019, 1, 4), departure: null } ),
        db.Stay.create( { UserId: dawson.id, CityId: bogota.id, arrival: new Date(2018, 12, 5), departure: new Date(2018, 12, 17) } ),
        db.Stay.create( { UserId: dawson.id, CityId: hanoi.id, arrival: new Date(2018, 12, 17), departure: null } ),
        db.Stay.create( { UserId: milam.id, CityId: hanoi.id, arrival: new Date(2018, 12, 16), departure: new Date(2019, 1, 6) } ),
        db.Stay.create( { UserId: milam.id, CityId: london.id, arrival: new Date(2019, 1, 6), departure: null } )
    ])
    console.log('DATABASE RE-SEEDED')
}

module.exports = seed