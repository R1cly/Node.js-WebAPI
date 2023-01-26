const request = require ('request');

const forecast = (latitud, longitud, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=21b23a8b6e0d2141cc67bf002203827b&query='+ latitud +','+ longitud +''


    request({ url, json: true }, ( error, { body } ) =>  {


        if (error) {
  
           callback('Error 1 ', undefined )
  
        } else if ( body.error ) {
  
           callback('Unable to find location',undefined);
  
        } else {
  
           callback(undefined,body.current.weather_descriptions[0] + ' Its ' + body.current.temperature + ' degrees and it feels ' + body.current.feelslike)
  
  
        }
  
     });






    }

    module.exports = forecast