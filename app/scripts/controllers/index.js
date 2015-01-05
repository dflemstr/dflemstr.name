'use strict';

/**
 * @ngdoc function
 * @name dflemstrApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the dflemstrApp
 */
angular.module('dflemstrApp')
  .controller('IndexCtrl', function ($scope, $window, page) {
    $scope.page = page;

    var previousTop = 0;
    angular.element($window).bind('scroll', function () {
      var currentTop = this.pageYOffset;

      if (currentTop < previousTop) {
        // Scrolling up
        if (currentTop > 0 && $scope.isFixed) {
          $scope.isVisible = true;
        } else {
          $scope.isVisible = false;
          $scope.isFixed = false;
        }
      } else {
        // Scrolling down
        $scope.isVisible = false;
        if (currentTop > 60) {
          $scope.isFixed = true;
        }
      }

      previousTop = currentTop;
      $scope.$digest();
    });
  });
