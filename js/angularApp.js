//Angular JS 


var myApp = angular.module('angularApp', ['ngRoute', 'ngAnimate', 'ngSanitize']);

$http.get(url,[params])
.success(function(data, status, headers, config){
    // bind your data to scope
})
.error(function(data, status, headers, config) {
    $location.url('/');
});


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

        // route for the contact page
        .when('/contact', {
            templateUrl : 'js/views/contact.html',
            controller  : 'ContactCtrl'
        })

        // route for the gloabl styles page
        .when('/styles', {
            templateUrl : 'js/views/styles.html',
            controller  : 'StylesCtrl'
        })

        .otherwise({ redirectTo: '/' });

});


