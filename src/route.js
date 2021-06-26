const express = require('express')

const route = express.Router()

route.get('/', (req,res) => res.render("index"))
route.get('/room', (req,res) => res.render("room"))
route.get('/create-pass', (req,res) => res.render("create-pass"))


// formato que o formulário de dentro da modal tem que passar a informação
// route.post('/room/:room/:question/:action') Passa via url, qual é a sala, a questão e a ação 

module.exports = route  //Exportando a constante routes para uso em outras páginas