(function(){
  'use strict';
  angular.module('inventoryapp')
  .directive('myCustomer', function() {
    return {
      restrict: 'E',
      scope: false, 
      templateUrl: function(elem, attr){
        return 'directives/form.html';
      },
      scope:{
        ngModel: '='
      },
      replace: true,
      transclude: true,
      link: function (scope, element, attrs) {
        scope.title = attrs.title;
        scope.product = attrs.product;
        console.log(scope);
      }
    };
  });
})();