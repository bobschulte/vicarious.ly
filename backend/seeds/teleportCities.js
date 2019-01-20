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
    console.log("PREPARING TO SEED...");
    let count = 0
    let countryCount
    let error, countries, divisions, cities, cityData, newCity

    [ error, countries ] = await to(fetch(`${teleportRootUrl}/countries`))
    if (error) console.log('ERROR!!!! TELEPORT 1', error)
    countries = countries ? await countries.json() : []
    countries = countries['_links']['country:items'].slice(1,2)

    await asyncForEach(countries, async (country) => { // goes up to index 251! USA is 238
        [ error, divisions ] = await to(fetch(`${country.href}/admin1_divisions`))
        if (error) console.log('ERROR!!!! TELEPORT 2', error)
        divisions = divisions ? await divisions.json() : []
        divisions = divisions["_links"]["a1:items"]

        countryCount = 0

        await asyncForEach(divisions, async (division) => {
            [ error, cities ] = await to(fetch(`${division.href}/cities`))
            if (error) console.log('ERROR!!!! TELEPORT 3', error)
            cities = cities ? await cities.json() : []
            cities = cities["_links"]["city:items"]

            await asyncForEach(cities, async (city) => {
                [ error, cityData ] = await to(fetch(`${city.href}`))
                if (error) console.log('ERROR!!!! TELEPORT 4', error)
                cityData = cityData ? await cityData.json() : []
                
                countryCount++
                console.log(cityData["_links"]["city:country"].name, countryCount)

                // if (cityData.population && cityData.population > 99999) {
                //     console.log("its working... ITS WORKIIIIINGGGG")
                //     count++
                //     [ error, newCity ] = await to(db.City.findOrCreate({ where: {
                //             name: cityData.name,
                //             country: cityData['_links']['city:country'].name,
                //             population: cityData.population,
                //             lat: cityData.location.latlon.latitude,
                //             lng: cityData.location.latlon.longitude
                        
                //     } }))
                //     if (error) throw new Error('ERROR!!!! VICARIOUSLY')
                //     console.log('SEEDED: ', newCity[0].name, newCity[0].country, '  NEW COUNT: ', count)
                // }
            })
        })
    })
    console.log('DONE SEEDING!')
}

module.exports = teleport