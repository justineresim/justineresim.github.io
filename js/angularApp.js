//Angular JS 


var myApp = angular.module('angularApp', ['ngRoute', 'ngAnimate', 'ngSanitize']);

// configure our routes
myApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'js/views/home.html',
            controller  : 'HomeCtrl'
        })

        // route for the work page
        .when('/work', {
            templateUrl : 'js/views/work.html',
            controller  : 'WorkCtrl'
        })

        // route for the gloabl styles page
        .when('/styles', {
            templateUrl : 'js/views/styles.html',
            controller  : 'StylesCtrl'
        })

        .otherwise({ redirectTo: '/' });
});


