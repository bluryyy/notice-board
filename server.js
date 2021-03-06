//import Express
const express = require('express')

//import bodyParser
const bodyParser = require('body-parser')

const moment = require('moment')

//import notice routes
const routesNotice = require('./components/notice/noticeController')

//turn on Express
const app = express()

//config View Engine
app.set('view engine', 'ejs')

//config Public
app.use(express.static('public'))

moment.locale("pt-br")
app.locals.moment = moment

//config bodyParser
app.use(bodyParser.urlencoded({extented:false}))
app.use(bodyParser.json())

//routes
app.use(routesNotice)

//select port
app.listen(3000)
