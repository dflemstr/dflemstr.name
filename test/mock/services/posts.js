angular.module('dflemstrApp')
  .factory('postsStore', function() {
    return {
      all: {
        "test": {
          "title": "This is a test post",
          "linkText": "a test post",
          "date": "2015-01-04",
          "author": {
            "name": "David Flemström"
          }
        }
      }
    };
  });
