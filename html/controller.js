
var app=angular.module('myapp',[]);
app.controller('simpController',function($scope,$http){
   $http.get('/api/employees').success(function(data){
   $scope.customer=data;
    }).error(function(err){
	console.log(err);
	$scope.customer="Error "+err;
	})
});
