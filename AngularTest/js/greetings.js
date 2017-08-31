
var app = angular.module('greetings', []);

////记住：，每一个 directive，先走 controller， 后走link（深度优先遍历）

/// 对 angular 的 ng-app = greetings 的内部的 <welcome> 
app.directive('welcome', function() {
    return {
        restrict: "E",
        /// ng 的 controller 阶段 （link phase）
        /// scope 再link阶段，才放上去的，原型的概念
        controller: function($scope) {
            $scope.words = [];
            console.log("welcome---> welcome");
            this.sayHello = function() {
                $scope.words.push("hello");
            };
            this.sayHowdy = function() {
                $scope.words.push("howdy");
            };
            this.sayHi = function() {
                $scope.words.push("hi");
            };
        },
        //// directive.pre-link
        link: function(scope, element) {
        	/// 元素都绑定 鼠标移入事件
        	/// 因为，在这个link阶段，才有instance，才可以给这些 directive 增加事件。
            element.bind("mouseenter", function() {
                console.log(scope.words);
            })
        }
    }
});

app.directive("hello", function() {
    return {
        require: "welcome",///继承 welcome 这个 父 directive
       	controller: function($scope){
       		// $scope.words= ['HHHHHHHH'];
       		 console.log("welcome---> hello");
       	},
        link: function(scope, element, attrs, welcomeCtrl) {
        	/// 促进了 directive 之间的相互沟通
            welcomeCtrl.sayHello();
        }
    }
});

app.directive("howdy", function() {
    return {
        require: "welcome",
        link: function(scope, element, attrs, welcomeCtrl) {
            welcomeCtrl.sayHowdy();
        }
    }
});

app.directive("hi", function() {
    return {
        require: "welcome",
        link: function(scope, element, attrs, welcomeCtrl) {
            welcomeCtrl.sayHi();
        }
    }
});