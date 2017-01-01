angular
  .module('nodeWheels')
  .component('item', {
  	bindings: { person: '<' },
  	template: '<h4>Item show/edit view</h4>' +
  	          '<div>{{$ctrl.item.text}}</div>'
  });