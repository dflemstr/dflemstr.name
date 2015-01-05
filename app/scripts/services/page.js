'use strict';

/**
 * @ngdoc service
 * @name dflemstrApp.page
 * @description
 * # page
 * Service in the dflemstrApp.
 */
angular.module('dflemstrApp')
  .service('page', function () {
    this.info = {
      title: null,
      subtitle: null,
      author: null,
      date: null
    };
  });
