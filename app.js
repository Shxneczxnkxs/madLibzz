var app = angular.module('madLibz', ['ngRoute']);
  app.config(function($routeProvider, $locationProvider){
    $routeProvider.when('/', {
      templateUrl: 'userinput.html',
      controller: 'main-controller'
    })
    .when('/display', {
      templateUrl: 'display.html',
      controller: 'display-controller'
    })
    .otherwise({
    template: `Page Not Found`
    })
  });
