'use strict';

/**
 * @ngdoc service
 * @name dflemstrApp.posts
 * @description
 * # posts
 * Service in the dflemstrApp.
 */
angular.module('dflemstrApp')
  .service('posts', function (postsStore) {
    this.all = postsStore.all;
    this.find = function (id) {
      return postsStore.all[id];
    };
  });
