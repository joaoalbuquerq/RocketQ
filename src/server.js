const express = require('express') //Faz uma requisição ao express
const route = require('./route') //Importa o arquivo de rotas
const path = require('path') //módulo para indicar caminho da view


const server = express() //Atribui a server todo o conteúdo de express

server.set('view engine', 'ejs') //seja no express que a view engine é o ejs

server.use(express.static("public")) //Indicando que arquivos estáticos como estilos e imagens ficaram na pasta public

//faz uma juntção do caminho do projeto com o dirname(que é src por causa do join)
server.set('views', path.join(__dirname, 'views'))

server.use(route) //Setando que o express irá usar o arquivo de rotas

server.listen(3000, () => console.log('rodando'))