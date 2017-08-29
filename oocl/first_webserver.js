let http = require('http');
let _ = require('lodash');///功能模块：对字符串和数组等进行操作
let [host,port] = ['localhost',8888];

http.createServer((req,resp)=>{
	resp.writeHead(200, {
		'Content-Type':'text/plain'
	});
	resp.end("Hello word");
}).listen(port);
host = _.isInteger(port)?'localhost:8888':'';
console.log(`Our awesome web server is runnig at ${host}`);