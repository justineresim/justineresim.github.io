myApp.controller('StylesCtrl', function ($scope, $rootScope, $window) {

	$rootScope.bodyClass = 'styles';

	$scope.scrollToTop = function () {
		$scope.selected = '#headings';
	};

	$scope.selected = '#headings';

	$scope.$watch("selected", function(newValue, oldValue) {
		console.log(newValue);
	    $('html,body').animate({
            scrollTop: $(newValue).offset().top - 20
        })
	});

})