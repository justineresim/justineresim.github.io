myApp.controller('WorkCtrl', function ($scope, $rootScope) {

	$rootScope.bodyClass = 'work';

    $scope.fancyBox = function(par) {
        var className = '.fancy-box-'+par;
        openFancyBox(className);
    }

	$scope.work = [
        {
            title: 'Res.im',
            text: 'We use UX research, usability testing, and web and application design to help clients discover and capitalize on new ideas.',
            image: 'img/work/resim.png',
            role: 'Development',
            url: 'https://res.im'
        },
        {
            title: 'VIQUA',
            text: 'VIQUA is the world’s largest supplier of residential and light commercial UV water disinfection systems, providing safe water without the use of chemicals.',
            image: 'img/work/viqua.png',
            case: 'https://res.im/work/viqua/',
            role: 'Development',
            url: 'https://viqua.com/'
        },
        {
            title: 'Durham College',
            text: 'Durham College is a post-secondary institution east of Toronto, with 30,000 students and campuses in Oshawa and Whitby, Ontario, and a learning site in Pickering.',
            image: 'img/work/durham.png',
            case: 'https://res.im/work/durham-college/',
            role: 'Front-end development',
            url: 'https://durhamcollege.ca/',
            externalPrototype: 'http://review.durham.git.resolutionim.com/styleguide',
        },
        {
            title: 'SAIT',
            text: 'SAIT is Alberta’s third-largest post-secondary institution, educating approximately 50,000 students per year globally with an emphasis on applied education and research.',
            image: 'img/work/sait.png',
            prototype: 'sait/youth/style-guide',
            case: 'https://res.im/work/sait/',
            role: 'Front-end development'
        },
		{
			title: 'ZTR Control Systems',
            text: 'ZTR improves product design, warranty, legal, part sales, and dealer loyalty through telematics and data-driven decision making.',
            image: 'img/work/ztr1.png',
            prototype: 'ztr',
            role: 'Front-end development',
            count: 9,
            images: [
             	{
                    desc: '<a target="_blank" href="work/ztr/index.html">View prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/ztr1.png',
                    count: 9
                },
                {
                    desc: '<a target="_blank" href="work/ztr/index.html">View prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/ztr2.png',
                    count: 9
                },
                {
                    desc: '<a target="_blank" href="work/ztr/index.html">View prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/ztr3.png',
                    count: 9
                },
                {
                    desc: '<a target="_blank" href="work/ztr/index.html">View prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/ztr4.png',
                    count: 9
                },
                {
                    desc: '<a target="_blank" href="work/ztr/index.html">View prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/ztr5.png',
                    count: 9
                },
                {
                    desc: '<a target="_blank" href="work/ztr/global.html">View prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/ztr6.png',
                    count: 9
                },
                {
                    desc: '<a target="_blank" href="work/ztr/global.html">View prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/ztr7.png',
                    count: 9
                },
                {
                    desc: '<a target="_blank" href="work/ztr/global.html">View prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/ztr8.png',
                    count: 9
                }
            ]
        },
		{
			title: 'Huron County',
            text: 'Huron County is located along the shores of Lake Huron. This vibrant community is the most agriculturally productive county in Ontario.',
            image: 'img/work/hc3.png',
            prototype: 'huron-county',
            count: 8,
            role: 'Front-end development',
            images: [
             	{
                    desc: '<a target="_blank" href="work/huron-county/index.html">View prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/hc3.png',
                    count: 8
                },
                {
                    desc: '<a target="_blank" href="work/huron-county/growing-together.html">View prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/hc4.png',
                    count: 8
                },
                {
                    desc: '<a target="_blank" href="work/huron-county/childrens-services.html">View prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/hc5.png',
                    count: 8
                },
                {
                    desc: '<a target="_blank" href="work/huron-county/events.html">View prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/hc6.png',
                    count: 8
                },
                {
                    desc: '<a target="_blank" href="work/huron-county/index.html">View prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/hc1.png',
                    count: 8
                },
                {
                    desc: '<a target="_blank" href="work/huron-county/events.html">View prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/hc2.png',
                    count: 8
                },
                {
                    desc: '<a target="_blank" href="work/huron-county/global.html">View prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/hc7.png',
                    count: 8
                },
            	 {
                    desc: '<a target="_blank" href="work/huron-county/global.html">View prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/hc8.png',
                    count: 8
                },

            ]
        },
		{
			title: 'Confederation College',
            text: 'Located in Northern Ontario, Confederation College offers practical, hands-on programs and courses across 9 campuses to over 7600 full and part-time students each year.',
            image: 'img/work/confed1.png',
            prototype: 'confederation',
            url: 'http://www.confederationcollege.ca/',
            role: 'Front-end development',
            count: 7,
            images: [
             	{
                    desc: '<a target="_blank" href="work/confederation/index.html">View prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/confed1.png',
                    count: 7
                },
                {
                    desc: '<a target="_blank" href="work/confederation/programs.html">View prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/confed2.png',
                    count: 7
                },
				{
                    desc: '<a target="_blank" href="work/confederation/index.html">View prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/confed3.png',
                    count: 7
                },
				{
                    desc: '<a target="_blank" href="work/confederation/programs.html">View prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/confed4.png',
                    count: 7
                },
				{
                    desc: '<a target="_blank" href="work/confederation/global.html">View prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/confed5.png',
                    count: 7
                }
            ]
        },
		{
			title: 'Golf Canada',
            text: 'Canadian Golf Course History responsive website featuring an interactive map displaying Canadian golf courses throughout history.',
            image: 'img/work/gc1.png',
            case: 'https://res.im/work/golf-canada/',
            role: 'Development',
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
            title: 'Verto360',
            text: 'Verto360 is a company from London Ontario that designs, manages, builds and furnishes commercial building interiors.',
            image: 'img/work/verto1.png',
            url: 'http://verto360.com/',
            role: 'Development',
            count: 3,
            images: [
                {
                    desc: '<a target="_blank" href="http://verto360.com/">Visit website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/verto1.png',
                    count: 3
                },
                 {
                    desc: '<a target="_blank" href="http://verto360.com/case-study/south-london-community-centre/">Visit website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/verto2.png',
                    count: 3
                },
                 {
                    desc: '<a target="_blank" href="http://verto360.com/case-study/">Visit website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/verto3.png',
                    count: 3
                },
                 {
                    desc: '<a target="_blank" href="http://verto360.com">Visit website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/verto4.png',
                    count: 3
                },
                {
                    desc: '<a target="_blank" href="http://verto360.com/contact/">Visit website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/verto5.png',
                    count: 3
                },
                 {
                    desc: '<a target="_blank" href="http://verto360.com/about-verto360/">Visit website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/verto6.png',
                    count: 3
                }
            ]
        },
        {
            title: 'Fitness Health Match',
            text: 'FHMatch is a social networking platform that connects people with a broad range of local fitness, health, and wellness professionals.',
            image: 'img/work/fhm5.png',
            url: 'http://www.fhmatch.com/',
            role: 'Front-end development',
            count: 1,
            images: [
                {
                    desc: '<a target="_blank" href="http://www.fhmatch.com/">Visit website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/fhm1.png',
                    count: 1
                },
                 {
                    desc: '<a target="_blank" href="http://www.fhmatch.com/register">Visit website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/fhm2.png',
                    count: 1
                },
                 {
                    desc: 'Browse fitness and health related articles.<br><a target="_blank" href="http://www.fhmatch.com/articles">Visit website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/fhm3.png',
                    count: 1
                },
                 {
                    desc: 'Easily find health and fitness professional in your area.<br><a target="_blank" href="http://www.fhmatch.com/">Visit website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/fhm4.png',
                    count: 1
                },
                 {
                    desc: 'Connect with professional to book appointments.<br><a target="_blank" href="http://www.fhmatch.com/">Visit website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/fhm5.png',
                    count: 1
                }
            ]
        },
       {
            title: 'Redeemer University',
            text: 'Redeemer University College is an undergraduate university known for providing a high-quality liberal arts and sciences university education.',
            image: 'img/work/redeemer1.png',
            url: 'https://www.redeemer.ca/',
            case: 'https://res.im/work/redeemer-university-college/',
            role: 'Development',
            count: 2,
            images: [
                {
                    desc: 'Redeemer University Homepage<br><a target="_blank" href="https://www.redeemer.ca/">Visit website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/redeemer1.png',
                    count: 2
                },
                 {
                    desc: '<a target="_blank" href="https://www.redeemer.ca/stories/">Visit website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/redeemer2.png',
                    count: 2
                },
                 {
                    desc: '<a target="_blank" href="https://www.redeemer.ca/programs/art/">Visit website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/redeemer3.png',
                    count: 2
                },
                 {
                    desc: '<a target="_blank" href="https://www.redeemer.ca/admissionscounsellor/">Visit website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/redeemer4.png',
                    count: 2
                },
                 {
                    desc: 'Campus Tour - Interactive map of different locations around the campus.<br><a target="_blank" href="https://www.redeemer.ca/contact/map-and-directions/campus-tour/">Visit website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/redeemer5.png',
                    count: 2
                },
                {
                    desc: 'Redeemer Today - Easily find current events and news happening around the campus.<br><a target="_blank" href="https://www.redeemer.ca/redeemer-today/">Visit website<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/redeemer6.png',
                    count: 2
                }
            ]
        },
        {
            title: 'Nissan Infiniti',
            text: 'This prototype and style guide was created for Autodata Solutions as a starting point for the Nissan Infiniti Pricing Tool web application.',
            image: 'img/work/ni1.png',
            prototype: 'nissan',
            count: 10,
            role: 'Front-end development',
            images: [
                {
                    desc: '<a target="_blank" href="work/nissan/layout.html">View prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/ni1.png',
                    count: 10
                },
                {
                    desc: '<a target="_blank" href="work/nissan/layout.html">View prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/ni2.png',
                    count: 10
                },
                {
                    desc: '<a target="_blank" href="work/nissan/metrics.html">View prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/ni3.png',
                    count: 10
                },
                {
                    desc: '<a target="_blank" href="work/nissan/global.html">View prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/ni4.png',
                    count: 10
                },
                {
                    desc: '<a target="_blank" href="work/nissan/index.html">View prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/ni5.png',
                    count: 10
                },
                {
                    desc: '<a target="_blank" href="work/nissan/index.html">View prototype<span class="ti-arrow-top-right g-icon-right"></span></a>',
                    src: 'img/work/ni6.png',
                    count: 10
                }

            ]
        },
        {
            title: 'Build & Price',
            text: 'Use Chrysler\'s Build and Price tool to customize your new vehicle exactly how you want it. Choose the color, trim, options and more and easily calculate the costs.',
            image: 'img/work/bp1.png',
            url: 'http://www.chrysler.com/hostc/bmo/CUC201501/models.do?',
            role: 'Front-end development',
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
        }
    ];

})