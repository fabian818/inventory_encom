(function() {
  angular.module('inventoryapp')
  .controller('LoginCtrl', LoginCtrl);  

  LoginCtrl.$inject = ['$auth', '$state'];
  function LoginCtrl($auth, $state) {
    var vm = this;
    vm.user = {
      email: '',
      password: ''
    }
    vm.login = function(){
      console.log('esto funciona');
      $auth.submitLogin(vm.user)
      .then(function(resp) {
        $state.go('home');
      })
      .catch(function(resp) {
        errors = resp.errors.reduce(function(err1, err2){
          return err1 + '<br>' + err2;
        });
        swal('Error al ingresar', errors, 'error');
      });
    }
  }
})();
