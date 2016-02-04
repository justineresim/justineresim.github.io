myApp.controller('HomeCtrl', function ($scope, $rootScope) {

    $rootScope.bodyClass = 'home';

    $scope.companies = [
        ["chrysler-white.png", "chrysler-black.png"],
        ["asc-white.png", "asc-black.png"],
        ["dodge-white.png", "dodge-black.png"],
        ["res-white.png", "res.png"],
        ["chrome-data-white.png", "chrome-data-black.png"],
        ["infiniti-white.png", "infiniti.png"],
        ["ram-white.png", "ram.png"],
        ["fiat-white.png", "fiat.png"],
        ["cc-white.png", "cc-black.png"],
        ["jeep-white.png", "jeep.png"],
        ["verto-white.png", "verto-black.png"],
        ["gm-white.png", "gm-black.png"],
        ["fhmatch-white.png", "fhmatch-black.png"],
        ["inner-geek-white.png", "inner-geek-black.png"],
    ];

});