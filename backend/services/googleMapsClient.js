const googleMaps = require("@google/maps");
const keys = require("./keys");

const googleMapsClient = googleMaps.createClient({
    key: keys.MAPS_API_KEY,
    Promise: Promise
})

module.exports = googleMapsClient