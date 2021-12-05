

var express = require('express');
var app = express();

app.post('/post', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("New express client");
    console.log("Received: ");
    console.log(JSON.parse(req.query['data']));
    var z = JSON.parse(req.query['data']);

    // check if the request action is generateCode
    if (z["action"] == "generateCode"){
        var computerChoice=["rock","paper","scissors"];
        var comPick=computerChoice[Math.round(Math.random()*2)];
      
        var jsontext = JSON.stringify({
            'action': 'generateGen',
            'comPick': comPick,
        });
        res.send(jsontext);
    }

}).listen(3000);
console.log("Server is running!");
