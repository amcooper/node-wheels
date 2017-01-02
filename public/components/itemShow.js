angular
  .module('nodeWheels')
  .component('itemShow', {
  	bindings: { itemShow: '<' },
  	template: '  <div id="item-show">' +
							'  <div class="col-sm-4">' +
							'    <p> {{ item.text }} </p>' +
							'    <button value="edit" class="btn btn-primary" ng-click="editFormItem()">Edit</button> <button class="btn btn-primary" value="delete" ng-click="deleteItem(item._id)">Delete</button>' +
							'  </div>' +
							'</div>'

  });


// <!-- EDIT A SINGLE ITEM --> <!-- SUBTHIS -->
// <div id="item-edit" ng-show="edit">
//   <div class="col-sm-4">
//     <!-- <div ng-show="edit"> -->
//       <form>
//         <div class="form-group">
//           <input type="text" class="form-control" value="{{ edit.text }}" ng-model="edit.text">
//         </div>
//         <button class="btn btn-primary" ng-click="editItem()">Edit</button>
//       </form>
//       <button class="btn btn-primary" ng-click="showItem(edit._id)">Cancel</button>
//     <!-- </div> -->
//   </div>
// </div>