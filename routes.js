//wiki.js - Wiki route module

const express = require('express');
const router = express.Router();

//Home page route
router.get('/', function(req, res){
    res.send('Wiki home page');
});

//About page route (pq isso tá em inglês??)
router.get('/about', function(req, res){
    res.send('About this wiki');
});

module.exports = router
//parei no slide 25, no slide 28 tem mais códigos mas eles estão desconexos???