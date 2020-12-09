const { Router } = require('express')
const notice = require('./notice')
//Pode ser invertido
const routes = require('express').Router()

routes.get("/",(req,res)=>{
  res.send("Initial Page")
})

routes.get("/notice", async (req,res)=>{

  const avisos = await notice.selecionarTodos()
  res.render('notices',{avisos})
})

routes.get("/notice/new",(req,res)=>{
  res.render('forms')
})//Fim da Route

routes.post("/notice/new", async (req,res)=>{
  const titulo = req.body.titulo
  const data = req.body.data
  const mensagem = req.body.mensagem

  const msg = await notice.salvar({titulo,data,mensagem})

 res.render('forms',{msg})
})

module.exports = routes
