const express = require("express");
const app= expresss();

const port=3000;
const address="localhost";

//Criando um servidor simples com Node.js

const server = app.listen(port,address, ()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Servidor executando no endereço ${host} e potta ${port}`);
});