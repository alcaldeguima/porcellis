var express = require('express');
var app = express();
app.set('vies engine', 'ejs');
app.use(express.urlencoded({extended: false}));

app.get('/',(req, res)=>{
    res.render("index.ejs",{});
});

app.post('/', (req, res)=>{
    res.send("yay "+ req.body.nome);
});

app.listen('3000', ()=>{
    console.log('rodando');
});