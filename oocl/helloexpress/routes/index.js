var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about',function(req,res, next){
	res.send('about');
})

router.all('/',function(req,res,next){
	console.log('all() start...');
});

router.get('/user/:name/:age',(req,res,next)=>{
	res.send(`${req.params.name} , 你好~  哦，你${req.params.age}岁啦~！`);
});

router.get('/first/:step', (req,res,next)=>{
	if(req.params.step == 1){
		next(router[1]);
	}else{
		res.send('first');
	}
},function(req,res,next){
	next(router[0]);
},function(req,res){
	res.send('fffffff');
});

router.get('/second',(req,res)=>{
	res.send('second');
});


//链式handle
// app.router('/opts1')
// 	.get(……)
// 	.post(……)
// 	.put(……);


module.exports = router;
