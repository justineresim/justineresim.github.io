myApp.controller('HomeCtrl', function ($scope) {

      $scope.fancyBox = function(par) {
        var className = '.fancy-box-'+par;
        openFancyBox(className);
      }

    $scope.companies = [
        ["chrysler-white.png", "chrysler.png"],
        ["asc-white.png", "asc.png"],
        ["dodge-white.png", "dodge.png"],
        ["res-white.png", "res.png"],
        ["chrome-data-white.png", "chrome-data.png"],
        ["infiniti-white.png", "infiniti.png"],
        ["ram-white.png", "ram.png"],
        ["fiat-white.png", "fiat.png"],
        ["cc-white.png", "cc.png"],
        ["jeep-white.png", "jeep.png"],
        ["verto-white.png", "verto.png"],
        ["gm-white.png", "gm.png"],
        ["fhmatch-white.png", "fhmatch.png"],
        ["inner-geek-white.png", "inner-geek.png"],
    ];

    $scope.featured = [
        {
            title: 'Fitness Health Match',
            text: 'FHMatch is a social networking platform that connects people with a broad range of local fitness, health, and wellness professionals.',
            image: 'img/work/fhm5.png',
            url: 'http://www.fhmatch.com/',
            count: 1,
            images: [
                {
                    desc: 'Fitness Health Match Homepage',
                    src: 'img/work/fhm1.png',
                    count: 1
                },
                 {
                    desc: 'Create an account screen.',
                    src: 'img/work/fhm2.png',
                    count: 1
                },
                 {
                    desc: 'Browse fitness and health related articles.',
                    src: 'img/work/fhm3.png',
                    count: 1
                },
                 {
                    desc: 'Easily find health and fitness professional in your area.',
                    src: 'img/work/fhm4.png',
                    count: 1
                },
                 {
                    desc: 'Connect with professional to book appointments.',
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
            count: 2,
            images: [
                {
                    desc: 'Redeemer University Homepage',
                    src: 'img/work/redeemer1.png',
                    count: 2
                },
                 {
                    desc: 'Stories - view and filter testimonials about the College by Students, Alumni and Faculty.',
                    src: 'img/work/redeemer2.png',
                    count: 2
                },
                 {
                    desc: 'Art - Program Page. Learn about programs that the College offers.',
                    src: 'img/work/redeemer3.png',
                    count: 2
                },
                 {
                    desc: 'Admission Counsellors - find your admissions counsellor to help with whatever you need.',
                    src: 'img/work/redeemer4.png',
                    count: 2
                },
                 {
                    desc: 'Campus Tour - Interactive map of different locations around the campus.',
                    src: 'img/work/redeemer5.png',
                    count: 2
                },
                {
                    desc: 'Redeemer Today - Easily find current events and news happening around the campus.',
                    src: 'img/work/redeemer6.png',
                    count: 2
                }
            ]
        },
        {
            title: 'Build & Price',
            text: 'Chrysler\'s Build & Price web application.',
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
        }
    ];


    // $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    // $scope.addItem = function() {
    //     var newItemNo = $scope.items.length + 1;
    //     $scope.items.push('Item ' + newItemNo);
    // };

    // $scope.status = {
    //     isFirstOpen: true,
    //     isFirstDisabled: false
    // };
});