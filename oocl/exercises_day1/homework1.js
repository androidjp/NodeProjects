let http = require('http');
let  _  = require('lodash');
let [host,port] = ['localhost', 9000];

///server 启动服务，监听 9000端口
let server = http.createServer((req,resp)=>{
	resp.writeHead(200, {
		'Content-Type':'text/plain'
	});
	resp.end("Hello world!");
}).listen(port);

host = _.isInteger(port)?'localhost:9000':'';
console.log(`Our awesome web server is runnig at ${host}`);