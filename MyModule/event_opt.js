////创建事件，加入事件队列，事件被执行(事件被EventEmmiter对象发出)，事件执行完毕后回调执行
var events= require('events');
var emitter = new events.EventEmitter();///获取events模块中的EventEmitter对象
emitter.emit("simpleEvent");///让这个EventEmitter对象触发名为'simpleEvent'的事件

///EventEmitter 子类的构建【自定义事件发射器】
function MyObj(){
	events.EventEmitter.call(this);///在对象中继承EventEmitter功能
}
MyObj.prototype._proto_ = events.EventEmitter.prototype;///让对象的原型 变成 EventEmitter的原型

///使用EventEmitter子类对象直接发出事件
var myObj = new MyObj();
myObj.emit("oneEvent");

///把事件监听器添加到对象
function myCallback(){
	console.log("事件执行了");
}
myObj.on("oneEvent",myCallback);




