var angular = require('angular');

var Rx = require('rx');
require('rx-angular');

var app = angular.module('app', ['rx']);


app.controller('MainCtrl', ['$scope', 'rx', function($scope, rx) {
	$scope.$createObservableFunction('onClick')
		  .map(function() {
		  	return 1;
		  })
		  .scan(0, function(a, b) {
		  	return a + b;
		  }).startWith(0).digest($scope, 'clickCounter').subscribe();
}]);