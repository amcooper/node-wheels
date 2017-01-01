angular
  .module('nodeWheels')
  .service('ItemsService', function( $http ) {
  	var service = {
  	  getAllItems: function() {
  	  	return $http.get('/api/items').then( function( res ) {
  	  		return res.data;
  	  	});
  	  },

  	  getItem: function(id) {
  	  	function itemMatchesParam(item) {
  	  		return item._id === id;
  	  	}

  	  	return service.getAllItems().then(function(items) {
  	  		return items.find(itemMatchesParam);
  	  	});
  	  }
  	};

  	return service;
  });
  