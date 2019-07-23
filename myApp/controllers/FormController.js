(function () {
    'use strict';
    angular.module('myApp')
        .controller('FormController', ['$scope', '$location', '$log', '$timeout', '$cookies', '$rootScope', 'AuthService', 'ToasterService', FormController]);

    function FormController($scope, $location, $log, $timeout, $cookies, $rootScope, AuthService, ToasterService) {
        var vm = this;
        
        $rootScope.user = {login:'', password:''};
        $rootScope.auth = {login:'admin', password:'123'};

        $scope.login = function () {
            AuthService.login();
        };
    }
}());