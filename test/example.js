const http  =require('http');
const hostname = '127.0.0.1';
const port = 3001;
const server = http.createServer((req,res)=>{
	res.statusCode = 200;
	// res.setHeader('Content-Type','text/plain');
	res.setHeader('Content-Type', 'application/json')
	// res.end('Hello World\n');
	var jsonResult={
		id:1,
		name:'小明',
		birth:new Date()
	};
	res.end(JSON.stringify(jsonResult));
});

server.listen(port, hostname,() => {
	console.log(`服务器运行在HTTP://${hostname}:${port}`);
});