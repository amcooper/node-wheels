angular
  .module('nodeWheels')
  .component('items', {
  	bindings: { items: '<' },
  	template: '  <div id="item-list">' +
			'		<div class="col-sm-4">' +
			'			<!-- LOOP OVER THE ITEMS IN $scope.items -->' +
			'			<div ng-repeat="item in $ctrl.items">  <!-- SUBTHIS -->' +
			'				<a ui-sref-active="active" ui-sref="items.item({ itemId: item._id })"> {{ item.text }} </a> <!-- SUBTHIS -->' +
			'			</div>' +
			'			<p class="text-center" ng-show="loading">' +
			'				<span class="fa fa-spinner fa-spin fa-3x"></span>' +
			'			</p>' +
			'		</div>' +
			'   <ui-view></ui-view>' +
			'	</div>'
  });