const seed = (models) => {
    models.City.destroy({ where: {} })
    models.Traveler.destroy({where: {}})
    models.Stay.destroy({where: {}})

    return Promise.all([
        models.City.create( { name: 'Bogotá', country: 'Colombia', createdAt: new Date(), updatedAt: new Date() } ),
        models.City.create( { name: 'Bangkok', country: 'Thailand', createdAt: new Date(), updatedAt: new Date() } ),
        models.City.create( { name: 'London', country: 'United Kingdom', createdAt: new Date(), updatedAt: new Date() } ),
        models.Traveler.create( { email: 'robert@test.com', firstName: 'Robert', lastName: 'Schulte', createdAt: new Date(), updatedAt: new Date() } ),
        models.Traveler.create( { email: 'dawson@test.com', firstName: 'Dawson', lastName: 'Lewis', createdAt: new Date(), updatedAt: new Date() } ),
        models.Traveler.create( { email: 'milam@test.com', firstName: 'Milam', lastName: 'Miller', createdAt: new Date(), updatedAt: new Date() } )
    ])
    .then( result => {
        const bogota = result[0]
        const hanoi = result[1]
        const london = result[2]
        const robert = result[3]
        const dawson = result[4]
        const milam = result[5]
        
        return Promise.all([
            models.Stay.create( { TravelerId: robert.id, CityId: london.id, arrival: new Date(2018, 11, 24), departure: new Date(2019, 1, 4) } ),
            models.Stay.create( { TravelerId: robert.id, CityId: bogota.id, arrival: new Date(2019, 1, 4), departure: null } ),
            models.Stay.create( { TravelerId: dawson.id, CityId: bogota.id, arrival: new Date(2018, 12, 5), departure: new Date(2018, 12, 17) } ),
            models.Stay.create( { TravelerId: dawson.id, CityId: hanoi.id, arrival: new Date(2018, 12, 17), departure: null } ),
            models.Stay.create( { TravelerId: milam.id, CityId: hanoi.id, arrival: new Date(2018, 12, 16), departure: new Date(2019, 1, 6) } ),
            models.Stay.create( { TravelerId: milam.id, CityId: london.id, arrival: new Date(2019, 1, 6), departure: null } )
        ])
    })
}

module.exports = seed