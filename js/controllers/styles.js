myApp.controller('StylesCtrl', function ($scope, $rootScope, $window) {

	$rootScope.bodyClass = 'styles';

	$scope.scrollToTop = function () {
		$scope.selected = 'header';
	};

	$scope.selected = 'header';

	$scope.$watch("selected", function(newValue, oldValue) {
		$(document).ready(function(){
			$('html,body').animate({
	            scrollTop: $(newValue).offset().top - 20
	        })
		})
	});

})