'use strict';

// Register `itemDetail` component, along with its associated controller and template
angular.
  module('itemDetail').
  component('itemDetail', {
    templateUrl: 'item-detail/item-detail.template.html',
    controller: ['$routeParams', 'Item',
      function ItemDetailController($routeParams, Item) {
        var self = this;
        self.item = Item.get({itemId: $routeParams.itemId}, function(item) {
          // self.setImage(phone.images[0]);
        });

        // self.setImage = function setImage(imageUrl) {
        //   self.mainImageUrl = imageUrl;
        // };
      }
    ]
  });
