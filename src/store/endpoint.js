const configFile = require('../config/settings.json');
const baseUrl = configFile.BASE_URL;
const headers = {
    ...configFile.HEADERS,
    "Content-Type": "application/json",
    "Accept" : "*/*"
}

export {
    baseUrl,
    headers
}