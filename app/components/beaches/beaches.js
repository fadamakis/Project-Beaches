'use strict';

angular.module('projectBeaches.beachesList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
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
}])

.controller('BeachesList', ['Beaches', '$scope', function(Beaches, $scope) {

    var data = Beaches.getBeaches();

    $scope.beaches = chunk(data, 2);

    function chunk(arr, size) {
      var newArr = [];
      for (var i=0; i<arr.length; i+=size) {
        newArr.push(arr.slice(i, i+size));
      }
      return newArr;
    }

}])

.controller('BeachPage', ['Beaches','$scope','$routeParams', function(Beaches, $scope,$routeParams) {

    $scope.beach = Beaches.get($routeParams.id);
    $scope.currentImage = $scope.beach.images[0];

    $scope.setCurrentImage = function(image){
        $scope.currentImage = image;
    }

}])

.controller('BeachRandom', ['Beaches','$scope','$location', function(Beaches, $scope,$location) {
    $scope.beach = Beaches.getRandom();
    $location.path('beach/'+$scope.beach.id);
}]);