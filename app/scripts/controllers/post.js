'use strict';

/**
 * @ngdoc function
 * @name dflemstrApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the dflemstrApp
 */
angular.module('dflemstrApp')
  .controller('PostCtrl', function ($scope, $routeParams, posts, page) {
    var id = $routeParams.id;
    var post = posts.find(id);

    $scope.href = '/posts/' + id + '.html';

    page.info = {
      title: post.title || '(Untitled)',
      subtitle: post.subtitle || null,
      author: post.author || null,
      date: post.date || null
    };
  });
