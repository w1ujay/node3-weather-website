const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1d0510607818d26d93933d05f7e333f5&units=f&query='+ latitude +','+ longitude
    request({ url, json: true }, (error, { body }) => {
   if (error) {
       callback('Unable to connect to weather service', undefined)
          } else if (body.error){
       callback('Check location!', undefined)
   } else {
       callback(undefined, body.current.weather_descriptions[0] + ". The Current Temperature is " + body.current.temperature + " degrees outside, and it feels like " + body.current.feelslike + " degrees.")
   }
})
}
module.exports = forecast

