var stream = require('stream');
var util = require('util');///利用util模块的inherits()方法，让对象继承Readable流的功能
util.inherits(Answers, stream.Readable);///对象继承Readable流的功能
function Answers(params) {
  stream.Readable.call(this,params);
  this.quotes = ["yes", "no", "maybe"];
  this._index = 0;
}
Answers.prototype._read = function() {////_read()方法是Readable流的方法，现在继承这个方法
  if (this._index > this.quotes.length){
    this.push(null);///触发方法
  } else {
    this.push(this.quotes[this._index]);///触发方法
    this._index += 1;
  }
};
var r = new Answers();
console.log("Direct read: " + r.read().toString());
r.on('data', function(data){/// 'data' 事件是Readable自带的公开事件: 当数据的事件处理程序被连接时，流被转变成流动的模式，并且数据处理程序被连续调用，直到所有数据被用尽。
  console.log("Callback read: " + data.toString());
});
r.on('end', function(data){/// 'end'
  console.log("No more answers.");
});