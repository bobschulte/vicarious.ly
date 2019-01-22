const googleMaps = require("@google/maps");
const keys = require("./keys");

const googleMapsClient = googleMaps.createClient({
    key: keys.API_KEY,
    Promise: Promise
})

module.exports = googleMapsClient