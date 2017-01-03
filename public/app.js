// 'use strict';

var myApp = angular.module( 'nodeWheels', ['ui.router', 'ngResource']);

myApp.config( function( $stateProvider ) {
	var states = [
	  { 
	  	name: 'items',
	  	url: '/items', 
	  	component: 'items',
	  	resolve: {
	  		items: function( ItemsService ) {
	  			return ItemsService.getAllItems();
	  		}
	  	} 
	  },

	  {
	  	name: 'items.item',
	  	url: '/{itemId}',
	  	component: 'item',
	  	resolve: {
	  		item: function(items, $stateParams) {
	  			return items.find(function(item) {
	  				return item._id === $stateParams.itemId;
	  			});
	  		}
	  	}
	  }
	  //, { name: 'show', component: 'show' },
	  // { name: 'edit', component: 'edit' }
	];

	states.forEach( function( state ) {
		$stateProvider.state( state );
	});
});

// myApp.run( function( $http, $uiRouter ) {
// 	window[ 'ui-router-visualizer' ].visualizer( $uiRouter );
// 	$http.get('/api/items');
// });

