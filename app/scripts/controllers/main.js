'use strict';

/**
 * @ngdoc function
 * @name dflemstrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * The controller for the main page
 */
angular.module('dflemstrApp')
  .controller('MainCtrl', function ($scope, posts, page) {
    page.info = {
      title: 'archetypal chaos',
      subtitle: 'ramblings about technology and other things',
      big: true
    };

    $scope.posts = posts;
  });
