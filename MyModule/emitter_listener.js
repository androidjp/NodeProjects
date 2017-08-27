var events = require('events');
/// 构造自定义EventEmitter子类
function Account() {
  this.balance = 0;
  events.EventEmitter.call(this);
  this.deposit = function(amount){
    this.balance += amount;
    this.emit('balanceChanged');
  };
  this.withdraw = function(amount){
    this.balance -= amount;
    this.emit('balanceChanged');
  };
}
Account.prototype.__proto__ = events.EventEmitter.prototype;

///声明会回调触发事件
function displayBalance(){
  console.log("Account balance: $%d", this.balance);
}

function checkOverdraw(){
  if (this.balance < 0){
    console.log("Account overdrawn!!!");
  }
}
function checkGoal(acc, goal){
  if (acc.balance > goal){
    console.log("Goal Achieved!!!");
  }
}

var account = new Account();
///为对象添加回调事件集合
account.addListener("balanceChanged", displayBalance);
account.on("balanceChanged", checkOverdraw);
account.on("balanceChanged", function(){
  checkGoal(this, 1000);
});

///对象的方法调用，会触发回调事件集
account.deposit(220);
account.deposit(320);
account.deposit(600);
account.withdraw(1200);