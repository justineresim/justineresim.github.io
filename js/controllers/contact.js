myApp.controller('ContactCtrl', function ($scope, $rootScope) {

	$scope.contactForm=true;

	$rootScope.bodyClass = 'contact';

    $scope.initializeMap = function () {
        var styleArray =[
	        {
	            "featureType": "administrative",
	            "elementType": "labels.text.fill",
	            "stylers": [
	                {
	                    "color": "#444444"
	                }
	            ]
	        },
	        {
	            "featureType": "landscape",
	            "elementType": "all",
	            "stylers": [
	                {
	                    "color": "#f2f2f2"
	                }
	            ]
	        },
	        {
	            "featureType": "poi",
	            "elementType": "all",
	            "stylers": [
	                {
	                    "visibility": "off"
	                }
	            ]
	        },
	        {
	            "featureType": "road",
	            "elementType": "all",
	            "stylers": [
	                {
	                    "saturation": -100
	                },
	                {
	                    "lightness": 45
	                }
	            ]
	        },
	        {
	            "featureType": "road.highway",
	            "elementType": "all",
	            "stylers": [
	                {
	                    "visibility": "simplified"
	                }
	            ]
	        },
	        {
	            "featureType": "road.arterial",
	            "elementType": "labels.icon",
	            "stylers": [
	                {
	                    "visibility": "off"
	                }
	            ]
	        },
	        {
	            "featureType": "transit",
	            "elementType": "all",
	            "stylers": [
	                {
	                    "visibility": "off"
	                }
	            ]
	        },
	        {
	            "featureType": "water",
	            "elementType": "all",
	            "stylers": [
	                {
	                    "color": "#7d325f"
	                },
	                {
	                    "visibility": "on"
	                }
	            ]
	        }
	    ]

	    // Create a map object and specify the DOM element for display.
	    var map = new google.maps.Map(document.getElementById('map'), {
	        center: {lat: 42.9710790, lng: -81.2539920},
	        scrollwheel: false,
	        // Apply the map style array to the map.
	        styles: styleArray,
	        zoom: 12
	    });

	    var iconBase = 'img/pin.png';
	    var marker = new google.maps.Marker({
	        position: {lat: 42.9710790, lng: -81.2539920},
	        map: map,
	        icon: iconBase
	    });

    };
})