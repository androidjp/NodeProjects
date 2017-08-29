var express = require('express');

module.exports = (app) =>{
	var router = express.Router();
	router.route('/users').get((req,res,next)=>{
		res.send('user user user');
	});
	//外部的router 去加载内部的router
	app.use('/helloExpress',router);
}