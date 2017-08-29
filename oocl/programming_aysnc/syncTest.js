const fs = require('fs');
const asy = require('async');
let content;
console.log('start reading a file...');
try {
		content = fs.readFileSync('../first_webserver.js','utf-8');
}catch(ex){
	console.log(ex);
}
console.log('finish reading');