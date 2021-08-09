//wiki.js - Wiki route module

const express = require('express');
const router = express.Router();
const app = express();


router.use(express.static('public'));


router.get('/',(req,res)=>{
    res.render('pages/home');
});
router.get('/about', (req,res)=>{
    res.render('pages/about');
});
router.get('/cadastro', (req,res)=>{
    res.render('pages/cadastro');
});
//Home page route
// router.get('/', function(req, res){
//     res.send('Wiki home page');
// });

//About page route (pq isso tá em inglês??)
// router.get('/about', function(req, res){
//     res.send('About this wiki');
// });

//exemplo de rota: http://localhost:3030/index.html
module.exports = router
//parei no slide 25, no slide 28 tem mais códigos mas eles estão desconexos???