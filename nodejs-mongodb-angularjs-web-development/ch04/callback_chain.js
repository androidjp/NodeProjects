function logCar(car, callback){
  console.log("Saw a %s", car);
  if(cars.length){
    process.nextTick(function(){
      callback();
    });
  }
}
function logCars(cars){
  var car = cars.pop();////出来一个元素
  logCar(car, function(){///输出
    logCars(cars);///继续pop的循环
  });
}
var cars = ["Ferrari", "Porsche", "Bugatti", 
            "Lamborghini", "Aston Martin"];
logCars(cars);