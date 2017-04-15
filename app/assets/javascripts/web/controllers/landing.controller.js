(function() {
  angular.module('myapp')
  .controller('LandingCtrl', LandingCtrl);  

  LandingCtrl.$inject = ['$auth'];
  function LandingCtrl($auth) {
    var vm = this;
    vm.register = function(){
      $auth.submitRegistration({
        email:                 'nexus@wsnpro.com',
        password:              '123123123',
        password_confirmation: '123123123',
        favorite_color:        'red'
      }).then(function(res){
        console.log(res);
      });
    }
  }
})();
