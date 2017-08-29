const fs = require('fs');

let content;
console.log('start reading a file...');

///异步读文件
fs.readFile('../sayHi.js','utf-8',(err, content)=>{
	if(err){
		console.log('error');
		return console.log(err);
	}
	console.log(`Finish reading! Content is ${content}`);
});

console.log('finish reading');
console.log('do something');


console.log(`.....................`);
console.log(`.....................`);
console.log(`.....................`);
console.log(`.....................`);
console.log(`.....................`);
