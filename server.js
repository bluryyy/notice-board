//import Express
const express = require('express')

//import bodyParser
const bodyParser = require('bodyParser')

//turn on Express
const app = express()

//config View Engine
app.set('view engine', 'ejs')

//config Public
app.use(express.static('public'))

//config bodyParser
app.use(bodyParser.urlencoded({extented:false}))
app.use(bodyParser.json())

//routes
app.get("/",(req,res)=>{
    res.send("odeio aula online")
})

//select port
app.listen(3000)