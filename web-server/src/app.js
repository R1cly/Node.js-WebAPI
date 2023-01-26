const express = require('express')
const path = require('path')
const hbs = require('hbs')

// Require geocode and forecast

const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

const app = express()

const publicDirectory = path.join(__dirname,'../public')

app.set('view engine','hbs')
app.use(express.static(publicDirectory))

const viewsPath = path.join(__dirname, '../templates/views')
app.set('views', viewsPath)
const partialsPath = path.join(__dirname, '../templates/partials')

hbs.registerPartials(partialsPath)


app.get('', (req, res) => {

    res.render('index',{

        title:'HolaMundo',
        name: 'Ricardo'

    });

})

app.get('/about', (req, res) =>{

    res.render('about',{

        title:'About',
        name: 'Ricardo'

    })

})

app.get('/help', (req,res) => {

    res.render('help',{

        helpMessage: 'Ayudaaa',
        title: 'Help',
        name: 'Ricardo'

    });

})

app.get("/weather", (req, res) => {

   if(!req.query.address){

    return res.send({

        error: "Error, introduce una localización"

    })

   }
   
   geocode(req.query.address, (error, {latitude,longitude, location} = {})=>{

    if(error){

        return res.send({ error })

    }

    forecast(latitude,longitude, (error, forecastData) => {

        if(error){

            res.send({error})
        }

        res.send({

            forecast: forecastData,
            location: location,
            address: req.query.address

        })

    })


   })

   

    // res.send({
        
    //     forecast:'Soleado',
    //     location: 'Valencia',
    //     address: req.query.address
    
    // })

})


app.get("/products", (req,res) =>{

    if (!req.query.search){

        return res.send({
            error: "You must provide a search term"
        })

    }

    console.log(req.query)


    res.send({

        products: []

    })

})
app.get('/help/*', (req, res) => {

    res.render('404',{message:'Help article not found'})
})

app.get('*', (req, res) =>{

    res.render('404',{message:'404 page not found'})

})


app.listen(3000, () => {

    console.log("Server is up on port 3000")

});