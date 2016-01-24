
function CalculatorController($scope) {

    $scope.buttonClick = function(value) {
        value = value.toString();
        if ($scope.total) {
            $scope.total += value;
        }else{
            $scope.total = value;
        }
    };

    $scope.evaluate = function() {
        $scope.total = eval($scope.total);
    };

    $scope.clear = function() {
        console.log('asd');
        $scope.total = '';
    };
    
}