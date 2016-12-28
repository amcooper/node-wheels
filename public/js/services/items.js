angular.module('itemService', []) // SUBTHIS

	// super simple service
	// each function returns a promise object 
	.factory('Items', ['$http',function($http) { // SUBTHIS
		return {
			get : function() {
				return $http.get('/api/items'); // SUBTHIS
			},
			read : function(id) {
				return $http.get('/api/items/' + id); // SUBTHIS
			},
			update : function(itemData) {
				return $http.put('/api/items/', itemData); // SUBTHIS				
			},
			create : function(itemData) { // SUBTHIS
				return $http.post('/api/items', itemData); // SUBTHIS
			},
			delete : function(id) {
				return $http.delete('/api/items/' + id); // SUBTHIS
			}
		};
	}]);