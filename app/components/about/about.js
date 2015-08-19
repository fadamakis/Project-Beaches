'use strict';

angular.module('projectBeaches.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'components/about/about.html'
  });
}]);