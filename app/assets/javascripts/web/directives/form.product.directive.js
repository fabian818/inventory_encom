(function(){
  'use strict';
  angular.module('inventoryapp')
  .directive('myCustomer', function() {
    return {
      restrict: 'E',
      templateUrl: function(elem, attr){
        console.log(attr.jeje);
        return 'directives/form.html';
      }
    };
  });
})();