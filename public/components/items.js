angular
  .module('nodeWheels')
  .component('items', {
  	bindings: { items: '<' },
  	template: ' <div class="col-sm-4">' + 
  	  ' <div id="item-form">  <!-- SUBTHIS -->' +
			' 	<div class="text-center">' +
			' 		<form>' +
			' 			<div class="form-group">' +

			' 				<!-- BIND THIS VALUE TO formData.text IN ANGULAR -->' +
			' 				<input type="text" class="form-control input-sm text-center" placeholder="I want to buy a puppy that will love me forever" ng-model="formData.text">  <!-- SUBTHIS -->' +
			' 			</div>' +

			' 			<!-- createItem() WILL CREATE NEW ITEMS -->' +
			' 			<button type="submit" class="btn btn-primary btn-sm" ng-click="createItem()">Add</button>  <!-- SUBTHIS -->' +
			' 		</form>' +
			' 	</div>' +
			' </div>' +
	  	'  <div id="item-list">' +
			'			<div ng-repeat="item in $ctrl.items">  <!-- SUBTHIS -->' +
			'				<a ui-sref-active="active" ui-sref="items.item({ itemId: item._id })"> {{ item.text }} </a> <!-- SUBTHIS -->' +
			'			</div>' +
			'			<p class="text-center" ng-show="loading">' +
			'				<span class="fa fa-spinner fa-spin fa-3x"></span>' +
			'			</p>' +
			'		</div>' +
			'</div>' +
			'   <ui-view></ui-view>'
  });