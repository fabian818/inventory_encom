(function () {
    'use strict';

    angular
    .module('myapp')
    .factory('ProductService', ProductService);

    ProductService.$inject = ['$http'];
    function ProductService($http) {
        var service = {};

        service.index = index;
        service.create = create;
        return service;

        function index() {
            return $http.get('/api/products/index');
        }

        function create(product){
            return $http.post('/api/products/create', {
                product: product
            })
        }
    }

})();