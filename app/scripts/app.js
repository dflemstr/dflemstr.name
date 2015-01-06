'use strict';

/**
 * @ngdoc overview
 * @name dflemstrApp
 * @description
 * # dflemstrApp
 *
 * Main module of the application.
 */
angular
  .module('dflemstrApp', [
    'ngRoute',
    'angularMoment'
  ])
  .config(function ($locationProvider, $routeProvider) {
    $locationProvider
      .html5Mode(true)
      .hashPrefix('!');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/post/:id', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
