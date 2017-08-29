let fs = require('fs');
console.log('start reading file test.txt.........');

///异步读文件
fs.readFile('./test.txt','utf-8',(err, content)=>{
	if(err){
		console.log('error!!!');
		return console.log(err);
	}
	console.log(`Finish reading file test.txt! Content is :\r\n\t ${content}`);
});

console.log('doing reading job, and I can do other things.');


console.log(`.....................`);
console.log(`.....................`);
console.log(`.....................`);
console.log(`.....................`);
console.log(`.....................`);