const seed = (models) => {
    models.City.destroy({ where: {} })
    models.User.destroy({ where: {} })
    models.Stay.destroy({ where: {} })

    return Promise.all([
        models.City.create( { name: 'Bogotá', country: 'Colombia', createdAt: new Date(), updatedAt: new Date() } ),
        models.City.create( { name: 'Bangkok', country: 'Thailand', createdAt: new Date(), updatedAt: new Date() } ),
        models.City.create( { name: 'London', country: 'United Kingdom', createdAt: new Date(), updatedAt: new Date() } ),
        models.User.create( { email: 'robert@test.com', firstName: 'Robert', lastName: 'Schulte', createdAt: new Date(), updatedAt: new Date() } ),
        models.User.create( { email: 'dawson@test.com', firstName: 'Dawson', lastName: 'Lewis', createdAt: new Date(), updatedAt: new Date() } ),
        models.User.create( { email: 'milam@test.com', firstName: 'Milam', lastName: 'Miller', createdAt: new Date(), updatedAt: new Date() } )
    ])
    .then(resp => {
        const bogota = resp[0]
        const hanoi = resp[1]
        const london = resp[2]
        const robert = resp[3]
        const dawson = resp[4]
        const milam = resp[5]
        
        return Promise.all([
            models.Stay.create( { UserId: robert.id, CityId: london.id, arrival: new Date(2018, 11, 24), departure: new Date(2019, 1, 4) } ),
            models.Stay.create( { UserId: robert.id, CityId: bogota.id, arrival: new Date(2019, 1, 4), departure: null } ),
            models.Stay.create( { UserId: dawson.id, CityId: bogota.id, arrival: new Date(2018, 12, 5), departure: new Date(2018, 12, 17) } ),
            models.Stay.create( { UserId: dawson.id, CityId: hanoi.id, arrival: new Date(2018, 12, 17), departure: null } ),
            models.Stay.create( { UserId: milam.id, CityId: hanoi.id, arrival: new Date(2018, 12, 16), departure: new Date(2019, 1, 6) } ),
            models.Stay.create( { UserId: milam.id, CityId: london.id, arrival: new Date(2019, 1, 6), departure: null } )
        ])
    })
}

module.exports = seed