'use strict';

angular.module('project.stats', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/stats', {
    templateUrl: 'stats/index.html',
    controller: 'StatsCtrl'
  });
}])

.controller('StatsCtrl', ['$scope',  'Data', function($scope, Data) {
   $scope.data = Data.get();
}]);