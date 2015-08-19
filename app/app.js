'use strict';

// Declare app level module which depends on views, and components
angular.module('projectBeaches', [
  'ngRoute',
  'projectBeaches.about',
  'projectBeaches.beachesList',
  'ngMap'
  ]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/beaches'});
}]);