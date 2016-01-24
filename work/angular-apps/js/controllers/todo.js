function ToDoController($scope) {

    $scope.items = [
        {
            title: 'Buy milk'
        },
        {
            title: 'Buy bread'
        },
        {
            title: 'Go to the gym'
        }
    ];

    $scope.add = function() {
        var item = {};
        item.title = $("#app-todo-input").val();
        if (item.title !== '') {
            $("#app-todo-input").val('');
            $scope.items.push(item);
        }
    }

    $scope.complete = function(s) {
        $scope.items.splice(s, 1);
    };

    $scope.clear = function() {
        $scope.items = [];
    };

}

