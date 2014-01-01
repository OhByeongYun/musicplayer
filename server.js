// general module import
var http = require('http')
  , fs = require('fs')
  , util = require('util')
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







/*
app.get('*.mp3', function(req, res) {
	var file = 'public/music' + decodeURI(req.url);
	var stat = fs.statSync(file);
	
	res.writeHead(200, {
		'Content-type': 'audio/mpeg',
		'Content-Length': stat.size
	});
	console.log(stat.size);
	var readStream = fs.createReadStream(file);
	readStream.pipe(res, {end: false});
});
*/