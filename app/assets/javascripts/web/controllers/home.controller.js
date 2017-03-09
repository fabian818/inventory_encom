(function() {
  angular.module('app')
  .controller('HomeCtrl', HomeCtrl);  

  HomeCtrl.$inject = ['ProductService'];
  function HomeCtrl(ProductService) {
    var vm = this;
    vm.new_product = {
      'name': null,
      'cost': null,
      'price': null,
      'quantity': null
    }
    vm.products = [];

    ProductService.index().then(function(res){
      vm.products = res.data.products;
    })

    vm.create = function(){
      ProductService.create(vm.new_product).then(function(res){
        console.log(res.data);
        if (res.data.product !== null) {
          vm.products.push(res.data.product);
          resetInitialProduct();
        }
      })
    }

    function resetInitialProduct(){
      vm.new_product = {
        'name': null,
        'cost': null,
        'price': null,
        'quantity': null
      }
    }
  }
})();
