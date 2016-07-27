var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
module.exports = app;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/view/index.html'));
});

require('./twilio')(app);



app.listen(5000, function(){
    console.log("The app is listening on port 5000");
});