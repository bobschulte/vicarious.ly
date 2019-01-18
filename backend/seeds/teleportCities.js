const teleportRootUrl = "https://api.teleport.org/api";
import apiCall from '../../frontend/src/state/actions/helpers/apiCall'

let count = 0
fetch(`${teleportRootUrl}/countries`).then(res => res.json())
    .then(countries => {
        countries['_links']['country:items'].slice(238, 239).forEach(country => { // goes up to index 251! // USA is 238
            fetch(`${country.href}/admin1_divisions`).then(res => res.json())
                .then(divisions => {
                    divisions['_links']['a1:items'].slice(0, 1).forEach(division => {
                        fetch(`${division.href}/cities`).then(res => res.json())
                            .then(cities => {
                                cities['_links']['city:items'].forEach(city => {
                                    fetch(`${city.href}`).then(res => res.json())
                                        .then(cityData => {
                                            if (cityData.population && cityData.population > 99999) {
                                                count++
                                                let city = {
                                                    name: cityData.name,
                                                    country: cityData['_links']['city:country'].name,
                                                    population: cityData.population,
                                                    lat: cityData.location.latlon.latitude,
                                                    lng: cityData.location.latlon.longitude
                                                }
                                                apiCall('POST', '/cities', city)
                                                    .then(res => console.log('count: ', count, 'response: ', res))
                                            }
                                        })
                                })
                            })
                    })
                })
        })
    })