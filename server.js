var express = require('express');
var app = express();
var PORT = 3000;

var midleWare = require('./midleware.js');



// app.get('/',function(req,res){
// 	res.send('Hello Express!');
// });

app.use(midleWare.logger);
app.get('/about', midleWare.logger, function(req,res) {
	res.send('About-Us');
});

app.use(express.static(__dirname + '/public'));
// console.log(__dirname);

app.listen(PORT,function(){
	console.log('express server started on port '+ PORT);
});