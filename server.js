
var express = require('express');
var app = express();
var idCounter = 0;

app.post('/post', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    var z = JSON.parse(req.query['data']);

    
    if (z["action"] == "evaulate"){
        var computerChoice=["rock","paper","scissors"];

 
        var comPick=computerChoice[Math.round(Math.random()*2)];
        var jsontext = JSON.stringify({
            'action': 'computerGen'
            'comPick': comPick,
        });
       res.send(jsontext);
        
}).listen(3000);
console.log("Server is running!");

