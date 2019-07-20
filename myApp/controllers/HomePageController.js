(function () {
    'use strict';
    angular.module('myApp')
        .controller('HomePageController', ['$scope', '$location', HomePageController]);

    function HomePageController($scope, $location) {
        var vm = this;

        $scope.back = function ( path ) {
            $location.path( path );
        };
    }
}());

