myApp.controller('WorkCtrl', function ($scope, $rootScope) {

	$rootScope.bodyClass = 'work';

    $scope.fancyBox = function(par) {
        var className = '.fancy-box-'+par;
        openFancyBox(className);
    }

	$scope.work = [
        
        {
            title: 'VIQUA',
            text: 'VIQUA is the world’s largest supplier of residential and light commercial UV water disinfection systems, providing safe water without the use of chemicals.',
            image: 'img/work/viqua/viqua.png',
            case: 'https://res.im/work/viqua/',
            role: 'Development',
            url: 'https://viqua.com/'
        },
        {
            title: 'SAIT',
            text: 'SAIT is Alberta’s third-largest post-secondary institution, educating approximately 50,000 students per year globally with an emphasis on applied education and research.',
            image: 'img/work/sait/sait.png',
            prototype: 'sait/youth/style-guide',
            case: 'https://res.im/work/sait/',
            role: 'Front-end development'
        },
        {
            title: '3M Safety Admin Panel',
            text: 'Product editing, and PDF catalogue generation.',
            image: 'img/work/admin/1.png',
            role: 'Development',
            count: 16,
            images: [
                {
                    src: 'img/work/admin/1.png',
                    count: 16
                },
                {
                    src: 'img/work/admin/2.png',
                    count: 16
                },
                {
                    src: 'img/work/admin/3.png',
                    count: 16
                },
                {
                    src: 'img/work/admin/4.png',
                    count: 16
                },
                {
                    src: 'img/work/admin/5.png',
                    count: 16
                }
            ]
        },
        {
            title: '3M Personal Safety Division',
            text: 'Find 3M Personal Safety Division products easier with 3M\'s Product Selector and Help Me Choose web application.',
            image: 'img/work/safety/4.png',
            role: 'Development',
            count: 15,
            images: [
                {
                    src: 'img/work/safety/4.png',
                    count: 15
                },
                {
                    src: 'img/work/safety/5.png',
                    count: 15
                },
                {
                    src: 'img/work/safety/6.png',
                    count: 15
                },
                {
                    src: 'img/work/safety/7.png',
                    count: 15
                },
                {
                    src: 'img/work/safety/1.png',
                    count: 15
                },
                {
                    src: 'img/work/safety/2.png',
                    count: 15
                },
                {
                    src: 'img/work/safety/3.png',
                    count: 15
                }
            ]
        },
        {
            title: '3M Select Showcase',
            text: '3M Select Showcase, a gallery of projects featuring 3M Graphics Products and Architectural Finishes masterfully executed by our partners.',
            image: 'img/work/jaws/1.png',
            role: 'Development',
            count: 14,
            images: [
                {
                    src: 'img/work/jaws/1.png',
                    count: 14
                },
                {
                    src: 'img/work/jaws/2.png',
                    count: 14
                },
                {
                    src: 'img/work/jaws/3.png',
                    count: 14
                },
                {
                    src: 'img/work/jaws/4.png',
                    count: 14
                },
                {
                    src: 'img/work/jaws/5.png',
                    count: 14
                },
                {
                    src: 'img/work/jaws/6.png',
                    count: 14
                },
                {
                    src: 'img/work/jaws/7.png',
                    count: 14
                },
                {
                    src: 'img/work/jaws/8.png',
                    count: 14
                },
                {
                    src: 'img/work/jaws/9.png',
                    count: 14
                },
            ]
        },
        {
            title: 'Res.im',
            text: 'UX research, usability testing, and digital product design to help clients discover and capitalize on new ideas.',
            image: 'img/work/resim/1.png',
            role: 'Development',
            url: 'https://res.im',
            count: 13,
            images: [
                {
                    src: 'img/work/resim/1.png',
                    count: 13
                },
                {
                    src: 'img/work/resim/2.png',
                    count: 13
                },
                {
                    src: 'img/work/resim/3.png',
                    count: 13
                },
                {
                    src: 'img/work/resim/4.png',
                    count: 13
                },
                {
                    src: 'img/work/resim/5.png',
                    count: 13
                },
                {
                    src: 'img/work/resim/6.png',
                    count: 13
                },
                {
                    src: 'img/work/resim/7.png',
                    count: 13
                },
                {
                    src: 'img/work/resim/8.png',
                    count: 13
                }
            ]
        },
        {
            title: 'PrecedentJD',
            text: 'PrecedentJD is home to everything law students to kick-start their legal careers — from how to ace their interviews, dress the part and get hired back.',
            image: 'img/work/student/1.png',
            role: 'Development',
            url: 'https://precedentjd.com/',
            count: 12,
            images: [
                {
                    src: 'img/work/student/1.png',
                    count: 12
                },
                {
                    src: 'img/work/student/2.png',
                    count: 12
                },
                {
                    src: 'img/work/student/3.png',
                    count: 12
                },
                {
                    src: 'img/work/student/4.png',
                    count: 12
                },
                {
                    src: 'img/work/student/5.png',
                    count: 12
                }
            ]
        },
        {
            title: 'Durham College',
            text: 'Durham College is a post-secondary institution east of Toronto, with 30,000 students and campuses in Oshawa and Whitby, Ontario, and a learning site in Pickering.',
            image: 'img/work/durham/1.png',
            case: 'https://res.im/work/durham-college/',
            role: 'Front-end development',
            url: 'https://durhamcollege.ca/',
            externalPrototype: 'http://review.durham.git.resolutionim.com/styleguide',
            count: 11,
            images: [
                {
                    src: 'img/work/durham/1.png',
                    count: 11
                },
                {
                    src: 'img/work/durham/2.png',
                    count: 11
                },
                {
                    src: 'img/work/durham/3.png',
                    count: 11
                },
                {
                    src: 'img/work/durham/4.png',
                    count: 11
                },
                {
                    src: 'img/work/durham/5.png',
                    count: 11
                },
                {
                    src: 'img/work/durham/6.png',
                    count: 11
                },
                {
                    src: 'img/work/durham/7.png',
                    count: 11
                },
                {
                    src: 'img/work/durham/8.png',
                    count: 11
                },
                {
                    src: 'img/work/durham/9.png',
                    count: 11
                }
            ]
        },
		{
			title: 'ZTR Control Systems',
            text: 'ZTR improves product design, warranty, legal, part sales, and dealer loyalty through telematics and data-driven decision making.',
            image: 'img/work/ztr/ztr1.png',
            prototype: 'ztr',
            role: 'Front-end development',
            count: 9,
            images: [
             	{
                    desc: '<a target="_blank" href="work/ztr/ztr/index.html" class="cta">View prototype <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/ztr/ztr1.png',
                    count: 9
                },
                {
                    desc: '<a target="_blank" href="work/ztr/ztr/index.html" class="cta">View prototype <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/ztr/ztr2.png',
                    count: 9
                },
                {
                    desc: '<a target="_blank" href="work/ztr/ztr/index.html" class="cta">View prototype <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/ztr/ztr3.png',
                    count: 9
                },
                {
                    desc: '<a target="_blank" href="work/ztr/ztr/index.html" class="cta">View prototype <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/ztr/ztr4.png',
                    count: 9
                },
                {
                    desc: '<a target="_blank" href="work/ztr/ztr/index.html" class="cta">View prototype <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/ztr/ztr5.png',
                    count: 9
                },
                {
                    desc: '<a target="_blank" href="work/ztr/ztr/global.html" class="cta">View prototype <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/ztr/ztr6.png',
                    count: 9
                },
                {
                    desc: '<a target="_blank" href="work/ztr/ztr/global.html" class="cta">View prototype <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/ztr/ztr7.png',
                    count: 9
                },
                {
                    desc: '<a target="_blank" href="work/ztr/ztr/global.html" class="cta">View prototype <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/ztr/ztr8.png',
                    count: 9
                }
            ]
        },
		{
			title: 'Huron County',
            text: 'Huron County is located along the shores of Lake Huron. This vibrant community is the most agriculturally productive county in Ontario.',
            image: 'img/work/hc/hc3.png',
            prototype: 'huron-county',
            count: 8,
            role: 'Front-end development',
            images: [
             	{
                    desc: '<a target="_blank" href="work/huron-county/index.html" class="cta">View prototype <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/hc/hc3.png',
                    count: 8
                },
                {
                    desc: '<a target="_blank" href="work/huron-county/growing-together.html" class="cta">View prototype <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/hc/hc4.png',
                    count: 8
                },
                {
                    desc: '<a target="_blank" href="work/huron-county/childrens-services.html" class="cta">View prototype <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/hc/hc5.png',
                    count: 8
                },
                {
                    desc: '<a target="_blank" href="work/huron-county/events.html" class="cta">View prototype <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/hc/hc6.png',
                    count: 8
                },
                {
                    desc: '<a target="_blank" href="work/huron-county/index.html" class="cta">View prototype <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/hc/hc1.png',
                    count: 8
                },
                {
                    desc: '<a target="_blank" href="work/huron-county/events.html" class="cta">View prototype <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/hc/hc2.png',
                    count: 8
                },
                {
                    desc: '<a target="_blank" href="work/huron-county/global.html" class="cta">View prototype <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/hc/hc7.png',
                    count: 8
                },
            	 {
                    desc: '<a target="_blank" href="work/huron-county/global.html" class="cta">View prototype <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/hc/hc8.png',
                    count: 8
                },

            ]
        },
		{
			title: 'Confederation College',
            text: 'Located in Northern Ontario, Confederation College offers practical, hands-on programs and courses across 9 campuses to over 7600 full and part-time students each year.',
            image: 'img/work/confed/confed2.png',
            prototype: 'confederation',
            url: 'http://www.confederationcollege.ca/',
            role: 'Front-end development',
            count: 7,
            images: [
             	{
                    desc: '<a target="_blank" href="work/confed/confederation/index.html" class="cta">View prototype <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/confed/confed1.png',
                    count: 7
                },
                {
                    desc: '<a target="_blank" href="work/confed/confederation/programs.html" class="cta">View prototype <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/confed/confed2.png',
                    count: 7
                },
				{
                    desc: '<a target="_blank" href="work/confed/confederation/index.html" class="cta">View prototype <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/confed/confed3.png',
                    count: 7
                },
				{
                    desc: '<a target="_blank" href="work/confed/confederation/programs.html" class="cta">View prototype <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/confed/confed4.png',
                    count: 7
                },
				{
                    desc: '<a target="_blank" href="work/confed/confederation/global.html" class="cta">View prototype <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/confed/confed5.png',
                    count: 7
                }
            ]
        },
		{
			title: 'Golf Canada',
            text: 'Canadian Golf Course History responsive website featuring an interactive map displaying Canadian golf courses throughout history.',
            image: 'img/work/gc/gc1.png',
            case: 'https://res.im/work/gc/gc/golf-canada/',
            role: 'Development',
            count: 6,
            images: [
             	{
                    desc: 'Use the interactive map of Canada to see how golf courses have grown, moved or closed though time.',
                    src: 'img/work/gc/gc1.png',
                    count: 6
                },
                {
                    desc: 'Learn about how to use the site through the onboarding process.',
                    src: 'img/work/gc/gc2.png',
                    count: 6
                },
                
                {
                    desc: 'Check out golf courses across Canada at different points in time.',
                    src: 'img/work/gc/gc3.png',
                    count: 6
                },
                {
                    desc: 'Find out more details on each course.',
                    src: 'img/work/gc/gc4.png',
                    count: 6
                },
                {
                    desc: 'Mobile view of course details.',
                    src: 'img/work/gc/gc5.png',
                    count: 6
                },
                {
                    desc: 'Interactive map mobile view.',
                    src: 'img/work/gc/gc6.png',
                    count: 6
                },
                {
                    desc: 'List view of Canadian courses at specific points in time.',
                    src: 'img/work/gc/gc7.png',
                    count: 6
                }
            ]
        },
	    {
            title: 'Verto360',
            text: 'Verto360 is a company from London Ontario that designs, manages, builds and furnishes commercial building interiors.',
            image: 'img/work/verto/verto1.png',
            url: 'http://verto360.com/',
            role: 'Development',
            count: 3,
            images: [
                {
                    src: 'img/work/verto/verto1.png',
                    count: 3
                },
                {
                    src: 'img/work/verto/verto2.png',
                    count: 3
                },
                {
                    src: 'img/work/verto/verto3.png',
                    count: 3
                },
                {
                    src: 'img/work/verto/verto4.png',
                    count: 3
                },
                {
                    src: 'img/work/verto/verto5.png',
                    count: 3
                },
                {
                    src: 'img/work/verto/verto6.png',
                    count: 3
                }
            ]
        },
        {
            title: 'Fitness Health Match',
            text: 'FHMatch is a social networking platform that connects people with a broad range of local fitness, health, and wellness professionals.',
            image: 'img/work/fhm/fhm5.png',
            url: 'http://www.fhmatch.com/',
            role: 'Front-end development',
            count: 1,
            images: [
                {
                    desc: '<a target="_blank" href="http://www.fhmatch.com/" class="cta">Visit website <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/fhm/fhm1.png',
                    count: 1
                },
                 {
                    desc: '<a target="_blank" href="http://www.fhmatch.com/register" class="cta">Visit website <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/fhm/fhm2.png',
                    count: 1
                },
                 {
                    desc: 'Browse fitness and health related articles.<br><a target="_blank" href="http://www.fhmatch.com/articles" class="cta">Visit website <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/fhm/fhm3.png',
                    count: 1
                },
                 {
                    desc: 'Easily find health and fitness professional in your area.<br><a target="_blank" href="http://www.fhmatch.com/" class="cta">Visit website <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/fhm/fhm4.png',
                    count: 1
                },
                 {
                    desc: 'Connect with professional to book appointments.<br><a target="_blank" href="http://www.fhmatch.com/" class="cta">Visit website <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/fhm/fhm5.png',
                    count: 1
                }
            ]
        },
       {
            title: 'Redeemer University College',
            text: 'Redeemer University College is an undergraduate university known for providing a high-quality liberal arts and sciences university education.',
            image: 'img/work/redeemer/redeemer3.png',
            url: 'https://www.redeemer.ca/',
            case: 'https://res.im/work/redeemer/redeemer-university-college/',
            role: 'Development',
            count: 2,
            images: [
                {
                    desc: '<a target="_blank" href="https://www.redeemer.ca/" class="cta">Visit website <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/redeemer/redeemer1.png',
                    count: 2
                },
                 {
                    desc: '<a target="_blank" href="https://www.redeemer.ca/stories/" class="cta">Visit website <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/redeemer/redeemer2.png',
                    count: 2
                },
                 {
                    desc: '<a target="_blank" href="https://www.redeemer.ca/programs/art/" class="cta">Visit website <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/redeemer/redeemer3.png',
                    count: 2
                },
                 {
                    desc: '<a target="_blank" href="https://www.redeemer.ca/admissionscounsellor/" class="cta">Visit website <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/redeemer/redeemer4.png',
                    count: 2
                },
                 {
                    desc: '<a target="_blank" href="https://www.redeemer.ca/contact/map-and-directions/campus-tour/" class="cta">Visit website <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/redeemer/redeemer5.png',
                    count: 2
                },
                {
                    desc: '<a target="_blank" href="https://www.redeemer.ca/redeemer-today/" class="cta">Visit website <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/redeemer/redeemer6.png',
                    count: 2
                }
            ]
        },
        {
            title: 'Nissan Infiniti',
            text: 'This prototype and style guide was created for Autodata Solutions as a starting point for the Nissan Infiniti Pricing Tool web application.',
            image: 'img/work/ni/ni1.png',
            prototype: 'nissan',
            count: 10,
            role: 'Front-end development',
            images: [
                {
                    desc: '<a target="_blank" href="work/ni/nissan/layout.html" class="cta">View prototype <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/ni/ni1.png',
                    count: 10
                },
                {
                    desc: '<a target="_blank" href="work/ni/nissan/layout.html" class="cta">View prototype <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/ni/ni2.png',
                    count: 10
                },
                {
                    desc: '<a target="_blank" href="work/ni/nissan/metrics.html" class="cta">View prototype <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/ni/ni3.png',
                    count: 10
                },
                {
                    desc: '<a target="_blank" href="work/ni/nissan/global.html" class="cta">View prototype <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/ni/ni4.png',
                    count: 10
                },
                {
                    desc: '<a target="_blank" href="work/ni/nissan/index.html" class="cta">View prototype <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/ni/ni5.png',
                    count: 10
                },
                {
                    desc: '<a target="_blank" href="work/ni/nissan/index.html" class="cta">View prototype <i class="fas fa-arrow-right"></i></a>',
                    src: 'img/work/ni/ni6.png',
                    count: 10
                }

            ]
        },
        {
            title: 'Build & Price',
            text: 'Use Chrysler\'s Build and Price tool to customize your new vehicle exactly how you want it. Choose the color, trim, options and more and easily calculate the costs.',
            image: 'img/work/bp/bp1.png',
            url: 'http://www.chrysler.com/hostc/bmo/CUC201501/models.do?',
            role: 'Front-end development',
            count: 4,
            images: [
                {
                    src: 'img/work/bp/bp1.png',
                    count: 4
                },
                {
                    src: 'img/work/bp/bp3.png',
                    count: 4
                },
                {
                    src: 'img/work/bp/bp4.png',
                    count: 4
                },
                {
                    src: 'img/work/bp/bp5.png',
                    count: 4
                },
                {
                    src: 'img/work/bp/bp6.png',
                    count: 4
                },
                {
                    src: 'img/work/bp/bp7.png',
                    count: 4
                },
                {
                    src: 'img/work/bp/bp8.png',
                    count: 4
                },
                {
                    src: 'img/work/bp/bp9.png',
                    count: 4
                },
                {
                    src: 'img/work/bp/bp10.png',
                    count: 4
                },
                {
                    src: 'img/work/bp/bp11.png',
                    count: 4
                },
                {
                    src: 'img/work/bp/bp12.png',
                    count: 4
                },
                {
                    src: 'img/work/bp/bp13.png',
                    count: 4
                },
                {
                    src: 'img/work/bp/bp14.png',
                    count: 4
                },
                {
                    src: 'img/work/bp/bp15.png',
                    count: 4
                },
                {
                    src: 'img/work/bp/bp16.png',
                    count: 4
                },
                {
                    src: 'img/work/bp/bp17.png',
                    count: 4
                },
                {
                    src: 'img/work/bp/bp18.png',
                    count: 4
                },
                {
                    src: 'img/work/bp/bp19.png',
                    count: 4
                },
                {
                    src: 'img/work/bp/bp10.png',
                    count: 4
                }
            ]
        }
    ];

})