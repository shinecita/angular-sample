'use strict';

// Declare app level module which depends on views, and components
var project = angular.module('project', [
  'ngRoute',
  'ngResource',
  'project.home',
  'project.stats',
  'project.version',
  'projectServices'
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);


