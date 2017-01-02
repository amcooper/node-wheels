// 'use strict';

var myApp = angular.module( 'nodeWheels', ['ui.router']);

myApp.config( function( $stateProvider ) {
	var states = [
	  // { 
	  // 	name: 'items',
	  // 	url: '/items', 
	  // 	component: 'items',
	  // 	resolve: {
	  // 		items: function( ItemsService ) {
	  // 			return ItemsService.getAllItems();
	  // 		}
	  // 	} 
	  // },

	  {
	  	name: 'itemShow',
	  	url: '/{itemId}/show',
	  	component: 'itemShow',
	  	resolve: {
	  		item: function(items, $stateParams) {
	  			return items.find(function(item) {
	  				return item._id === $stateParams.itemId;
	  			});
	  		}
	  	}
	  },

	  {
	  	name: 'itemEdit',
	  	url: '/{itemId}/edit',
	  	component: 'itemEdit',
	  	resolve: {
	  		item: function(items, $stateParams) {
	  			return items.find(function(item) {
	  				return item._id === $stateParams.itemId;
	  			});
	  		}
	  	}
	  }

	];

	states.forEach( function( state ) {
		$stateProvider.state( state );
	});
});

// myApp.run( function( $http, $uiRouter ) {
// 	window[ 'ui-router-visualizer' ].visualizer( $uiRouter );
// 	$http.get('/api/items');
// });

