'use strict';

angular.
  module('core.item').
  factory('Item', ['$resource',
    function($resource) {
      return $resource('/api/:itemId', {}, { // This might be wrong.
        query: {
          method: 'GET',
          params: {itemId: 'items'},
          isArray: true
        }
      });
    }
  ]);
