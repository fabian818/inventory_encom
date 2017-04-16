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
        swal('¡Todo listo!', 'Registrado correctamente', 'success');
      })
      .catch(function(resp) {
        console.log(resp)
        errors = resp.data.errors.full_messages.reduce(function(err1, err2){
          return err1 + '<br>' + err2;
        });
        swal('Error al ingresar', errors, 'error');
      });
    }
  }
})();
