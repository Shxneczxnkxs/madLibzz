var app = angular.module('madLibz');
app.controller('main-controller', function($scope, WordFactory){
$scope.save = function(){
  WordFactory.inputs = {
    box1: $scope.adjective1,
    box2: $scope.adjective2,
    box3: $scope.noun1,
    box4: $scope.noun2,
    box5: $scope.pluralNoun1,
    box6: $scope.game1,
    box7: $scope.pluralNoun2
    box8: $scope.pluralNoun3,
    box9: $scope.verbIng
  };

}


});
