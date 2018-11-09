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
};
modules.exports = midleWare;