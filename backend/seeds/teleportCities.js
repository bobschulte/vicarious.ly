const to = require("await-to-js").to
const fetch = require('node-fetch')
const teleportRootUrl = "https://api.teleport.org/api"

async function asyncForEach(array, callback) {
    if (array.length > 0) {
        for (let index = 0; index < array.length; index++) {
            await callback(array[index], index, array);
        }
    } else {
        console.log('GOT AN EMPTY ARRAY')
    }
}

const teleport = async (db) => {
    console.log("PREPARING TO SEED...")
    let thisCountrysCities
    let counts = { counts: { citiesScanned: 4109, citiesSeeded: 3366, countriesSeeded: 14 } }
    let errors = { errors: { countries: { msgs: [], count: 0}, divisions: { msgs: [], count: 0}, cities: { msgs: [], count: 0}, cityData: { msgs: [], count: 0}, urbanArea: { msgs: [], count: 0}, app: { msgs: [], count: 0} } }
    let error, countries, divisions, cities, cityData, photo, newCity;

    [ error, countries ] = await to(fetch(`${teleportRootUrl}/countries`))
    if (error) console.log('ERROR!!!! TELEPORT 1: ', error) && errors.countries.count++ && errors.countries.msgs.push(error)
    countries = countries ? await countries.json() : []
    countries = countries['_links']['country:items'].slice(14) // Austria

    await asyncForEach(countries, async (country) => { // goes up to index 251! USA is 238
        [ error, divisions ] = await to(fetch(`${country.href}/admin1_divisions`))
        if (error) console.log('ERROR!!!! TELEPORT 2: ', error) && errors.divisions.count++ && errors.divisions.msgs.push({ country, error })
        divisions = divisions ? await divisions.json() : []
        divisions = divisions["_links"]["a1:items"]

        thisCountrysCities = 0;

        await asyncForEach(divisions, async (division) => {
            [ error, cities ] = await to(fetch(`${division.href}/cities`))
            if (error) console.log('ERROR!!!! TELEPORT 3: ', error) && errors.cities.count++ && errors.cities.msgs.push({ country, error })
            cities = cities ? await cities.json() : []
            cities = cities["_links"]["city:items"]

            await asyncForEach(cities, async (city) => {
                [ error, cityData ] = await to(fetch(`${city.href}`))
                if (error) console.log('ERROR!!!! TELEPORT 4: ', error) && errors.cityData.count++ && errors.cityData.msgs.push({ country, error })
                cityData = cityData ? await cityData.json() : []
                
                counts.counts.citiesScanned++
                photo = null
                
                if (cityData.population) {
                    if (cityData["_links"]["city:urban_area"]) {
                        [ error, photo ] = await to(fetch(`${cityData["_links"]["city:urban_area"]["href"]}images`))
                        if (error) console.log('ERROR!!!! TELEPORT 5: ', error) && errors.cityData.count++ && errors.urbanArea.msgs.push({ country, error })
                        photo = photo ? await photo.json() : []
                        photo = photo.photos[0].image.web
                    }
                
                    thisCountrysCities++
                    counts.counts.citiesSeeded++
                    [ error, newCity ] = await to(db.City.findOrCreate({ where: {
                            name: cityData.name,
                            country: cityData['_links']['city:country'].name,
                            population: cityData.population,
                            lat: cityData.location.latlon.latitude,
                            lng: cityData.location.latlon.longitude,
                            imgUrl: photo,
                    } }))

                    if (error) console.log('ERROR!!!! APP: ', error) && errors.app++
                    if (newCity) console.log('SEEDED: ', newCity[0].name, newCity[0].country)
                    console.log("COUNTRY SEED COUNT: ", thisCountrysCities, "  TOTAL SEED COUNT: ", counts.counts.citiesSeeded);
                }
            })
        })
        counts.counts.countriesSeeded++
        console.log('COUNTS SO FAR: ', counts)
        console.log('ERRORS SO FAR: ', errors)
    })
    console.log('DONE SEEDING! COUNTS: ', counts, 'ERRORS: ', errors)
}

module.exports = teleport