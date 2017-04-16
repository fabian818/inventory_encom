(function() {
  angular.module('inventoryapp')
  .controller('HomeCtrl', HomeCtrl);  

  HomeCtrl.$inject = ['ProductService', '$timeout'];
  function HomeCtrl(ProductService, $timeout) {
    var vm = this;
    vm.new_product = {
      'name': null,
      'cost': null,
      'price': null,
      'quantity': null,
      'category_id': null
    }
    vm.products = [];
    vm.categories = [];

    ProductService.index().then(function(res){
      vm.products = res.data.products;
      vm.categories = res.data.categories;
      console.log(vm.categories);
      vm.new_product.category_id = vm.categories[0].id
    })

    vm.create = function(){
      ProductService.create(vm.new_product).then(function(res){
        console.log(res.data);
        if (res.data.product !== null) {
          vm.products.push(res.data.product);
          resetInitialProduct();
          swal({
            title: 'Agregado correctamente',
            type: 'success',
            text: 'Se cerrará en 2 segundos...',
            timer: 2000
          }).then(
          function () {},
          function (dismiss) {
            if (dismiss === 'timer') {
              console.log('I was closed by the timer')
            }
          }
          )
        }
      }, function(err){
        console.log(err);
        errors = err.data.errors.reduce(function(err1, err2){
          return err1 + '<br>' + err2;
        });
        console.log(errors);
        swal('Error al agregar producto', errors, 'error');
      })
    }
    vm.destroy = function(product_id){
      swal({
        title: '¿Estás seguro(a)?',
        text: "Una vez borrado no se puede recuperar",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrar', 
        cancelButtonText: 'Cancelar'
      }).then(function () {
        ProductService.destroy(product_id).then(function(res){
          console.log(res);
          if (res.data.destroyed === true) {            
            swal(
              '¡Borrado!',
              'El producto ha sido borrado con éxito.',
              'success'
              )
          }
        })

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
