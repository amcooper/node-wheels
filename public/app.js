// 'use strict';

var myApp = angular.module( 'nodeWheels', ['ui.router']);

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

