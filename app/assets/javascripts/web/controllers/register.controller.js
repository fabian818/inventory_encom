(function() {
  angular.module('inventoryapp')
  .controller('RegisterCtrl', RegisterCtrl);  

  RegisterCtrl.$inject = ['$auth', '$state'];
  function RegisterCtrl($auth, $state) {
    var vm = this;
    vm.user = {
      email: '',
      password: '',
      password_confirmation: ''
    }
    vm.register = function(){
      console.log('esto funciona');
      $auth.submitRegistration(vm.user)
      .then(function(resp) {
        console.log('registrado correctamente');
        console.log(resp);
      })
      .catch(function(resp) {
        console.log('error en el registro');
        console.log(resp);
      });
    }
  }
})();
