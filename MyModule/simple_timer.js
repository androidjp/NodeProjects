///一系列自定义的超时时间的实现
function simpleTimeout(consoleTimer){
	console.timeEnd(consoleTimer);
}
console.time("twoSecond");
setTimeout(simpleTimeout,2000,"twoSecond");
console.time("oneSecond");
setTimeout(simpleTimeout,1000,"oneSecond");
console.time("fiveSecond");
setTimeout(simpleTimeout,5000,"fiveSecond");
console.time("50MilliSecond");
setTimeout(simpleTimeout,50,"50MilliSecond");

var i = 1;
function dailyJob(){
	console.info(`第${i}天的工作开始了`);
	i+=1;
}
///用时间间隔执行定期工作
var myInterval = setInterval(dailyJob,2000);
myInterval.unref();///设置：当此定时事件是队列中最后一个事件时，取消定时
myInterval.ref();///设置：重启定时事件
///即时计时器，立即执行工作
function immediatelyDo(str){
	console.log(str+"立即执行");
}
var dd = immediatelyDo("哈哈哈，小明来啦");
setImmediate(dd);
