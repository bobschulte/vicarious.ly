const to = require("await-to-js").to
const fetch = require('node-fetch')
const teleportRootUrl = "https://api.teleport.org/api"

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

const teleport = async (db) => {
    let count = 0
    let error, countries, divisions, cities, cityData, newCity

    [ error, countries ] = await to(fetch(`${teleportRootUrl}/countries`))
    if (error) throw new Error('ERROR!!!! TELEPORT 1')
    countries = await countries.json()

    await asyncForEach(countries['_links']['country:items'].slice(0, 1), async (country) => { // goes up to index 251! USA is 238
        [ error, divisions ] = await to(fetch(`${country.href}/admin1_divisions`))
        if (error) throw new Error('ERROR!!!! TELEPORT 2')
        divisions = await divisions.json()

        await asyncForEach(divisions['_links']['a1:items'], async (division) => {
            [ error, cities ] = await to(fetch(`${division.href}/cities`))
            if (error) throw new Error('ERROR!!!! TELEPORT 3')
            cities = await cities.json()
            
            await asyncForEach(cities['_links']['city:items'], async (city) => {
                [ error, cityData ] = await to(fetch(`${city.href}`))
                if (error) throw new Error('ERROR!!!! TELEPORT 4')
                cityData = await cityData.json()

                if (cityData.population && cityData.population > 99999) {
                    console.log("its working... ITS WORKIIIIINGGGG")
                    count++
                    [ error, newCity ] = await to(db.City.findOrCreate({ where: {
                            name: cityData.name,
                            country: cityData['_links']['city:country'].name,
                            population: cityData.population,
                            lat: cityData.location.latlon.latitude,
                            lng: cityData.location.latlon.longitude
                        
                    } }))
                    if (error) throw new Error('ERROR!!!! VICARIOUSLY')
                    console.log('SEEDED: ', newCity[0].name, newCity[0].country, '  NEW COUNT: ', count)
                }
            })
        })
    })
    console.log('DONE!!!')
}

module.exports = teleport