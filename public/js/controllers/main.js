angular.module('todoController', []) // SUBTHIS

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','Todos', function($scope, $http, Todos) { // SUBTHIS
		$scope.formData = {};
		$scope.loading = true;
		$scope.show = null;
		$scope.edit = null;
		// $scope.showOneTodo = null;

		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		Todos.get() // SUBTHIS
			.success(function(data) {
				$scope.todos = data; // SUBTHIS
				$scope.loading = false;
			});

		// READ ====================================================================
		// Read a single todo
		$scope.showTodo = function(id) { // SUBTHIS
			$scope.loading = true;
      Todos.read(id)
        .success(function(data) {
        	$scope.loading = false;
        	$scope.show = data;
        	$scope.edit = null;
        });
		};

		// EDIT ====================================================================
		// Edit a single todo
		$scope.editFormTodo = function() {
			$scope.edit = $scope.show;
			$scope.show = null;
		};

		$scope.editTodo = function() {
			console.log('\n***********\n* $scope.edit.text: ' + $scope.edit.text);
			// console.log('* todo.text: ' + todo.text + '\n*********');
			if ($scope.edit.text != undefined) {
				$scope.loading = true;

				Todos.update($scope.edit)
				  .success(function(data) {
				  	$scope.loading = false;
				  	$scope.formData = {};
				  	$scope.edit = null;
				  	$scope.show = data;
				  });
			}
		};

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createTodo = function() { // SUBTHIS

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Todos.create($scope.formData) // SUBTHIS

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.todos = data; // assign our new list of todos // SUBTHIS
					});
			}
		};

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteTodo = function(id) { // SUBTHIS
			$scope.loading = true;

			Todos.delete(id) // SUBTHIS
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.show = null;
					$scope.todos = data; // assign our new list of todos // SUBTHIS
				});
		};
	}]);