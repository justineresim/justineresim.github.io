
/*
This directive allows us to pass a function in on an enter key to do what we want.
*/

var app = angular.module("angularApps", []);

app.directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if (event.which === 13) {
                scope.$apply(function() {
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});

app.filter('searchFor', function() {

    // All filters must return a function. The first parameter
    // is the data that is to be filtered, and the second is an
    // argument that may be passed with a colon (searchFor:searchString)

    return function(arr, searchString) {

        if (!searchString || searchString === '') {
            return arr;
        }

        var result = [];

        searchString = searchString.toLowerCase();

        // Using the forEach helper method to loop through the array
        angular.forEach(arr, function(item) {

        if (item.firstName.toLowerCase().indexOf(searchString) !== -1 || item.lastName.toLowerCase().indexOf(searchString) !== -1 || item.email.toLowerCase().indexOf(searchString) !== -1 || item.number.toLowerCase().indexOf(searchString) !== -1) {
                result.push(item);
            }

        });

        return result;
    };

});