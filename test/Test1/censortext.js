var censoredWords = ["sad","bad","mad"];
var customCensoredWords = [];

function censor(inStr){
	for(index in censoredWords){
		inStr = inStr.replace(censoredWords[index],"***");
	}
	for(index in customCensoredWords){
		inStr = inStr.replace(customCensoredWords[index],"****");
	}
	return inStr;
}

function addCensorWord(word){
	return customCensoredWords.push(word);
}

function getCensoredWord(word){
	return customCensoredWords.concat(customCensoredWords);
}
///以下三行为了让Node.js 能够使用的接口方法，所以导出这些方法
exports.censor = censor;
exports.addCensorWord = addCensorWord;
exports.getCensoredWord = getCensoredWord;
