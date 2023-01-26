const request = require ('request')

const geocode = (adress,callback) =>{

    const url = 'http://api.positionstack.com/v1/forward?access_key=fe0c125e6a1076650e7fc36bccb802c9&query='+ encodeURIComponent(adress) +''
 
    request({url, json:true}, (error,{body}) => {
 
       if(error){
 
          callback('Unable to connect to location', undefined);
 
       } else {
 
          callback(undefined, {
 
             latitude: body.data[0].latitude,
             longitude: body.data[0].longitude,
             location: body.data[0].label
 
          })
 
       }
 
    })
 
 }
 
 module.exports = geocode