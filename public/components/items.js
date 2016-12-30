angular
  .module('nodeWheels')
  .component('items', {
  	bindings: { items: '<' },
  	template: 'html/items.template.html'
  });