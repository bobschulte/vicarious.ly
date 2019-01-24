export const sluggify = cityNameWithCountry => {
    let city = cityNameWithCountry.split(', ')
    let [ cityName, countryName ] = city
    let slugCity = cityName.split(' ').join('-').replace(/[^a-zA-Z0-9_-]/g, '').toLowerCase()
    let slugCountry = countryName.split(' ').join('-').replace(/[^a-zA-Z0-9_-]/g, '').toLowerCase()
    return [slugCity, slugCountry].join('-')
}