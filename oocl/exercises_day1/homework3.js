const fs = require('fs');
var FileOpt = function(){
	var opt = {
		///copy file
		copyFile:function(fileName, destination){
			fs.readFile(fileName, 'utf-8',(err,content)=>{
				if(err){
					console.log(`read file ${fileName} error!`);
					return console.log(err);
				}
				fs.writeFile(destination,content,(err)=>{
					if(err) throw err;
					console.log(`${fileName} has been copied to ${destination}.`);
				});
			});
		},

		///move file
		moveFile:function(fileName, destination){
			fs.readFile(fileName, 'utf-8',(err,content)=>{
				if(err){
					console.log(`read file ${fileName} error!`);
					return console.log(err);
				}
				fs.writeFile(destination,content,(err)=>{
					if(err) throw err;
					console.log(`${fileName} has been copied to ${destination}.`);
					fs.unlink(fileName, (err)=>{
						if(err){
							console.error(`delete ${fileName} error`);
						}
						console.log(`delete ${fileName} success!`);
					})
				});
			});
		},

		// read file
		readFile:function(fileName){
			fs.readFile(fileName , 'utf-8',(err, content)=>{
				if(err){
					console.log(`read file ${fileName} error!`);
					return console.log(err);
				}
				console.log(`finish read file ${fileName}, content is :\r\n\t  ${content}`);
			});
		}

	};

	return opt;
}();
// FileOpt.readFile("./test.txt");
FileOpt.moveFile("./test.txt", "./abc.txt");