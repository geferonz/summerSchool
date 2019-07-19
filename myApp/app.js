(function () {
    'use stict';
    var app = angular.module('myApp', ['ngRoute', 'ngCookies', 'toaster']);
    
    app.config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('');
        
        $routeProvider
        .when('/', {
            templateUrl : 'views/auth.html',
        })
        .when('/home', {
            templateUrl : 'views/home.html',
        })
        .when('/ticket', {
            templateUrl : 'views/ticketPage.html',
        })
        .when('/ticket/:id', {
            templateUrl : 'views/ticketPage.html',
        })
        .when('/create', {
            templateUrl : 'views/createTicketPage.html',
        })
        .otherwise('/', {
            templateUrl : 'views/auth.html',
        });
    });

    app.factory(function($cookies) {
        $cookies.put('myFavorite', 'oatmeal');
    });

})();