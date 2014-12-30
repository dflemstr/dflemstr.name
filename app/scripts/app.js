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
    'ngRoute'
  ])
  .config(function ($locationProvider, $routeProvider) {
    $locationProvider
      .html5Mode(true)
      .hashPrefix('!');

    $routeProvider
      .when('/', {
        title: 'dflemstr',
        subtitle: '',
        big: true,
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/this', {
        title: 'Making websites',
        subtitle: 'How hard can it be?',
        templateUrl: 'views/this.html'
      })
      .when('/skills', {
        title: 'Skills',
        subtitle: 'if you can call it that',
        templateUrl: 'views/skills.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
