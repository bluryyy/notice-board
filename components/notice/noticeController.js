const routes = require('express').Router()

routes.get("/",(req,res)=>{
  res.send("Initial Page")
})

routes.get("/notice",(req,res)=>{
  res.send("Notice Page")
})

routes.get("/notices/new",(req,res)=>{
  res.render('forms')
})

module.exports = routes
