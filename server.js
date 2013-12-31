// general module import
var http = require('http')
  , express = require('express');
  

// create server
var app = express();
var server = http.createServer(app).listen(5000);


// express global setting
app.use(express.static(__dirname + '/public/'));


// route
app.get('/', function(req, res){
	res.sendfile('public/fake_index.html');
});

app.get('/develop', function(req, res) {
	res.sendfile('public/real_index.html');
});