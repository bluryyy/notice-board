const { Router } = require('express')
const notice = require('./notice')
//Pode ser invertido
const routes = require('express').Router()

routes.get("/",async (req,res)=>{
  const avisos = await notice.selecionarTodos()
  res.render('index',{avisos})
})

routes.get("/notice", async (req,res)=>{

  const avisos = await notice.selecionarTodos()
  res.render('notices',{avisos})
})

routes.get("/notice/new",(req,res)=>{
  res.render('forms')
})//Fim da Route

routes.get("/notice/editar/:id", async (req, res)=> {
  const id = req.params.id
  const aviso = await notice.selecionarAviso(id)
  res.render('forms',{aviso})
})

routes.post("/notice/new", async (req,res)=>{
  const titulo = req.body.titulo
  const data = req.body.data
  const mensagem = req.body.mensagem

  const msg = await notice.salvar({titulo,data,mensagem})

 res.render('forms',{msg})
})

routes.post("/notice/editar/:id", async (req, res)=> {
  const id = req.body.id
  const titulo = req.body.titulo
  const data = req.body.data
  const mensagem = req.body.mensagem

  const msg = await notice.editar({titulo,data,mensagem}, id)

  if(msg.tipo === "Sucesso"){
    res.redirect('/notice')
  }else{
    res.render('forms',{msg})
  }
})

routes.get("/notices/excluir/:id", async (req,res)=>{
  const id = Number(req.params.id)
  await notice.excluir(id)
  res.redirect('/notice')
})

module.exports = routes
