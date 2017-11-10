var app = angular.module('madLibz');
app.controller('display-controller', function($scope, WordFactory){
  $scope.inputs = WordFactory.inputs;
});
