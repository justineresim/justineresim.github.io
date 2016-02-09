myApp.controller('ContactCtrl', function ($scope, $rootScope) {

	$rootScope.bodyClass = 'contact';

	$scope.contactForm=true;
	$scope.quoteForm=false;

	$scope.messageSending=false;
	$scope.messageSent=false;
	$scope.messageError=false;

	$scope.qform;

	$scope.reloadForm = function() {
	    $scope.contactForm=true;
		$scope.quoteForm=false;
		$scope.messageSending=false;
		$scope.messageSent=false;
		$scope.messageError=false;
	};
    
    $scope.sendQuoteEmail = function() {
		$scope.sendingEmail();
		emailjs.send("gmail","requestAQuote",{fname: $scope.qform.fname, lname: $scope.qform.lname, email: $scope.qform.email, message: $scope.qform.message, projectType: $scope.qform.projectType, budget: $scope.qform.budget})
		.then(function(response) {
			console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
			$scope.emailSent();
		}, function(err) {
			console.log("FAILED. error=", err);
			$scope.emailError();
		});
	}

    $scope.sendEmail = function() {
		$scope.sendingEmail();
		emailjs.send("gmail","generalContactForm",{fname: $scope.form.fname, lname: $scope.form.lname, email: $scope.form.email, message: $scope.form.message})
		.then(function(response) {
			console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
			$scope.$apply(function() {
			 	$scope.emailSent();
			})
		}, function(err) {
			console.log("FAILED. error=", err);
			$scope.$apply(function() {
			 	$scope.emailError();
			})
		});
    }

    $scope.sendingEmail = function() {
    	$scope.messageSending=true;
    	$scope.contactForm=false;
		$scope.quoteForm=false;
    }

    $scope.emailSent = function() {
    	$scope.messageSent=true;
    	$scope.messageSending=false;
    	$scope.contactForm=false;
		$scope.quoteForm=false;
    }

    $scope.emailError = function() {
    	$scope.messageSending=false;
    	$scope.messageSent=false;
    	$scope.messageError=true;
    	$scope.contactForm=false;
		$scope.quoteForm=false;
    }

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
	    // var map = new google.maps.Map(document.getElementById('map'), {
	    //     center: {lat: 42.9710790, lng: -81.2539920},
	    //     scrollwheel: false,
	    //     draggable: false,
	    //     styles: styleArray,
	    //     zoom: 13
	    // });

	    // var iconBase = 'img/pin.png';

	    // var marker = new google.maps.Marker({
	    //     position: {lat: 42.9710790, lng: -81.2539920},
	    //     map: map,
	    //     icon: iconBase
	    // });

    };
})