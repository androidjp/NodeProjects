///一般定义属性
var book = {
	_author:'小明'
}
Object.defineProperty(book, "id", {
	
	enumerable:true,
	writable:false,
	value:12
});
console.log(book);

//getter and setter
Object.defineProperty(book, "author",{
	get:function(){
		return this._author;
	},
	set:function(author){
		this._author = author;
	}
});
console.log(book.author);
book.author = "小芳";
console.log(book.author);

// 多属性定义
book = {};
Object.defineProperties(book,{
	_year:{value:2004,writable:true},
	edtion:{value:1, writable:true,enumerable:true},
	year:{
		get:function(){return this._year;},
		set:function(year) {
			this._year = year;
		}
	}
});
console.log(book);

///查看属性的特性
console.log(Object.getOwnPropertyDescriptor(book,"_year"));
