(function () {
    'use strict';
    angular.module('myApp')
        .controller('FormController', ['$scope', '$location', '$log', '$timeout', '$cookies', '$rootScope', 'AuthService', 'ToasterService', FormController]);

    function FormController($scope, $location, $log, $timeout, $cookies, $rootScope, AuthService, ToasterService) {
        var vm = this;
        
        console.log($rootScope);
        $rootScope.user = {login:'', password:''};
        $rootScope.auth = {login:'admin', password:'123'};

        vm.login = function () {
            AuthService.login();
        };
    }
})();