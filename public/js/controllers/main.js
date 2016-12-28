angular.module('itemController', []) // SUBTHIS

	// inject the Item service factory into our controller
	.controller('MainController', ['$scope','$http','Items', function($scope, $http, Items) { // SUBTHIS
		$scope.formData = {};
		$scope.loading = true;
		$scope.show = null;
		$scope.edit = null;
		// $scope.showOneItem = null;

		// GET =====================================================================
		// when landing on the page, get all items and show them
		// use the service to get all the items
		Items.get() // SUBTHIS
			.then(function(response) {
				$scope.items = response.data; // SUBTHIS
				$scope.loading = false;
			});

		// READ ====================================================================
		// Read a single item
		$scope.showItem = function(id) { // SUBTHIS
			$scope.loading = true;
      Items.read(id)
        .then(function(response) {
        	$scope.loading = false;
        	$scope.show = response.data;
        	$scope.edit = null;
        });
		};

		// EDIT ====================================================================
		// Edit a single item
		$scope.editFormItem = function() {
			$scope.edit = $scope.show;
			$scope.show = null;
		};

		$scope.editItem = function() {
			if ($scope.edit.text != undefined) {
				$scope.loading = true;

				Items.update($scope.edit)
				  .then(function(response) {
				  	$scope.formData = {};
				  	$scope.edit = null;
				  	$scope.show = response.data;
				  });

				Items.get()
				  .then(function(response) {
				  	$scope.items = response.data;
				  	$scope.loading = false;
				  });
			}
		};

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createItem = function() { // SUBTHIS

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Items.create($scope.formData) // SUBTHIS

					// if successful creation, call our get function to get all the new items
					.then(function(response) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.items = response.data; // assign our new list of items // SUBTHIS
					});
			}
		};

		// DELETE ==================================================================
		// delete a item after checking it
		$scope.deleteItem = function(id) { // SUBTHIS
			$scope.loading = true;

			Items.delete(id) // SUBTHIS
				// if successful creation, call our get function to get all the new items
				.then(function(response) {
					$scope.loading = false;
					$scope.show = null;
					$scope.items = response.data; // assign our new list of items // SUBTHIS
				});
		};
	}]);