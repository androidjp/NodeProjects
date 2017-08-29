const express=  require('express');
const app = express();
app.get('/',function(req, res){
	res.send('Hello Express');
});
app.post('/p',function(req, res){
	let jsonSes = {
		code:200,
		msg:'success',
		data:{
			name:'Jasper',
			age:18
		}
	};
	res.send(JSON.stringify(jsonSes));
});
app.listen(3000, ()=>{
	console.log('Use express to listen 3000');
});
