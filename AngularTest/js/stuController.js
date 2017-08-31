var app = angular.module('myapp', []);

app.controller('StudentController', function($scope){
	$scope.student = {
		firstName: "Jon",
		lastName:"Snoe",

		fullName : function(){
			var stuObject = $scope.student;
			return stuObject.firstName + " " + stuObject.lastName;
		}
	}
});

app.controller('MyController', function($scope){
	$scope.output=  {
		eqq : function(){
			return $scope === $rootScope;
		}
	};
});