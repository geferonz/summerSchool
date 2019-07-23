(function () {
    'use stict';
    var app = angular.module('myApp', [
        'ngRoute', 
        'ngCookies', 
        'toaster',]);
        app.config([
            '$logProvider',
            '$routeProvider',
            '$locationProvider',
            '$httpProvider',
            function ($logProvider, $routeProvider, $locationProvider, $httpProvider) {
                $locationProvider.html5Mode(true);
                $locationProvider.hashPrefix('');
                
                $routeProvider
                .when('/', {
                    templateUrl : './views/auth.html',
                    controller: 'FormController'
                })
                .when('/home', {
                    templateUrl : './views/home.html',
                    controller: 'TicketSelectController'
                })
                .when('/ticket', {
                    templateUrl : './views/ticketPage.html',
                    controller: 'TicketPageController'
                })
                .when('/ticket/:id', {
                    templateUrl : './views/ticketPage.html',
                    controller: 'TicketPageController'
                })
                .when('/create', {
                    templateUrl : './views/createTicketPage.html',
                    controller: 'TicketCreateController'
                })
                .otherwise('/', {
                    templateUrl : './views/auth.html',
                });
            }
         ]);
    

    app.factory(function($cookies) {
        $cookies.put('myFavorite', 'oatmeal');
    });

})();