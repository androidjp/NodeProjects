let say = ()=> 'Hi';
let name = ()=>'Jasper'+Math.PI;
// exports.say = say;
// exports.name = name;

// exports = function(name){return "Hi,"+ name;}; /// 这样的方式是错的，因为exports是一个对象，不应该是一个函数
module.exports = (val)=>'Love u,'+ val;  /// 这样就可以
