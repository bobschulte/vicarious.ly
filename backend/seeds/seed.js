const seed = async (db) => {
    // db.User.destroy({ where: {} })
    // db.City.destroy({ where: {} })
    // db.Stay.destroy({ where: {} })

    let cities = await Promise.all([
        db.City.findOne({ where: { name: 'Bogotá', country: 'Colombia' } }),
        db.City.findOne({ where: { name: 'Bangkok', country: 'Thailand' } }),
        db.City.findOne({ where: { name: 'London', country: 'United Kingdom' } }),
        db.City.findOne({ where: { name: 'Madrid', country: 'Spain' } }),
        db.City.findOne({ where: { name: 'Tokyo', country: 'Japan' } }),
        db.City.findOne({ where: { name: 'Cape Town', country: 'South Africa' } }),
        db.City.findOne({ where: { name: 'Buenos Aires', country: 'Argentina' } })
    ])
    
    const bogota = cities[0]
    const bangkok = cities[1]
    const london = cities[2]
    const madrid = cities[3]
    const tokyo = cities[4]
    const johannesburg = cities[5]
    const buenosAires = cities[6]
    console.log('BUENOS AIRES: ', buenosAires)
    
    let users = await Promise.all([
        db.User.findOne({ where: { firstName: 'Robert' }, include: [{ model: db.Stay, include: [ db.City ] }] }),
        db.User.findOne({ where: { firstName: 'Dawson' }, include: [{ model: db.Stay, include: [ db.City ] }] }),
        db.User.findOne({ where: { firstName: 'Milam' }, include: [{ model: db.Stay, include: [ db.City ] }] }),
        db.User.findOne({ where: { firstName: 'Charlie' }, include: [{ model: db.Stay, include: [ db.City ] }] }),
        db.User.findOne({ where: { firstName: 'Jackson' }, include: [{ model: db.Stay, include: [ db.City ] }] }),
        db.User.findOne({ where: { firstName: 'Wilson' }, include: [{ model: db.Stay, include: [ db.City ] }] }),
        db.User.findOne({ where: { firstName: 'Will' }, include: [{ model: db.Stay, include: [ db.City ] }] })
    ])
    
    const robert = users[0]
    const dawson = users[1]
    const milam = users[2]
    const charlie = users[3]
    const jackson = users[4]
    const will = users[5]
    const wilson = users[6]
    console.log('WILSON: ', wilson)

    // let currentStay = robert.Stays.find(stay => stay.departure === null)
    // currentStay.update({
    //     departure: new Date()
    // }).then(res => { 
    //     console.log(res)
    // })
    // console.log(currentStay)
    // console.log(db.User.update)

    // robert.addStay({ UserId: robert.id, CityId: tokyo.id, arrival: new Date() }).then(res => console.log(res))
    
    // await Promise.all([
    //     db.Stay.create( { UserId: robert.id, CityId: buenosAires.id, arrival: new Date(2018, 11, 24), departure: new Date(2019, 1, 4) } ),
    //     db.Stay.create( { UserId: robert.id, CityId: bogota.id, arrival: new Date(2019, 1, 4), departure: null } ),
    //     db.Stay.create( { UserId: dawson.id, CityId: bogota.id, arrival: new Date(2018, 12, 5), departure: new Date(2018, 12, 17) } ),
    //     db.Stay.create( { UserId: dawson.id, CityId: bangkok.id, arrival: new Date(2018, 12, 17), departure: null } ),
    //     db.Stay.create( { UserId: milam.id, CityId: bangkok.id, arrival: new Date(2018, 12, 16), departure: new Date(2019, 1, 6) } ),
    //     db.Stay.create( { UserId: milam.id, CityId: london.id, arrival: new Date(2019, 1, 6), departure: null } ),
    //     db.Stay.create( { UserId: charlie.id, CityId: london.id, arrival: new Date(2018, 11, 16), departure: new Date(2018, 12, 20) } ),
    //     db.Stay.create( { UserId: charlie.id, CityId: madrid.id, arrival: new Date(2018, 12, 20), departure: null } ),
    //     db.Stay.create( { UserId: jackson.id, CityId: madrid.id, arrival: new Date(2018, 11, 5), departure: new Date(2019, 1, 8) } ),
    //     db.Stay.create( { UserId: jackson.id, CityId: tokyo.id, arrival: new Date(2019, 1, 8), departure: null } ),
    //     db.Stay.create( { UserId: will.id, CityId: tokyo.id, arrival: new Date(2018, 12, 4), departure: new Date(2018, 12, 30) } ),
    //     db.Stay.create( { UserId: will.id, CityId: johannesburg.id, arrival: new Date(2018, 12, 30), departure: null } ),
    //     db.Stay.create( { UserId: wilson.id, CityId: johannesburg.id, arrival: new Date(2018, 12, 1), departure: new Date(2019, 1, 10) } ),
    //     db.Stay.create( { UserId: wilson.id, CityId: buenosAires.id, arrival: new Date(2019, 1, 10), departure: null } )
    // ])
    console.log('DATABASE RE-SEEDED')
}

module.exports = seed