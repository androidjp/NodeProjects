const http = require('http');
const url = require('url');


///-----------------------------------------------------------------------------------------
/// url 解析 的来回过程
///-----------------------------------------------------------------------------------------
var urlStr = "http://localhost:8808/resource/path?name=jasper&id=123&age=18&age=22";
var urlObj = url.parse(urlStr,true, false);

console.log(JSON.stringify(urlObj,null,4));

urlStr  = url.format(urlObj);
console.log(urlStr);


///-----------------------------------------------------------------------------------------
/// 解析URL组件(path替换)
///-----------------------------------------------------------------------------------------
var newPath = '/author/tommy';
console.log(`地址替换后： `+url.resolve(urlStr, newPath));

///-----------------------------------------------------------------------------------------
/// 利用 querystring module 来解析请求参数
///-----------------------------------------------------------------------------------------
var qstring = require('querystring');
var params = qstring.parse("name=jasper&id=123&age=18&age=22");
console.log(JSON.stringify(params,null,4));

///-----------------------------------------------------------------------------------------
/// 静态文件服务器 (需要： url ， http ，fs)
///-----------------------------------------------------------------------------------------
var fileServer = http.createServer(function(req, res){
	///解析url
	var urlObj = url.parse(req.url, true, false);

	fs.readFile('url/'+ urlObj.pathname, 'utf-8',(err,data)=>{
		if(err){
			res.writeHead(404);
			res.end(JSON.stringify(err));
			return;
		}
		res.writeHead(200);
		res.end(data);
	});
});
fileServer.listen(8077);

///  服务端
