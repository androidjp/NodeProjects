const http = require('http');
const _ = require('lodash');
var foodItemList = require("./models/foodItems.json");
var [hostName, port] = ['localhost',8082];


/**
*  get 方式查询所有foodItem
*  post 方式 根据name搜索foodItem
**/
http.createServer((req,resp)=>{
	/// search foodItem by name
	if(req.url = '/fooditem/search' && req.method.toUpperCase() === 'POST'){
		var allDataStr = '';
		req.on('data', function(chunk){
			allDataStr +=chunk;
		});
		req.on('end' , function(){
			//根据得到的数据，获取
			var allData = JSON.parse(allDataStr);
			var foodName = allData.name;
			resp.writeHead(200, {
				'Content-Type':'application/json'
			});

			var resultList = [];
			_.forEach(foodItemList, (item)=>{
				if(_.isEqual(foodName, item.name)){
					resultList.push(item);
				}
			})
			resp.end(JSON.stringify(resultList));
		});
	}
	//// find all  foodItem
	else if(req.url = '/fooditem/all' && req.method.toUpperCase() === 'GET'){
			resp.writeHead(200, {
				'Content-Type':'application/json'
			});
			resp.end(JSON.stringify(foodItemList));
	}
}).listen(port,hostName, ()=>{
	console.log(`start listen ${hostName}:${port}`);
});
