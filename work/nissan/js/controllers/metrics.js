//Main metrics menu controller

myApp.config(function (datepickerPopupConfig) {
    datepickerPopupConfig.showButtonBar = false;
});

myApp.controller('MetricsController', function ($scope) {

    $scope.events = [
        {
            desc: 'Model Set Update',
            id: '001'
        },
        {
            desc: 'Component Stub Update',
            id: '002'
        },
        {
            desc: 'Price Sets Update',
            id: '003'
        },
        {
            desc: 'Model Price Sets Update',
            id: '004'
        },
        {
            desc: 'Exchange Rate Update',
            id: '005'
        }
    ];

    $scope.source = [
        {
            desc: 'Configuration Module',
            id: '00a'
        },
        {
            desc: 'Component Pricing Module',
            id: '00b'
        },
        {
            desc: 'Price Set DB',
            id: '00c'
        }
    ];

    $scope.filters = [
        {
            desc: 'Model',
            id: '00a1',
                types: [
                    {
                        desc: 'V37 Q50',
                        id: '00ab'
                    },
                    {
                        desc: 'V37 Q67',
                        id: '00ac'
                    },
                    {
                        desc: 'V56 Q50',
                        id: '00ad'
                    },
                    {
                        desc: 'V66 Q50',
                        id: '00ae'
                    }

                ]
        },
        {
            desc: 'Model Year',
            id: '00a2',
            types: [
                {
                    desc: 'MY14',
                    id: '00abc'
                },
                {
                    desc: 'MY17',
                    id: '00abd'
                },
                {
                    desc: 'MY12',
                    id: '00abe'
                }

            ]
        },
        {
            desc: 'Country',
            id: '00a3',
            types: [
                {
                    desc: 'Canada',
                    id: '00abcd'
                },
                {
                    desc: 'USA',
                    id: '00acd'
                },
                {
                    desc: 'Belgium',
                    id: '00ade'
                },
                {
                    desc: 'China',
                    id: '00aef'
                }

            ]
        },
        {
            desc: 'Price Variance',
            id: '00a1',
            types: [
                {
                    desc: '10%',
                    id: '00abb'
                },
                {
                    desc: '20%',
                    id: '00acc'
                },
                {
                    desc: '30%',
                    id: '00add'
                },
                {
                    desc: '40%',
                    id: '00aee'
                }

            ]
        }
    ];

    $scope.totalItems = 64;
    $scope.currentPage = 1;
    $scope.perPage = 10;
    $scope.numPages = Math.ceil($scope.totalItems / $scope.perPage);

    //date range functionality

    $scope.today = function() {
        $scope.dt = new Date();
        $scope.dt2 = new Date();
    };
    $scope.today();


    // Disable weekend selection
    $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.open = function($event, id) {
        $event.preventDefault();
        $event.stopPropagation();
        if(id === 'dateFrom'){
            $scope.dateFrom = true;
        }else{
            $scope.dateTo = true;
        }
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        showWeeks: false
    };

});