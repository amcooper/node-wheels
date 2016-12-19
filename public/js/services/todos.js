angular.module('todoService', []) // SUBTHIS

	// super simple service
	// each function returns a promise object 
	.factory('Todos', ['$http',function($http) { // SUBTHIS
		return {
			get : function() {
				return $http.get('/api/todos'); // SUBTHIS
			},
			read : function(id) {
				return $http.get('/api/todos/' + id); // SUBTHIS
			},
			create : function(todoData) { // SUBTHIS
				return $http.post('/api/todos', todoData); // SUBTHIS
			},
			delete : function(id) {
				return $http.delete('/api/todos/' + id); // SUBTHIS
			}
		}
	}]);