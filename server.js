var express = require('express');
var app = express();
var PORT = 3000;

var midleWare = {
	requriedAuthentication: function(req,res,next){
		console.log('private route info!');
		next();
	},
	logger: function(req,res,next) {
		// console.log(req);
		console.log(req.method+ ' ' +req.originalUrl + '  DATE: '+ new Date().toString());
		next();
	}
}

// app.get('/',function(req,res){
// 	res.send('Hello Express!');
// });

app.use(midleWare.logger);
app.get('/about', midleWare.logger, function(req,res) {
	res.send('About Us');
});

app.use(express.static(__dirname + '/public'));
// console.log(__dirname);

app.listen(PORT,function(){
	console.log('express server started on port '+ PORT);
});