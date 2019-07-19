(function () {
    'use strict';
    angular.module('myApp')
        .controller('MainController', ['$scope', '$location', '$rootScope', '$cookies', '$timeout', 'ToasterService', 'AuthService', MainController]);

    function MainController($scope, $location, $rootScope, $cookies, $timeout, ToasterService, AuthService) {
        var vm = this;

        if ($cookies.get('isAuthorized')){
            //AuthService.login(true);
        }

        vm.logout = function () {
            $cookies.remove('isAuthorized');
            $rootScope.isAuthorized = false;
            $timeout(function () {
                ToasterService.getConfiguredToaster('success', 'Success', 'Successfully logged out');}, 10);
            $location.path('/');
        };

    }
})();