(function () {
    'use strict';
    angular.module('myApp')
        .controller('NavController', ['$scope', '$route', NavController])
        
        function NavController($scope, $route) { 
            if ($route.current){
                console.log($route.current.locals.isNavVisible);
                $scope.isNavVisible = $route.current.locals.isNavVisible;
            }
         }
})()