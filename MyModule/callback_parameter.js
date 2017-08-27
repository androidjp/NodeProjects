////实现回调

var events = require('events');
function CarShow(){
	events.EventEmitter.call(this);
	this.seeCar = function(car){
		this.emit('sawCar',car);
	};
}
CarShow.prototype.__proto__ = events.EventEmitter.prototype;

function logCar(a){
	console.log(`Saw a ${a}`);
}
function logCarWithColor(car, color){
	console.log(`Saw a ${color} ${car}`);
}
var carShow  = new CarShow();
carShow.on('sawCar',logCar);
carShow.on('sawCar',function(b){
	var colors = ['红色','黄色','黑色'];
	var color = colors[Math.floor(Math.random()*3)];
	logCarWithColor(b,color);
});
carShow.seeCar("本田");/// this.emit('sawCar',"本田")  -->   logCar('本田')  --> 
carShow.seeCar("大众");