angular.module('myapp', [])
    .controller('BookListController', ['$scope', function($scope){
        $scope.books = [
		    {title: "A", author:'aAc'},
		    {title: "B", author:"bfe"}
	    ];
	
	    var bookList = $scope.bookList;
         $scope.addBook = function(){
             bookList.push({title:'Star', author:"gggg"});
             console.log(JSON.stringify(bookList));
        }
    }]);