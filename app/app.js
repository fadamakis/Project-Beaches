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

    $routeProvider.when('/beaches', {
        templateUrl: 'components/beaches/beaches.html',
        controller: 'BeachesList'
    });  

    $routeProvider.when('/beach/random', {
        templateUrl: 'components/beaches/beach.html',
        controller: 'BeachRandom'
    });

    $routeProvider.when('/beach/:id', {
        templateUrl: 'components/beaches/beach.html',
        controller: 'BeachPage'
    }); 

    $routeProvider.when('/about', {
        templateUrl: 'components/about/about.html'
    });

}]);