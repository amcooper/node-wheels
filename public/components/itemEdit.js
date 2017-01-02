angular
  .module('nodeWheels')
  .component('itemEdit', {
  	bindings: { itemEdit: '<' },
  	template: ' <div id="item-edit">' +
							'   <div class="col-sm-4">' +
							'       <form>' +
							'         <div class="form-group">' +
							'           <input type="text" class="form-control" value="{{ edit.text }}" ng-model="edit.text">' +
							'         </div>' +
							'         <button class="btn btn-primary" ng-click="editItem()">Edit</button>' +
							'       </form>' +
							'       <button class="btn btn-primary" ng-click="showItem(edit._id)">Cancel</button>' +
							'   </div>' +
							' </div>'
  });


