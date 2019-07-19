(function () {
    'use strict';

    angular.module('myApp')
        .factory('AuthService', ['$rootScope', '$cookies', '$timeout', '$location', 'ToasterService', AuthService]);

        function AuthService ($rootScope, $cookies, $timeout, $location, ToasterService) {
            return {
                login: login
            };


            function login(isCookies) {

                if(isCookies || $rootScope.user.login === $rootScope.auth.login && $rootScope.user.password === $rootScope.auth.password) {
                    respondSuccess();
                } else {
                    $timeout(function () {
                        ToasterService.getConfiguredToaster('error', 'Error', 'Your Username or password is invalid');
                    }, 10);
                }

                function respondSuccess() {
                    $cookies.put('isAuthorized', true);
                    $rootScope.isAuthorized = true;
                    $timeout(function () {
                        ToasterService.getConfiguredToaster('success', 'Success', 'Successfully logged in');
                    }, 10);
                    $location.path('/home');
                }
            }
        }

}());
