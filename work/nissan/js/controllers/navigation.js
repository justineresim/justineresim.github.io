//Main navigation menu controller

function NavigationController($scope) {

    $scope.fullNavigation = true;   //begin with full navigation
    $scope.configurationList = false;    //don't show secondary list initially
    $scope.IPSheetsList = false;      //don't show secondary list initially

    $scope.$watch("fullNavigation", function(newValue, oldValue) {           //when we toggle the slim/full navigation
        if ($scope.fullNavigation === false) {
            $('.app-navigation-container').animate({width: '76px'});
            $('.app-body-container').animate({paddingLeft: '76px'});
        }else{
            $('.app-navigation-container').css({width: '259px'});
            $('.app-body-container').css({paddingLeft: '259px'});
        }
    });

    if($( window ).width() <= 768){     // if we load the page on smaller screens show the slim navigation
        $scope.configurationList = false;
        $scope.IPSheetsList = false;
        $scope.fullNavigation = false;
    }

    $scope.$watch("selectedSecond || selected", function(newValue, oldValue) {           //when we toggle the slim/full navigation
        $('html,body').animate({
            scrollTop: 0
        });
    });

}