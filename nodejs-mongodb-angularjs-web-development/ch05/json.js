var accountObj = {
  name: "Baggins",
  number: 10645,
  members: ["Frodo, Bilbo"],
  location: "Shire"
};
 var obj =  {
      name : "小明",
      age : 18,
      friends: [{name: "小花",age:16},{name:"小新,age:22"}],
      speak: function(word){console.log("Hello, I want to say "+ word);}
      };
var accountStr = JSON.stringify(accountObj);
var str = JSON.stringify(obj);

console.log(accountStr);
console.log(str);
var accountStr = '{"name":"Jedi", "members":["Yoda","Obi Wan"], \
                   "number":34512, "location": "A galaxy far, far a way"}';
var accountObj = JSON.parse(accountStr);  
console.log(accountObj.name);
console.log(accountObj.members);