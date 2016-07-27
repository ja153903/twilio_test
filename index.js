var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/view/index.html'));
});

app.listen(5000, function(){
    console.log("The app is listening on port 5000");
});