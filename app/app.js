'use strict';

// Declare app level module which depends on views, and components
angular.module('projectBeaches', [
  'ngRoute',
  'projectBeaches.view1',
  'projectBeaches.view2',
  'projectBeaches.about',
  'projectBeaches.beachesList',
  'projectBeaches.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/beaches'});
}]);