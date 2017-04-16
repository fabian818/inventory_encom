(function () {
    'use strict';

    angular
    .module('inventoryapp')
    .factory('ProductService', ProductService);

    ProductService.$inject = ['$http'];
    function ProductService($http) {
        var service = {};

        service.index = index;
        service.create = create;
        service.destroy = destroy;
        return service;

        function index() {
            return $http.get('/api/products/index');
        }

        function create(product){
            return $http.post('/api/products/create', {
                product: product
            })
        }

        function destroy(product_id){
            return $http.delete('/api/products/destroy', {
                params: {
                    id: product_id
                }
            })
        }
    }

})();