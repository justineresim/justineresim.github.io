//Angular JS 


var myApp = angular.module('angularApp', ['ngRoute', 'ngAnimate', 'ngSanitize']);

// configure our routes
myApp.config(["$routeProvider", function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'js/views/home.html',
            controller  : 'HomeCtrl'
        })

        // route for the work page
        .when('/work', {
            templateUrl : 'js/views/work.html',
            controller  : 'WorkCtrl'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'js/views/contact.html',
            controller  : 'ContactCtrl'
        })

        // route for the gloabl styles page
        .when('/styles', {
            templateUrl : 'js/views/styles.html',
            controller  : 'StylesCtrl'
        })

        .otherwise({ redirectTo: '/' });

}]);



myApp.controller('HomeCtrl', ["$scope", "$rootScope", function ($scope, $rootScope) {

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

}]);
myApp.controller('WorkCtrl', ["$scope", "$rootScope", function ($scope, $rootScope) {

	$rootScope.bodyClass = 'work';

    $scope.fancyBox = function(par) {
        var className = '.fancy-box-'+par;
        openFancyBox(className);
    }

	$scope.work = [
		{
			title: 'Nissan Infiniti Pricing Tool',
            text: '<p>Prototype and global style guide.</p><p>I built this prototype and style guide for Autodata Solutions as a starting point for the web application.</p>',
            image: 'img/work/ni1.png',
            prototype: 'nissan',
            count: 10,
            images: [
             	{
                    desc: '<a target="_blank" href="work/nissan/layout.html">View Prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/ni1.png',
                    count: 10
                },
                {
                    desc: '<a target="_blank" href="work/nissan/layout.html">View Prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/ni2.png',
                    count: 10
                },
                {
                    desc: '<a target="_blank" href="work/nissan/metrics.html">View Prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/ni3.png',
                    count: 10
                },
                {
                    desc: '<a target="_blank" href="work/nissan/global.html">View Prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/ni4.png',
                    count: 10
                },
                {
                    desc: '<a target="_blank" href="work/nissan/index.html">View Prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/ni5.png',
                    count: 10
                },
                {
                    desc: '<a target="_blank" href="work/nissan/index.html">View Prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/ni6.png',
                    count: 10
                }

            ]
        },
		{
			title: 'ZTR',
            text: '<p>ZTR Prototype.</p><p>I built this prototype for ResIM created for a redesign proposal of their web application.</p>',
            image: 'img/work/ztr1.png',
            prototype: 'ztr',
            count: 9,
            images: [
             	{
                    desc: '<a target="_blank" href="work/ztr/index.html">View Prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/ztr1.png',
                    count: 9
                },
                {
                    desc: '<a target="_blank" href="work/ztr/index.html">View Prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/ztr2.png',
                    count: 9
                },
                {
                    desc: '<a target="_blank" href="work/ztr/index.html">View Prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/ztr3.png',
                    count: 9
                },
                {
                    desc: '<a target="_blank" href="work/ztr/index.html">View Prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/ztr4.png',
                    count: 9
                },
                {
                    desc: '<a target="_blank" href="work/ztr/index.html">View Prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/ztr5.png',
                    count: 9
                },
                {
                    desc: '<a target="_blank" href="work/ztr/global.html">View Prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/ztr6.png',
                    count: 9
                },
                {
                    desc: '<a target="_blank" href="work/ztr/global.html">View Prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/ztr7.png',
                    count: 9
                },
                {
                    desc: '<a target="_blank" href="work/ztr/global.html">View Prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/ztr8.png',
                    count: 9
                }
            ]
        },
		{
			title: 'Huron County',
            text: '<p>Huron County Prototype.</p><p>I built this prototype for ResIM created for a redesign proposal.</p>',
            image: 'img/work/hc3.png',
            prototype: 'huron-county',
            count: 8,
            images: [
             	{
                    desc: '<a target="_blank" href="work/huron-county/index.html">View Prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/hc3.png',
                    count: 8
                },
                {
                    desc: '<a target="_blank" href="work/huron-county/growing-together.html">View Prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/hc4.png',
                    count: 8
                },
                {
                    desc: '<a target="_blank" href="work/huron-county/childrens-services.html">View Prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/hc5.png',
                    count: 8
                },
                {
                    desc: '<a target="_blank" href="work/huron-county/events.html">View Prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/hc6.png',
                    count: 8
                },
                {
                    desc: '<a target="_blank" href="work/huron-county/index.html">View Prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/hc1.png',
                    count: 8
                },
                {
                    desc: '<a target="_blank" href="work/huron-county/events.html">View Prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/hc2.png',
                    count: 8
                },
                {
                    desc: '<a target="_blank" href="work/huron-county/global.html">View Prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/hc7.png',
                    count: 8
                },
            	 {
                    desc: '<a target="_blank" href="work/huron-county/global.html">View Prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/hc8.png',
                    count: 8
                },

            ]
        },
		{
			title: 'Confederation College',
            text: '<p>Confederation College Prototype created as a starting point for the new site.</p><p>I built this prototype for ResIM as a starting point for the new website.</p>',
            image: 'img/work/confed1.png',
            prototype: 'confederation',
            count: 7,
            images: [
             	{
                    desc: '<a target="_blank" href="work/confederation/index.html">View Prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/confed1.png',
                    count: 7
                },
                {
                    desc: '<a target="_blank" href="work/confederation/programs.html">View Prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/confed2.png',
                    count: 7
                },
				{
                    desc: '<a target="_blank" href="work/confederation/index.html">View Prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/confed3.png',
                    count: 7
                },
				{
                    desc: '<a target="_blank" href="work/confederation/programs.html">View Prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/confed4.png',
                    count: 7
                },
				{
                    desc: '<a target="_blank" href="work/confederation/global.html">View Prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/confed5.png',
                    count: 7
                }
            ]
        },
		{
			title: 'Golf Canada',
            text: '<p>Canadian Golf Course History responsive website featuring an interactive map displaying Canadian golf courses throughout history.</p><p>This custom site was built by the team at ResIM, including myself.</p>',
            image: 'img/work/gc1.png',
            count: 6,
            images: [
             	{
                    desc: 'Use the interactive map of Canada to see how golf courses have grown, moved or closed though time.',
                    src: 'img/work/gc1.png',
                    count: 6
                },
                {
                    desc: 'Learn about how to use the site through the onboarding process.',
                    src: 'img/work/gc2.png',
                    count: 6
                },
                {
                    desc: 'Check out golf courses across Canada at different points in time.',
                    src: 'img/work/gc3.png',
                    count: 6
                },
                {
                    desc: 'Find out more details on each course.',
                    src: 'img/work/gc4.png',
                    count: 6
                },
                {
                    desc: 'Mobile view of course details.',
                    src: 'img/work/gc5.png',
                    count: 6
                },
                {
                    desc: 'Interactive map mobile view.',
                    src: 'img/work/gc6.png',
                    count: 6
                },
                {
                    desc: 'List view of Canadian courses at specific points in time.',
                    src: 'img/work/gc7.png',
                    count: 6
                }
            ]
        },
	   {
            title: 'Help Me',
            text: '<p>Chrysler\'s Help Me web application.</p><p>I built this custom web application as Lead UI Developer for Autodata Solutions.</p>',
            image: 'img/work/hm1.png',
            count: 5,
            images: [
                {
                    desc: 'Help Me',
                    src: 'img/work/hm1.png',
                    count: 5
                },
                   {
                    desc: 'Help Me',
                    src: 'img/work/hm2.png',
                    count: 5
                },
                  {
                    desc: 'Help Me',
                    src: 'img/work/hm3.png',
                    count: 5
                },
                  {
                    desc: 'Help Me',
                    src: 'img/work/hm4.png',
                    count: 5
                },
                  {
                    desc: 'Help Me',
                    src: 'img/work/hm5.png',
                    count: 5
                },
                  {
                    desc: 'Help Me',
                    src: 'img/work/hm6.png',
                    count: 5
                },
                  {
                    desc: 'Help Me',
                    src: 'img/work/hm7.png',
                    count: 5
                },
                  {
                    desc: 'Help Me',
                    src: 'img/work/hm8.png',
                    count: 5
                },
                  {
                    desc: 'Help Me',
                    src: 'img/work/hm9.png',
                    count: 5
                },
                  {
                    desc: 'Help Me',
                    src: 'img/work/hm10.png',
                    count: 5
                },
                  {
                    desc: 'Help Me',
                    src: 'img/work/hm11.png',
                    count: 5
                },

            ]
        },
	   {
            title: 'Verto360',
            text: '<p>Verto360 is a company from London Ontario that designs, manages, builds and furnishes commercial building interiors.</p><p>The team at ResIM, including myself, created this redesign of their website using Wordpress.<p>',
            image: 'img/work/verto1.png',
            url: 'http://verto360.com/',
            count: 3,
            images: [
                {
                    desc: '<a target="_blank" href="http://verto360.com/">View Website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/verto1.png',
                    count: 3
                },
                 {
                    desc: '<a target="_blank" href="http://verto360.com/case-study/south-london-community-centre/">View Website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/verto2.png',
                    count: 3
                },
                 {
                    desc: '<a target="_blank" href="http://verto360.com/case-study/">View Website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/verto3.png',
                    count: 3
                },
                 {
                    desc: '<a target="_blank" href="http://verto360.com">View Website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/verto4.png',
                    count: 3
                },
                {
                    desc: '<a target="_blank" href="http://verto360.com/contact/">View Website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/verto5.png',
                    count: 3
                },
                 {
                    desc: '<a target="_blank" href="http://verto360.com/about-verto360/">View Website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/verto6.png',
                    count: 3
                }
            ]
        },
        {
            title: 'Fitness Health Match',
            text: '<p>FHMatch is a social networking platform that connects people with a broad range of local fitness, health, and wellness professionals.<p>',
            image: 'img/work/fhm5.png',
            url: 'http://www.fhmatch.com/',
            count: 1,
            images: [
                {
                    desc: 'Fitness Health Match Homepage<br><a target="_blank" href="http://www.fhmatch.com/">View Website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/fhm1.png',
                    count: 1
                },
                 {
                    desc: '<a target="_blank" href="http://www.fhmatch.com/register">View Website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/fhm2.png',
                    count: 1
                },
                 {
                    desc: 'Browse fitness and health related articles.<br><a target="_blank" href="http://www.fhmatch.com/articles">View Website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/fhm3.png',
                    count: 1
                },
                 {
                    desc: 'Easily find health and fitness professional in your area.<br><a target="_blank" href="http://www.fhmatch.com/">View Website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/fhm4.png',
                    count: 1
                },
                 {
                    desc: 'Connect with professional to book appointments.<br><a target="_blank" href="http://www.fhmatch.com/">View Website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/fhm5.png',
                    count: 1
                }
            ]
        },
       {
            title: 'Redeemer University',
            text: '<p>Redeemer University College is an undergraduate university known for providing a high-quality liberal arts and sciences university education.</p>',
            image: 'img/work/redeemer1.png',
            url: 'https://www.redeemer.ca/',
            count: 2,
            images: [
                {
                    desc: 'Redeemer University Homepage<br><a target="_blank" href="https://www.redeemer.ca/">View Website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/redeemer1.png',
                    count: 2
                },
                 {
                    desc: '<a target="_blank" href="https://www.redeemer.ca/stories/">View Website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/redeemer2.png',
                    count: 2
                },
                 {
                    desc: '<a target="_blank" href="https://www.redeemer.ca/programs/art/">View Website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/redeemer3.png',
                    count: 2
                },
                 {
                    desc: '<a target="_blank" href="https://www.redeemer.ca/admissionscounsellor/">View Website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/redeemer4.png',
                    count: 2
                },
                 {
                    desc: 'Campus Tour - Interactive map of different locations around the campus.<br><a target="_blank" href="https://www.redeemer.ca/contact/map-and-directions/campus-tour/">View Website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/redeemer5.png',
                    count: 2
                },
                {
                    desc: 'Redeemer Today - Easily find current events and news happening around the campus.<br><a target="_blank" href="https://www.redeemer.ca/redeemer-today/">View Website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/redeemer6.png',
                    count: 2
                }
            ]
        },
        {
            title: 'Build & Price',
            text: '<p>Chrysler\'s Build & Price web application.</p>',
            image: 'img/work/bp1.png',
            url: 'http://www.chrysler.com/hostc/bmo/CUC201501/models.do?',
            count: 4,
            images: [
                {
                    desc: 'Chrysler trim selector page.',
                    src: 'img/work/bp1.png',
                    count: 4
                },
                 {
                    desc: 'Dodge trim selector page.',
                    src: 'img/work/bp3.png',
                    count: 4
                },
                 {
                    desc: 'Fiat trim selector page',
                    src: 'img/work/bp4.png',
                    count: 4
                },
                 {
                    desc: 'Jeep trim selector page.',
                    src: 'img/work/bp5.png',
                    count: 4
                },
                 {
                    desc: 'Ram trim selector page.',
                    src: 'img/work/bp6.png',
                    count: 4
                },
                 {
                    desc: 'Chrysler powertrain selections.',
                    src: 'img/work/bp7.png',
                    count: 4
                },
                 {
                    desc: 'Dodge powertrain selection.',
                    src: 'img/work/bp8.png',
                    count: 4
                },
                 {
                    desc: 'Fiat powertrain selection.',
                    src: 'img/work/bp9.png',
                    count: 4
                },
                 {
                    desc: 'Jeep powertrain selection.',
                    src: 'img/work/bp10.png',
                    count: 4
                },
                 {
                    desc: 'Chrysler trim selector page.',
                    src: 'img/work/bp11.png',
                    count: 4
                },
                 {
                    desc: 'Chrysler trim selector page.',
                    src: 'img/work/bp12.png',
                    count: 4
                },
                 {
                    desc: 'Chrysler trim selector page.',
                    src: 'img/work/bp13.png',
                    count: 4
                },
                 {
                    desc: 'Chrysler trim selector page.',
                    src: 'img/work/bp14.png',
                    count: 4
                },
                {
                    desc: 'Chrysler trim selector page.',
                    src: 'img/work/bp15.png',
                    count: 4
                },
                {
                    desc: 'Chrysler trim selector page.',
                    src: 'img/work/bp16.png',
                    count: 4
                },
                {
                    desc: 'Chrysler trim selector page.',
                    src: 'img/work/bp17.png',
                    count: 4
                },
                {
                    desc: 'Chrysler trim selector page.',
                    src: 'img/work/bp18.png',
                    count: 4
                },
                {
                    desc: 'Chrysler trim selector page.',
                    src: 'img/work/bp19.png',
                    count: 4
                },
                {
                    desc: 'Chrysler trim selector page.',
                    src: 'img/work/bp10.png',
                    count: 4
                }
            ]
        },
        		{
			title: 'Wired Rooms',
            text: '<p>An interior decorating Web Application.</p><p>I built and designed this web application, built for iPads, as my thesis project while attending Fanshawe college.</p>',
            image: 'img/work/wr2.png',
            count: 11,
            images: [
             	{
                    desc: 'Homepage - help section.',
                    src: 'img/work/wr1.png',
                    count: 11
                },
                {
                    desc: 'Library of inspirational images.',
                    src: 'img/work/wr2.png',
                    count: 11
                },
                {
                    desc: 'Browse furniture to add to your project.',
                    src: 'img/work/wr3.png',
                    count: 11
                },
                {
                    desc: 'Browse pantone colours to add to your project.',
                    src: 'img/work/wr4.png',
                    count: 11
                },
                {
                    desc: 'Browse flooring to add to your project.',
                    src: 'img/work/wr5.png',
                    count: 11
                },
                 {
                    desc: 'View of your current project.',
                    src: 'img/work/wr6.png',
                    count: 11
                },
                {
                    desc: 'View of the items you have added to your favorites.',
                    src: 'img/work/wr7.png',
                    count: 11
                },
                {
                    desc: 'Learn more about the products and where you can purchase them.',
                    src: 'img/work/wr8.png',
                    count: 11
                },
                {
                    desc: 'Create a virtual room using your items.',
                    src: 'img/work/wr9.png',
                    count: 11
                }

            ]
        },
        {
			title: 'Wired Rooms Promotional Website',
            text: '<p>I designed and built this promotional website for my thesis while attending Fanshawe College.</p>',
            image: 'img/work/promo1.png',
            prototype: 'thesis',
            count: 12,
            images: [
             	{
                    desc: 'Wired Rooms Promotional Website<br><a target="_blank" href="work/thesis/index.html">View Prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/promo1.png',
                    count: 12
                },
                {
                    desc: 'Intro screen with video for Wired Rooms Promotional Website<br><a target="_blank" href="work/thesis/index.html">View Prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/promo2.png',
                    count: 12
                }
            ]
        }
    ];

}])
myApp.controller('ContactCtrl', ["$scope", "$rootScope", function ($scope, $rootScope) {

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
}])
myApp.controller('StylesCtrl', ["$scope", "$rootScope", "$window", function ($scope, $rootScope, $window) {

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

}]);
!function(a,b,c,d){var e=c("html"),f=c(a),g=c(b),h=c.fancybox=function(){h.open.apply(this,arguments)},i=navigator.userAgent.match(/msie/i),j=null,k=b.createTouch!==d,l=function(a){return a&&a.hasOwnProperty&&a instanceof c},m=function(a){return a&&"string"===c.type(a)},n=function(a){return m(a)&&0<a.indexOf("%")},o=function(a,b){var c=parseInt(a,10)||0;return b&&n(a)&&(c*=h.getViewport()[b]/100),Math.ceil(c)},p=function(a,b){return o(a,b)+"px"};c.extend(h,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!k,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(i?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:c.noop,beforeLoad:c.noop,afterLoad:c.noop,beforeShow:c.noop,afterShow:c.noop,beforeChange:c.noop,beforeClose:c.noop,afterClose:c.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,b){return a&&(c.isPlainObject(b)||(b={}),!1!==h.close(!0))?(c.isArray(a)||(a=l(a)?c(a).get():[a]),c.each(a,function(e,f){var i,j,k,n,o,g={};"object"===c.type(f)&&(f.nodeType&&(f=c(f)),l(f)?(g={href:f.data("fancybox-href")||f.attr("href"),title:f.data("fancybox-title")||f.attr("title"),isDom:!0,element:f},c.metadata&&c.extend(!0,g,f.metadata())):g=f),i=b.href||g.href||(m(f)?f:null),j=b.title!==d?b.title:g.title||"",n=(k=b.content||g.content)?"html":b.type||g.type,!n&&g.isDom&&(n=f.data("fancybox-type"),n||(n=(n=f.prop("class").match(/fancybox\.(\w+)/))?n[1]:null)),m(i)&&(n||(h.isImage(i)?n="image":h.isSWF(i)?n="swf":"#"===i.charAt(0)?n="inline":m(f)&&(n="html",k=f)),"ajax"===n&&(o=i.split(/\s+/,2),i=o.shift(),o=o.shift())),k||("inline"===n?i?k=c(m(i)?i.replace(/.*(?=#[^\s]+$)/,""):i):g.isDom&&(k=f):"html"===n?k=i:!n&&!i&&g.isDom&&(n="inline",k=f)),c.extend(g,{href:i,type:n,content:k,title:j,selector:o}),a[e]=g}),h.opts=c.extend(!0,{},h.defaults,b),b.keys!==d&&(h.opts.keys=b.keys?c.extend({},h.defaults.keys,b.keys):!1),h.group=a,h._start(h.opts.index)):void 0},cancel:function(){var a=h.coming;a&&!1!==h.trigger("onCancel")&&(h.hideLoading(),h.ajaxLoad&&h.ajaxLoad.abort(),h.ajaxLoad=null,h.imgPreload&&(h.imgPreload.onload=h.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),h.coming=null,h.current||h._afterZoomOut(a))},close:function(a){h.cancel(),!1!==h.trigger("beforeClose")&&(h.unbindEvents(),h.isActive&&(h.isOpen&&!0!==a?(h.isOpen=h.isOpened=!1,h.isClosing=!0,c(".fancybox-item, .fancybox-nav").remove(),h.wrap.stop(!0,!0).removeClass("fancybox-opened"),h.transitions[h.current.closeMethod]()):(c(".fancybox-wrap").stop(!0).trigger("onReset").remove(),h._afterZoomOut())))},play:function(a){var b=function(){clearTimeout(h.player.timer)},c=function(){b(),h.current&&h.player.isActive&&(h.player.timer=setTimeout(h.next,h.current.playSpeed))},d=function(){b(),g.unbind(".player"),h.player.isActive=!1,h.trigger("onPlayEnd")};!0===a||!h.player.isActive&&!1!==a?h.current&&(h.current.loop||h.current.index<h.group.length-1)&&(h.player.isActive=!0,g.bind({"onCancel.player beforeClose.player":d,"onUpdate.player":c,"beforeLoad.player":b}),c(),h.trigger("onPlayStart")):d()},next:function(a){var b=h.current;b&&(m(a)||(a=b.direction.next),h.jumpto(b.index+1,a,"next"))},prev:function(a){var b=h.current;b&&(m(a)||(a=b.direction.prev),h.jumpto(b.index-1,a,"prev"))},jumpto:function(a,b,c){var e=h.current;e&&(a=o(a),h.direction=b||e.direction[a>=e.index?"next":"prev"],h.router=c||"jumpto",e.loop&&(0>a&&(a=e.group.length+a%e.group.length),a%=e.group.length),e.group[a]!==d&&(h.cancel(),h._start(a)))},reposition:function(a,b){var f,d=h.current,e=d?d.wrap:null;e&&(f=h._getPosition(b),a&&"scroll"===a.type?(delete f.position,e.stop(!0,!0).animate(f,200)):(e.css(f),d.pos=c.extend({},d.dim,f)))},update:function(a){var b=a&&a.type,c=!b||"orientationchange"===b;c&&(clearTimeout(j),j=null),h.isOpen&&!j&&(j=setTimeout(function(){var d=h.current;d&&!h.isClosing&&(h.wrap.removeClass("fancybox-tmp"),(c||"load"===b||"resize"===b&&d.autoResize)&&h._setDimension(),"scroll"===b&&d.canShrink||h.reposition(a),h.trigger("onUpdate"),j=null)},c&&!k?0:300))},toggle:function(a){h.isOpen&&(h.current.fitToView="boolean"===c.type(a)?a:!h.current.fitToView,k&&(h.wrap.removeAttr("style").addClass("fancybox-tmp"),h.trigger("onUpdate")),h.update())},hideLoading:function(){g.unbind(".loading"),c("#fancybox-loading").remove()},showLoading:function(){var a,b;h.hideLoading(),a=c('<div id="fancybox-loading"><div></div></div>').click(h.cancel).appendTo("body"),g.bind("keydown.loading",function(a){27===(a.which||a.keyCode)&&(a.preventDefault(),h.cancel())}),h.defaults.fixed||(b=h.getViewport(),a.css({position:"absolute",top:.5*b.h+b.y,left:.5*b.w+b.x}))},getViewport:function(){var b=h.current&&h.current.locked||!1,c={x:f.scrollLeft(),y:f.scrollTop()};return b?(c.w=b[0].clientWidth,c.h=b[0].clientHeight):(c.w=k&&a.innerWidth?a.innerWidth:f.width(),c.h=k&&a.innerHeight?a.innerHeight:f.height()),c},unbindEvents:function(){h.wrap&&l(h.wrap)&&h.wrap.unbind(".fb"),g.unbind(".fb"),f.unbind(".fb")},bindEvents:function(){var b,a=h.current;a&&(f.bind("orientationchange.fb"+(k?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),h.update),(b=a.keys)&&g.bind("keydown.fb",function(e){var f=e.which||e.keyCode,g=e.target||e.srcElement;return 27===f&&h.coming?!1:void(!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey&&(!g||!g.type&&!c(g).is("[contenteditable]"))&&c.each(b,function(b,g){return 1<a.group.length&&g[f]!==d?(h[b](g[f]),e.preventDefault(),!1):-1<c.inArray(f,g)?(h[b](),e.preventDefault(),!1):void 0}))}),c.fn.mousewheel&&a.mouseWheel&&h.wrap.bind("mousewheel.fb",function(b,d,e,f){for(var g=c(b.target||null),i=!1;g.length&&!i&&!g.is(".fancybox-skin")&&!g.is(".fancybox-wrap");)i=g[0]&&!(g[0].style.overflow&&"hidden"===g[0].style.overflow)&&(g[0].clientWidth&&g[0].scrollWidth>g[0].clientWidth||g[0].clientHeight&&g[0].scrollHeight>g[0].clientHeight),g=c(g).parent();0!==d&&!i&&1<h.group.length&&!a.canShrink&&(f>0||e>0?h.prev(f>0?"down":"left"):(0>f||0>e)&&h.next(0>f?"up":"right"),b.preventDefault())}))},trigger:function(a,b){var d,e=b||h.coming||h.current;if(e){if(c.isFunction(e[a])&&(d=e[a].apply(e,Array.prototype.slice.call(arguments,1))),!1===d)return!1;e.helpers&&c.each(e.helpers,function(b,d){d&&h.helpers[b]&&c.isFunction(h.helpers[b][a])&&h.helpers[b][a](c.extend(!0,{},h.helpers[b].defaults,d),e)}),g.trigger(a)}},isImage:function(a){return m(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return m(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d,e,b={};if(a=o(a),d=h.group[a]||null,!d)return!1;if(b=c.extend(!0,{},h.opts,d),d=b.margin,e=b.padding,"number"===c.type(d)&&(b.margin=[d,d,d,d]),"number"===c.type(e)&&(b.padding=[e,e,e,e]),b.modal&&c.extend(!0,b,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),b.autoSize&&(b.autoWidth=b.autoHeight=!0),"auto"===b.width&&(b.autoWidth=!0),"auto"===b.height&&(b.autoHeight=!0),b.group=h.group,b.index=a,h.coming=b,!1===h.trigger("beforeLoad"))h.coming=null;else{if(e=b.type,d=b.href,!e)return h.coming=null,h.current&&h.router&&"jumpto"!==h.router?(h.current.index=a,h[h.router](h.direction)):!1;if(h.isActive=!0,("image"===e||"swf"===e)&&(b.autoHeight=b.autoWidth=!1,b.scrolling="visible"),"image"===e&&(b.aspectRatio=!0),"iframe"===e&&k&&(b.scrolling="scroll"),b.wrap=c(b.tpl.wrap).addClass("fancybox-"+(k?"mobile":"desktop")+" fancybox-type-"+e+" fancybox-tmp "+b.wrapCSS).appendTo(b.parent||"body"),c.extend(b,{skin:c(".fancybox-skin",b.wrap),outer:c(".fancybox-outer",b.wrap),inner:c(".fancybox-inner",b.wrap)}),c.each(["Top","Right","Bottom","Left"],function(a,c){b.skin.css("padding"+c,p(b.padding[a]))}),h.trigger("onReady"),"inline"===e||"html"===e){if(!b.content||!b.content.length)return h._error("content")}else if(!d)return h._error("href");"image"===e?h._loadImage():"ajax"===e?h._loadAjax():"iframe"===e?h._loadIframe():h._afterLoad()}},_error:function(a){c.extend(h.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:h.coming.tpl.error}),h._afterLoad()},_loadImage:function(){var a=h.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null,h.coming.width=this.width/h.opts.pixelRatio,h.coming.height=this.height/h.opts.pixelRatio,h._afterLoad()},a.onerror=function(){this.onload=this.onerror=null,h._error("image")},a.src=h.coming.href,!0!==a.complete&&h.showLoading()},_loadAjax:function(){var a=h.coming;h.showLoading(),h.ajaxLoad=c.ajax(c.extend({},a.ajax,{url:a.href,error:function(a,b){h.coming&&"abort"!==b?h._error("ajax",a):h.hideLoading()},success:function(b,c){"success"===c&&(a.content=b,h._afterLoad())}}))},_loadIframe:function(){var a=h.coming,b=c(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",k?"auto":a.iframe.scrolling).attr("src",a.href);c(a.wrap).bind("onReset",function(){try{c(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}}),a.iframe.preload&&(h.showLoading(),b.one("load",function(){c(this).data("ready",1),k||c(this).bind("load.fb",h.update),c(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),h._afterLoad()})),a.content=b.appendTo(a.inner),a.iframe.preload||h._afterLoad()},_preloadImages:function(){var e,f,a=h.group,b=h.current,c=a.length,d=b.preload?Math.min(b.preload,c-1):0;for(f=1;d>=f;f+=1)e=a[(b.index+f)%c],"image"===e.type&&e.href&&((new Image).src=e.href)},_afterLoad:function(){var d,e,f,g,i,a=h.coming,b=h.current;if(h.hideLoading(),a&&!1!==h.isActive)if(!1===h.trigger("afterLoad",a,b))a.wrap.stop(!0).trigger("onReset").remove(),h.coming=null;else{switch(b&&(h.trigger("beforeChange",b),b.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),h.unbindEvents(),d=a.content,e=a.type,f=a.scrolling,c.extend(h,{wrap:a.wrap,skin:a.skin,outer:a.outer,inner:a.inner,current:a,previous:b}),g=a.href,e){case"inline":case"ajax":case"html":a.selector?d=c("<div>").html(d).find(a.selector):l(d)&&(d.data("fancybox-placeholder")||d.data("fancybox-placeholder",c('<div class="fancybox-placeholder"></div>').insertAfter(d).hide()),d=d.show().detach(),a.wrap.bind("onReset",function(){c(this).find(d).length&&d.hide().replaceAll(d.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case"image":d=a.tpl.image.replace("{href}",g);break;case"swf":d='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',i="",c.each(a.swf,function(a,b){d+='<param name="'+a+'" value="'+b+'"></param>',i+=" "+a+'="'+b+'"'}),d+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+i+"></embed></object>"}(!l(d)||!d.parent().is(a.inner))&&a.inner.append(d),h.trigger("beforeShow"),a.inner.css("overflow","yes"===f?"scroll":"no"===f?"hidden":f),h._setDimension(),h.reposition(),h.isOpen=!1,h.coming=null,h.bindEvents(),h.isOpened?b.prevMethod&&h.transitions[b.prevMethod]():c(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove(),h.transitions[h.isOpened?a.nextMethod:a.openMethod](),h._preloadImages()}},_setDimension:function(){var w,x,y,z,A,B,C,D,E,a=h.getViewport(),b=0,d=!1,e=!1,d=h.wrap,f=h.skin,g=h.inner,i=h.current,e=i.width,j=i.height,k=i.minWidth,l=i.minHeight,m=i.maxWidth,q=i.maxHeight,r=i.scrolling,s=i.scrollOutside?i.scrollbarWidth:0,t=i.margin,u=o(t[1]+t[3]),v=o(t[0]+t[2]);if(d.add(f).add(g).width("auto").height("auto").removeClass("fancybox-tmp"),t=o(f.outerWidth(!0)-f.width()),w=o(f.outerHeight(!0)-f.height()),x=u+t,y=v+w,z=n(e)?(a.w-x)*o(e)/100:e,A=n(j)?(a.h-y)*o(j)/100:j,"iframe"===i.type){if(E=i.content,i.autoHeight&&1===E.data("ready"))try{E[0].contentWindow.document.location&&(g.width(z).height(9999),B=E.contents().find("body"),s&&B.css("overflow-x","hidden"),A=B.outerHeight(!0))}catch(F){}}else(i.autoWidth||i.autoHeight)&&(g.addClass("fancybox-tmp"),i.autoWidth||g.width(z),i.autoHeight||g.height(A),i.autoWidth&&(z=g.width()),i.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp"));if(e=o(z),j=o(A),D=z/A,k=o(n(k)?o(k,"w")-x:k),m=o(n(m)?o(m,"w")-x:m),l=o(n(l)?o(l,"h")-y:l),q=o(n(q)?o(q,"h")-y:q),B=m,C=q,i.fitToView&&(m=Math.min(a.w-x,m),q=Math.min(a.h-y,q)),x=a.w-u,v=a.h-v,i.aspectRatio?(e>m&&(e=m,j=o(e/D)),j>q&&(j=q,e=o(j*D)),k>e&&(e=k,j=o(e/D)),l>j&&(j=l,e=o(j*D))):(e=Math.max(k,Math.min(e,m)),i.autoHeight&&"iframe"!==i.type&&(g.width(e),j=g.height()),j=Math.max(l,Math.min(j,q))),i.fitToView)if(g.width(e).height(j),d.width(e+t),a=d.width(),u=d.height(),i.aspectRatio)for(;(a>x||u>v)&&e>k&&j>l&&!(19<b++);)j=Math.max(l,Math.min(q,j-10)),e=o(j*D),k>e&&(e=k,j=o(e/D)),e>m&&(e=m,j=o(e/D)),g.width(e).height(j),d.width(e+t),a=d.width(),u=d.height();else e=Math.max(k,Math.min(e,e-(a-x))),j=Math.max(l,Math.min(j,j-(u-v)));s&&"auto"===r&&A>j&&x>e+t+s&&(e+=s),g.width(e).height(j),d.width(e+t),a=d.width(),u=d.height(),d=(a>x||u>v)&&e>k&&j>l,e=i.aspectRatio?B>e&&C>j&&z>e&&A>j:(B>e||C>j)&&(z>e||A>j),c.extend(i,{dim:{width:p(a),height:p(u)},origWidth:z,origHeight:A,canShrink:d,canExpand:e,wPadding:t,hPadding:w,wrapSpace:u-f.outerHeight(!0),skinSpace:f.height()-j}),!E&&i.autoHeight&&j>l&&q>j&&!e&&g.height("auto")},_getPosition:function(a){var b=h.current,c=h.getViewport(),d=b.margin,e=h.wrap.width()+d[1]+d[3],f=h.wrap.height()+d[0]+d[2],d={position:"absolute",top:d[0],left:d[3]};return b.autoCenter&&b.fixed&&!a&&f<=c.h&&e<=c.w?d.position="fixed":b.locked||(d.top+=c.y,d.left+=c.x),d.top=p(Math.max(d.top,d.top+(c.h-f)*b.topRatio)),d.left=p(Math.max(d.left,d.left+(c.w-e)*b.leftRatio)),d},_afterZoomIn:function(){var a=h.current;a&&(h.isOpen=h.isOpened=!0,h.wrap.css("overflow","visible").addClass("fancybox-opened"),h.update(),(a.closeClick||a.nextClick&&1<h.group.length)&&h.inner.css("cursor","pointer").bind("click.fb",function(b){!c(b.target).is("a")&&!c(b.target).parent().is("a")&&(b.preventDefault(),h[a.closeClick?"close":"next"]())}),a.closeBtn&&c(a.tpl.closeBtn).appendTo(h.skin).bind("click.fb",function(a){a.preventDefault(),h.close()}),a.arrows&&1<h.group.length&&((a.loop||0<a.index)&&c(a.tpl.prev).appendTo(h.outer).bind("click.fb",h.prev),(a.loop||a.index<h.group.length-1)&&c(a.tpl.next).appendTo(h.outer).bind("click.fb",h.next)),h.trigger("afterShow"),a.loop||a.index!==a.group.length-1?h.opts.autoPlay&&!h.player.isActive&&(h.opts.autoPlay=!1,h.play()):h.play(!1))},_afterZoomOut:function(a){a=a||h.current,c(".fancybox-wrap").trigger("onReset").remove(),c.extend(h,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),h.trigger("afterClose",a)}}),h.transitions={getOrigPosition:function(){var a=h.current,b=a.element,c=a.orig,d={},e=50,f=50,g=a.hPadding,i=a.wPadding,j=h.getViewport();return!c&&a.isDom&&b.is(":visible")&&(c=b.find("img:first"),c.length||(c=b)),l(c)?(d=c.offset(),c.is("img")&&(e=c.outerWidth(),f=c.outerHeight())):(d.top=j.y+(j.h-f)*a.topRatio,d.left=j.x+(j.w-e)*a.leftRatio),("fixed"===h.wrap.css("position")||a.locked)&&(d.top-=j.y,d.left-=j.x),d={top:p(d.top-g*a.topRatio),left:p(d.left-i*a.leftRatio),width:p(e+i),height:p(f+g)}},step:function(a,b){var c,d,e=b.prop;d=h.current;var f=d.wrapSpace,g=d.skinSpace;("width"===e||"height"===e)&&(c=b.end===b.start?1:(a-b.start)/(b.end-b.start),h.isClosing&&(c=1-c),d="width"===e?d.wPadding:d.hPadding,d=a-d,h.skin[e](o("width"===e?d:d-f*c)),h.inner[e](o("width"===e?d:d-f*c-g*c)))},zoomIn:function(){var a=h.current,b=a.pos,d=a.openEffect,e="elastic"===d,f=c.extend({opacity:1},b);delete f.position,e?(b=this.getOrigPosition(),a.openOpacity&&(b.opacity=.1)):"fade"===d&&(b.opacity=.1),h.wrap.css(b).animate(f,{duration:"none"===d?0:a.openSpeed,easing:a.openEasing,step:e?this.step:null,complete:h._afterZoomIn})},zoomOut:function(){var a=h.current,b=a.closeEffect,c="elastic"===b,d={opacity:.1};c&&(d=this.getOrigPosition(),a.closeOpacity&&(d.opacity=.1)),h.wrap.animate(d,{duration:"none"===b?0:a.closeSpeed,easing:a.closeEasing,step:c?this.step:null,complete:h._afterZoomOut})},changeIn:function(){var f,a=h.current,b=a.nextEffect,c=a.pos,d={opacity:1},e=h.direction;c.opacity=.1,"elastic"===b&&(f="down"===e||"up"===e?"top":"left","down"===e||"right"===e?(c[f]=p(o(c[f])-200),d[f]="+=200px"):(c[f]=p(o(c[f])+200),d[f]="-=200px")),"none"===b?h._afterZoomIn():h.wrap.css(c).animate(d,{duration:a.nextSpeed,easing:a.nextEasing,complete:h._afterZoomIn})},changeOut:function(){var a=h.previous,b=a.prevEffect,d={opacity:.1},e=h.direction;"elastic"===b&&(d["down"===e||"up"===e?"top":"left"]=("up"===e||"left"===e?"-":"+")+"=200px"),a.wrap.animate(d,{duration:"none"===b?0:a.prevSpeed,easing:a.prevEasing,complete:function(){c(this).trigger("onReset").remove()}})}},h.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!k,fixed:!0},overlay:null,fixed:!1,el:c("html"),create:function(a){a=c.extend({},this.defaults,a),this.overlay&&this.close(),this.overlay=c('<div class="fancybox-overlay"></div>').appendTo(h.coming?h.coming.parent:a.parent),this.fixed=!1,a.fixed&&h.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var b=this;a=c.extend({},this.defaults,a),this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a),this.fixed||(f.bind("resize.overlay",c.proxy(this.update,this)),this.update()),a.closeClick&&this.overlay.bind("click.overlay",function(a){return c(a.target).hasClass("fancybox-overlay")?(h.isActive?h.close():b.close(),!1):void 0}),this.overlay.css(a.css).show()},close:function(){var a,b;f.unbind("resize.overlay"),this.el.hasClass("fancybox-lock")&&(c(".fancybox-margin").removeClass("fancybox-margin"),a=f.scrollTop(),b=f.scrollLeft(),this.el.removeClass("fancybox-lock"),f.scrollTop(a).scrollLeft(b)),c(".fancybox-overlay").remove().hide(),c.extend(this,{overlay:null,fixed:!1})},update:function(){var c,a="100%";this.overlay.width(a).height("100%"),i?(c=Math.max(b.documentElement.offsetWidth,b.body.offsetWidth),g.width()>c&&(a=g.width())):g.width()>f.width()&&(a=g.width()),this.overlay.width(a).height(g.height())},onReady:function(a,b){var d=this.overlay;c(".fancybox-overlay").stop(!0,!0),d||this.create(a),a.locked&&this.fixed&&b.fixed&&(d||(this.margin=g.height()>f.height()?c("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1),!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var d,e;b.locked&&(!1!==this.margin&&(c("*").filter(function(){return"fixed"===c(this).css("position")&&!c(this).hasClass("fancybox-overlay")&&!c(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),d=f.scrollTop(),e=f.scrollLeft(),this.el.addClass("fancybox-lock"),f.scrollTop(d).scrollLeft(e)),this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!h.coming&&this.overlay.fadeOut(a.speedOut,c.proxy(this.close,this))}},h.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var b=h.current,d=b.title,e=a.type;if(c.isFunction(d)&&(d=d.call(b.element,b)),m(d)&&""!==c.trim(d)){switch(b=c('<div class="fancybox-title fancybox-title-'+e+'-wrap">'+d+"</div>"),e){case"inside":e=h.skin;break;case"outside":e=h.wrap;break;case"over":e=h.inner;break;default:e=h.skin,b.appendTo("body"),i&&b.width(b.width()),b.wrapInner('<span class="child"></span>'),h.current.margin[2]+=Math.abs(o(b.css("margin-bottom")))}b["top"===a.position?"prependTo":"appendTo"](e)}}},c.fn.fancybox=function(a){var b,d=c(this),e=this.selector||"",f=function(f){var j,k,g=c(this).blur(),i=b;!f.ctrlKey&&!f.altKey&&!f.shiftKey&&!f.metaKey&&!g.is(".fancybox-wrap")&&(j=a.groupAttr||"data-fancybox-group",k=g.attr(j),k||(j="rel",k=g.get(0)[j]),k&&""!==k&&"nofollow"!==k&&(g=e.length?c(e):d,g=g.filter("["+j+'="'+k+'"]'),i=g.index(this)),a.index=i,!1!==h.open(g,a)&&f.preventDefault())};return a=a||{},b=a.index||0,e&&!1!==a.live?g.undelegate(e,"click.fb-start").delegate(e+":not('.fancybox-item, .fancybox-nav')","click.fb-start",f):d.unbind("click.fb-start").bind("click.fb-start",f),this.filter("[data-fancybox-start=1]").trigger("click"),this},g.ready(function(){var b,f;if(c.scrollbarWidth===d&&(c.scrollbarWidth=function(){var a=c('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();return a.remove(),b}),c.support.fixedPosition===d){b=c.support,f=c('<div style="position:fixed;top:20px;"></div>').appendTo("body");var g=20===f[0].offsetTop||15===f[0].offsetTop;f.remove(),b.fixedPosition=g}c.extend(h.defaults,{scrollbarWidth:c.scrollbarWidth(),fixed:c.support.fixedPosition,parent:c("body")}),b=c(a).width(),e.addClass("fancybox-lock-test"),f=c(a).width(),e.removeClass("fancybox-lock-test"),c("<style type='text/css'>.fancybox-margin{margin-right:"+(f-b)+"px;}</style>").appendTo("head")})}(window,document,jQuery);
$(document).ready(function(){


    //Toggle
    $('.g-btn-toggle .g-btn').click(function(e){
        e.preventDefault();
        $(this).toggleClass('g-active');
        $(this).siblings().toggleClass('g-active');
    });

    //image gallery
    $(".fancybox").fancybox({
        padding : 40,
        prevEffect   : 'none',
        nextEffect  : 'none',
        helpers : {
            title   : {
                type: 'inside'
            }
        },
        afterLoad : function() {
            this.title = '<p class="g-font-size-smaller">' + (this.index + 1) + '/' + this.group.length + '</p>' + (this.title ? this.title : '');
        }
    });
    

     //pagination
    $('.g-pagination a.g-nums').click(function(){
        $('.g-pagination a.g-nums.g-active').removeClass('g-active');
        $(this).addClass('g-active');
        btnStates();
    })

    $('.g-pagination a.g-next').click(function(){
        $('.g-pagination a.g-nums.g-active').removeClass('g-active').next('.g-nums').addClass('g-active'); 
        btnStates();
    })

    $('.g-pagination a.g-prev').click(function(){
        $('.g-pagination a.g-nums.g-active').removeClass('g-active').prev('.g-nums').addClass('g-active'); 
        btnStates();
    })


    $('.fancy-box-trigger').click(function(){
        var id =  event.target.id;
        var tag = '.fancy-box-'+id;
    })

});

function btnStates(){
    if($('.g-pagination a.g-nums.g-active').next('.g-nums').length){
        $('.g-pagination a.g-next').removeClass('g-disabled');
    }else{
        $('.g-pagination a.g-next').addClass('g-disabled');
    }

    if($('.g-pagination a.g-nums.g-active').prev('.g-nums').length){
        $('.g-pagination a.g-prev').removeClass('g-disabled');
    }else{
        $('.g-pagination a.g-prev').addClass('g-disabled');
    }

    toGoPage();
}

function openFancyBox(className){
    $(className).eq(0).trigger('click'); 
}