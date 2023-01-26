const http = require('http')


const url = 'http://api.weatherstack.com/current?access_key=21b23a8b6e0d2141cc67bf002203827b&query=40,-75'

const request = http.request(url, (response) =>{

    let data = ''

    response.on('data', (chunk) =>{

        data = data + chunk.toString();

    })

    response.on('end', () =>{

        const body = JSON.parse(data)

        console.log(body)

    })

});

request.on('error', (error) =>{

    console.log(error)

})

request.end();