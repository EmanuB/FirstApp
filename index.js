const express = require("express");
const app= express();
const routes = require("./routes");
//era do routes, foi para o index por causa de um erro na aplicação
const expressLayouts = require("express-ejs-layouts");

const port=3030;
const address="localhost";

 //ativa uso do ejs e do Express-ejs-layouts //Era do routes, foi para o index por causa de um erro na aplicação
 app.set('view engine', 'ejs');
 app.use(expressLayouts);

//aula--Criando usando rotas simples que estão no arquivo routes.
app.use('/',routes);
//Criando um servidor simples com Node.js

const server = app.listen(port,address, ()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Servidor executando no endereço ${host} e porta ${port}`);
});