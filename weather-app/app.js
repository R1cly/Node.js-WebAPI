const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode')

const adress = process.argv[2];

if (!adress){

   console.log('Introduce una localización')

} else {


   geocode(adress,(error, {latitude,longitude} = {})=>{
   
      if (error) {
   
         return console.log(error);
   
      }
   
      forecast(latitude,longitude,(error,forecastData) =>{
   
         if(error){
   
            return console.log(error)
   
         }
   
         console.log(forecastData)
      
      })
   
   })
   


}

