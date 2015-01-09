'use strict'

var app = angular.module('DrakeEquation', []);

app.controller('equationController', ['$scope', function($scope){

  $scope.R = 7;
  $scope.fp = 0.4;
  $scope.n = 2;
  $scope.fl = 0.5;
  $scope.fi = 0.1;
  $scope.fc = 0.1;
  $scope.L = 400;

  $scope.N = function(n){
    n = Math.round(n);
    if (n == 0){
      return "Life should be impossible, we are a fluke.";
    }
    else if (n == 1){
      return "We are alone in our galaxy.";
    }
    else {
      return n + " contactable civilizations in our galaxy.";
    }
  }
  
}]);