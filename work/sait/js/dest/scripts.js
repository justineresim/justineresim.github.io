/*------------------------------------*\
    Variables
\*------------------------------------*/

var mobileBreakpoint = 800;
var isMobile;

/*------------------------------------*\
    Functions
\*------------------------------------*/

function resized(){
 if ($(window).width() < mobileBreakpoint) {
       isMobile = true;
       $('body').addClass('isMobile');
       $('body').removeClass('isDesktop');
       $('.hideMobile').css({'display':'none'});
    } else {
       isMobile = false;
       $('body').removeClass('g-mobile-nav-open');
       $('.mega-menu').css({'display':'none'});
       $('.mobileNavToggle.ion-chevron-up').toggleClass('ion-chevron-down');
       $('.mobileNavToggle.ion-chevron-up').toggleClass('ion-chevron-up');
       $('body').addClass('isDesktop');
       $('body').removeClass('isMobile');
       $('.hideDesktop').css({'display':'none'});
    }
}

//Program page tabs
function showTab(id, el) {
    $('.program-tab').hide();
    $(id).show();
    $('.g-tabs a').removeClass('g-active');
    $(el).addClass('g-active');
    $(el).siblings().removeClass('g-show');
    $('html,body').animate({
        scrollTop: $('#g-content').offset().top - 110
    })
}

//Program/courses tables
function showCourses() {
    $('body').addClass('showCourses');
    $('body').removeClass('showPrograms');
    $('#coursesTab').addClass('g-active');
    $('#programsTab').removeClass('g-active');
}

function showPrograms() {
    $('body').removeClass('showCourses');
    $('body').addClass('showPrograms');
    $('#coursesTab').removeClass('g-active');
    $('#programsTab').addClass('g-active');
}

//homepage banner
function showBanner(slide, el) {
    if(isMobile === false){
        var slide = $('.'+slide);
        setTimeout(function(){
            var isHovered = $(el).is(":hover");
            if(isHovered === true){
                slide.siblings('.banner').hide();
                slide.show();
                $('.banner-nav a').removeClass('active');
                $(el).addClass('active');  
            }
        }, 300);
    }
}


/*------------------------------------*\
    Twitter
\*------------------------------------*/ 

//Homepage
if($('#twitterHP').length){
    var config = {
      "profile": {
        "screenName": 'sait'
      },
      "dataOnly": true,
      "maxTweets": 1,
      "customCallback": populateHPTpl
    };
    twitterFetcher.fetch(config);
}

function populateHPTpl(tweets){
    var element = document.getElementById('twitterHP');
    html = '<div class="g-content"><a target="_blank" href="https://twitter.com/sait" class="f-inner"><span class="ion-social-twitter g-icon-left"></span>@SAIT</a>'
        + '<p>' + tweets[0].tweet + '</p></div>';
    element.innerHTML = html; 
}


//@SAIT twitter

if($('#saitTweet1').length){
    var config = {
      "profile": {
        "screenName": 'sait'
      },
      "dataOnly": true,
      "maxTweets": 2,
      "customCallback": populateTplSaitTweet
    };
    twitterFetcher.fetch(config);
}

function populateTplSaitTweet(tweets){
    var element = document.getElementById('saitTweet1');
    if(tweets[0].image){
       html = '<a target="_blank" href="' + tweets[0].permalinkURL + '" class="g-card-img-header" style="background-image: url(' + tweets[0].image + ');">' 
        + '</a>'
        +'<div class="g-card-content-sm"><a target="_blank" href="https://twitter.com/sait"><span class="ion-social-twitter g-icon-left"></span>@SAIT</a>'
        + '<p>' + tweets[0].tweet + '</p></div>';
        element.innerHTML = html; 
    }else{
        html = '<div class="g-card-content-sm g-card-content-full"><a target="_blank" href="https://twitter.com/sait"><span class="ion-social-twitter g-icon-left"></span>@SAIT</a>'
        + '<p>' + tweets[0].tweet + '</p></div>';
        element.innerHTML = html; 
    }

    var element2 = document.getElementById('saitTweet2');
    if(tweets[1].image){
       html = '<a target="_blank" href="' + tweets[1].permalinkURL + '" class="g-card-img-header" style="background-image: url(' + tweets[1].image + ');">' 
        + '</a>'
        +'<div class="g-card-content-sm"><a target="_blank" href="https://twitter.com/sait"><span class="ion-social-twitter g-icon-left"></span>@SAIT</a>'
        + '<p>' + tweets[1].tweet + '</p></div>';
        element2.innerHTML = html; 
    }else{
        html = '<div class="g-card-content-sm g-card-content-full"><a target="_blank" href="https://twitter.com/sait"><span class="ion-social-twitter g-icon-left"></span>@SAIT</a>'
        + '<p>' + tweets[1].tweet + '</p></div>';
        element2.innerHTML = html; 
    }
}

//@SAITresearch twitter

if($('#researchTweet1').length){
    var config = {
      "profile": {
        "screenName": 'saitresearch'
      },
      "dataOnly": true,
      "maxTweets": 4,
      "customCallback": populateTplResearchTweet
    };
    twitterFetcher.fetch(config);
}

function populateTplResearchTweet(tweets){
    var element = document.getElementById('researchTweet1');
    if(tweets[0].image){
       html = '<a target="_blank" href="' + tweets[0].permalinkURL + '" class="g-card-img-header" style="background-image: url(' + tweets[0].image + ');">' 
        + '</a>'
        +'<div class="g-card-content-sm"><a target="_blank" href="https://twitter.com/sait"><span class="ion-social-twitter g-icon-left"></span>@SAIT</a>'
        + '<p>' + tweets[0].tweet + '</p></div>';
        element.innerHTML = html; 
    }else{
        html = '<div class="g-card-content-sm g-card-content-full"><a target="_blank" href="https://twitter.com/sait"><span class="ion-social-twitter g-icon-left"></span>@SAIT</a>'
        + '<p>' + tweets[0].tweet + '</p></div>';
        element.innerHTML = html; 
    }

    var element2 = document.getElementById('researchTweet2');
    if(tweets[1].image){
       html = '<a target="_blank" href="' + tweets[1].permalinkURL + '" class="g-card-img-header" style="background-image: url(' + tweets[1].image + ');">' 
        + '</a>'
        +'<div class="g-card-content-sm"><a target="_blank" href="https://twitter.com/saitresearch"><span class="ion-social-twitter g-icon-left"></span>@SAITresearch</a>'
        + '<p>' + tweets[1].tweet + '</p></div>';
        element2.innerHTML = html; 
    }else{
        html = '<div class="g-card-content-sm g-card-content-full"><a target="_blank" href="https://twitter.com/saitresearch"><span class="ion-social-twitter g-icon-left"></span>@SAITresearch</a>'
        + '<p>' + tweets[1].tweet + '</p></div>';
        element2.innerHTML = html; 
    }

    var element3 = document.getElementById('researchTweet3');
    if(tweets[2].image){
       html = '<a target="_blank" href="' + tweets[2].permalinkURL + '" class="g-card-img-header" style="background-image: url(' + tweets[2].image + ');">' 
        + '</a>'
        +'<div class="g-card-content-sm"><a target="_blank" href="https://twitter.com/saitresearch"><span class="ion-social-twitter g-icon-left"></span>@SAITresearch</a>'
        + '<p>' + tweets[2].tweet + '</p></div>';
        element3.innerHTML = html; 
    }else{
        html = '<div class="g-card-content-sm g-card-content-full"><a target="_blank" href="https://twitter.com/saitresearch"><span class="ion-social-twitter g-icon-left"></span>@SAITresearch</a>'
        + '<p>' + tweets[2].tweet + '</p></div>';
        element3.innerHTML = html; 
    }

    var element4 = document.getElementById('researchTweet4');
    if(tweets[3].image){
       html = '<a target="_blank" href="' + tweets[3].permalinkURL + '" class="g-card-img-header" style="background-image: url(' + tweets[3].image + ');">' 
        + '</a>'
        +'<div class="g-card-content-sm"><a target="_blank" href="https://twitter.com/saitresearch"><span class="ion-social-twitter g-icon-left"></span>@SAITresearch</a>'
        + '<p>' + tweets[3].tweet + '</p></div>';
        element4.innerHTML = html; 
    }else{
        html = '<div class="g-card-content-sm g-card-content-full"><a target="_blank" href="https://twitter.com/saitresearch"><span class="ion-social-twitter g-icon-left"></span>@SAITresearch</a>'
        + '<p>' + tweets[3].tweet + '</p></div>';
        element4.innerHTML = html; 
    }
}

//@SAITAlumni

if($('#alumni1').length){
    var config = {
        "profile": {
        "screenName": 'SAITAlumni'
    },
        "dataOnly": true,
        "maxTweets": 2,
        "customCallback": populateAlumniTpl
    };
    twitterFetcher.fetch(config);
}


function populateAlumniTpl(tweets){
    var element = document.getElementById('alumni1');
    if(tweets[0].image){
       html = '<a target="_blank" href="' + tweets[0].permalinkURL + '" class="g-card-img-header" style="background-image: url(' + tweets[0].image + ');">' 
        + '</a>'
        +'<div class="g-card-content-sm"><a target="_blank" href="https://twitter.com/saitalumni"><span class="ion-social-twitter g-icon-left"></span>@SAITAlumni</a>'
        + '<p>' + tweets[0].tweet + '</p></div>';
        element.innerHTML = html; 
    }else{
        html = '<div class="g-card-content-sm g-card-content-full"><a target="_blank" href="https://twitter.com/saitalumni"><span class="ion-social-twitter g-icon-left"></span>@SAITAlumni</a>'
        + '<p>' + tweets[0].tweet + '</p></div>';
        element.innerHTML = html; 
    }

    var element2 = document.getElementById('alumni2');
    if(tweets[1].image){
       html = '<a target="_blank" href="' + tweets[1].permalinkURL + '" class="g-card-img-header" style="background-image: url(' + tweets[1].image + ');">' 
        + '</a>'
        +'<div class="g-card-content-sm"><a target="_blank" href="https://twitter.com/saitalumni"><span class="ion-social-twitter g-icon-left"></span>@SAITAlumni</a>'
        + '<p>' + tweets[1].tweet + '</p></div>';
        element2.innerHTML = html; 
    }else{
        html = '<div class="g-card-content-sm g-card-content-full"><a target="_blank" href="https://twitter.com/saitalumni"><span class="ion-social-twitter g-icon-left"></span>@SAITAlumni</a>'
        + '<p>' + tweets[1].tweet + '</p></div>';
        element2.innerHTML = html; 
    }
}



$(document).ready(function() {


    /*-----------------------------------------*\
                    General JS
    \*------------------------------------------*/

    //scroll to top
    $('.g-scroll-up').click(function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
    });


    //Button Toggle
    $('.g-toggle a').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('g-active');
        $(this).siblings().toggleClass('g-active');
    });

    //Social feed sections - load more/show less
    $('.toggleSocial').click(function(e) {
        e.preventDefault();
        if($('.g-social-hidden').is(":visible")){
            $(this).html('Load More');
        }else{
            $(this).html('Show Less');
        }
        $('.g-social-hidden').slideToggle();
    });

    //initialize swipebox - lightbox image galleries
    $( '.swipebox' ).swipebox({
        hideBarsDelay : 0, // delay before hiding bars on desktop
        removeBarsOnMobile : false
    });

    //initialize tooltips
    $('.tooltip').tooltipster({
        maxWidth: 280,
        offsetY: -5
    });

    $('.tooltip-login').tooltipster({
        maxWidth: 280,
        offsetY: -10,
        interactive: true,
        side: 'bottom',
        trigger: 'hover',
        content: $('<a>MySAIT</a><br><a>D2L</a>')
    });

    $('.tooltip-open').tooltipster({
        maxWidth: 280,
        offsetY: -5,
        content: $('<span>This program has available seats. Applicants are encouraged to apply to programs listed as open.</span>')
    });

    $('.tooltip-waitlisted').tooltipster({
        maxWidth: 280,
        offsetY: -5,
        interactive: true,
        content: $('<span>You will be offered admission to the program if a seat becomes available. Contact <a>admissions@sait.ca</a> and include your SAIT ID number for more information on your program’s waitlist.</span>')
    });

    $('.tooltip-blended').tooltipster({
        maxWidth: 280,
        offsetY: -5,
        content: $('<span>Blended options involve online learning combined with classroom activities.</span>')
    });

    $('.tooltip-closed').tooltipster({
        maxWidth: 280,
        offsetY: -5,
        content: $('<span>The application deadline for this program has passed. We are no longer receiving applications.</span>')
    });

    
    //add classes to body for mobile/desktop
    if ($(window).width() < mobileBreakpoint) {
       isMobile = true;
       $('body').addClass('isMobile');
    } else {
       isMobile = false;
       $('body').addClass('isDesktop');
    }

    window.addEventListener("resize", resized);


    //Responsive tables - show/hide for tablet/mobile
    $('.g-open-link').click(function() {
        if ($(this).hasClass('ion-plus-circled')) {
            $(this).addClass('ion-minus-circled');
            $(this).removeClass('ion-plus-circled');
            $(this).parent().siblings().css({
                'display': 'block'
            });
        } else {
            $(this).removeClass('ion-minus-circled');
            $(this).addClass('ion-plus-circled');
            $(this).parent().siblings().css({
                'display': 'none'
            });
        }
    });

    $('.g-accord-header').click(function() {
        $(this).next().slideToggle();
        var icon = $(this).find('.g-icon')
        icon.toggleClass('ion-plus-round');
        icon.toggleClass('ion-minus-round');
    })

    //basic tabs
    $('a.tabChange').click(function(event) {
        event.preventDefault();
        $(this).addClass('g-active');
        $(this).siblings('.tabChange').removeClass('g-active');
        $('.g-tab-cta').removeClass('g-active');
        var tab = $(this).data('tab');
        $(tab).addClass('g-active');
        $(tab).siblings('.g-tab-content').removeClass('g-active');
    })

    /*------------------------------------*\
                    Instagram
    \*------------------------------------*/ 

    //homepage
    if($('#instafeed').length){
        var userFeed = new Instafeed({
            get: 'user',
            clientId: '8796ea28ab0c4239a296052d9a8e5b0e',
            accessToken: '308019989.1677ed0.1573cbd7c18f4514bc7c55443f0a335a',
            userId: '308019989',
            limit: 4,
            sortBy: 'most-recent',
            template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
            resolution: 'low_resolution'
        });
        userFeed.run();
    }


    //social cards 
    if($('#saitInstagram1').length){
        var userFeed = new Instafeed({
            get: 'user',
            clientId: '8796ea28ab0c4239a296052d9a8e5b0e',
            accessToken: '308019989.1677ed0.1573cbd7c18f4514bc7c55443f0a335a',
            userId: '308019989',
            target: 'saitInstagram1',
            limit: 1,
            sortBy: 'most-recent',
            template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
            resolution: 'standard_resolution'
        });
        userFeed.run();
    }

    if($('#saitInstagram2').length){
        var userFeed = new Instafeed({
            get: 'user',
            clientId: '8796ea28ab0c4239a296052d9a8e5b0e',
            accessToken: '308019989.1677ed0.1573cbd7c18f4514bc7c55443f0a335a',
            userId: '308019989',
            target: 'saitInstagram2',
            limit: 2,
            sortBy: 'most-recent',
            template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
            resolution: 'standard_resolution'
        });
        userFeed.run();
    }

    
    /*-----------------------------------------*\
                  Global Header
    \*------------------------------------------*/


    //Main navigation hover
    $(".main-menu > li > a").hover(

        function() {
            if(isMobile === false){
                $(this).parent().siblings().removeClass('g-active');
                $(this).parent().addClass('g-active');

                var top = $(".headers-container").height();

                if ($('body.fixed-header').length > 0) {
                    top = 50;
                }else if(top === 103) {
                    var scrollTop     = $(window).scrollTop(),
                        elementOffset = $('.headers-container').offset().top,
                        top      = (elementOffset - scrollTop + 103);
                }

                $('header .mega-menu').css({
                    'top': top
                });

                $('header .logo').removeClass('box-shadow');
            }
        },

        function() {
            // $( this ).find( "span:last" ).remove();
            // $( ".main-menu > li > a" ).removeClass('g-active');
        }
    );

    //Main navigation hide
    $(".main-menu-row").hover(
        function() {
            // $( this ).parent().siblings().children().removeClass('g-active');
            // $( this ).addClass('g-active');
        },
        function() {
            if(isMobile === false){
                $(".main-menu > li").removeClass('g-active');
                $('header .logo').addClass('box-shadow');
            }
        }
    );

    //fixed/smaller header on scroll
    $(window).on("scroll touchmove", function(e) {
        //don't allow scrolling if we have the header search section open - fixes mobile bug
        if($('.search-section').is(":visible") && isMobile === true){
            $('body').css({'overflow' : 'hidden'});
        }else{

            $('body').toggleClass('fixed-header', $(document).scrollTop() > 51);
            if ($(document).scrollTop() > 0) {
                $('.search-section, .recently-viewed').slideUp();
                $(".main-menu > li").removeClass('g-active');
                $('header .logo').addClass('box-shadow');
            }
        }

        //show scroll to top arrow on mobile on longer pages. 
        if(isMobile === true){
            if($(document).scrollTop() > 1500 && $('.g-scroll-up').is(":hidden") ){
                $('.g-scroll-up').fadeIn();
            }else if($(document).scrollTop() <= 1500 && $('.g-scroll-up').is(":visible") ){
                $('.g-scroll-up').fadeOut();
            }
        }
        
    });


    //Hide search and recently viewed when you interact with the site
    $('html').click(function() {
        $('body').css({'overflow' : 'visible'});
        $('.search-section, .recently-viewed').slideUp();
        $(".main-menu > li").removeClass('g-active');
        $('header .logo').addClass('box-shadow');
    });

    $('.headers-container').click(function(event) {
        event.stopPropagation();
    });

    //Main naviation - mobile menu
    $('.navToggle, .g-overlay').click(function(e) {
        e.preventDefault();
        $('body').toggleClass('g-mobile-nav-open');
    });

    $('.mobileNavToggle').click(function(e){
        var ele = $(this);
        if(ele.parent().siblings().children('.ion-chevron-up + .mega-menu').length > 0){
           ele.parent().siblings().children('.ion-chevron-up + .mega-menu').slideUp('fast', function(){
                $(this).prev().toggleClass('ion-chevron-down');
                $(this).prev().toggleClass('ion-chevron-up');
                ele.toggleClass('ion-chevron-down');
                ele.toggleClass('ion-chevron-up');
                ele.next().slideToggle('fast', function() {
                    if(ele.hasClass('ion-chevron-up') === true){
                       $('.main-menu').animate({
                            scrollTop: $(this).offset().top - $(window).scrollTop() - 50
                        }, 100); 
                    }
                });
            }); 
        }else{
            ele.toggleClass('ion-chevron-down');
            ele.toggleClass('ion-chevron-up');
            ele.next().slideToggle('fast', function() {
                if($(this).prev().hasClass('ion-chevron-up') === true){
                   $('.main-menu').animate({
                        scrollTop: $(this).offset().top - $(window).scrollTop() - 50
                    }, 100); 
                }
            });
        }
    });

    //Recently viewed header
    $('.recentlyViewedToggle').click(function(e) {
        e.preventDefault();
        $('.search-section').slideUp();
        $('.recently-viewed').slideToggle();
    });

    //Recently viewed header - buttons
    $('.toggleCheck').click(function(e) {
        e.preventDefault();
        $(this).parent().fadeOut('fast');
    });

    //Recently viewed & search header
    $('.close-btn').click(function(e) {
        e.preventDefault();
        $('.search-section, .recently-viewed').slideUp();
    });

    //Search bar header
    $('.searchToggle').click(function(e) {
        e.preventDefault();
        $('.recently-viewed').slideUp();
        $('.search-section').slideToggle(function(){
            if(isMobile === false && ($('.search-section').css('display') !== 'none')){
                console.log('asd');
                $('#searchInput').focus();
            }
        });
        
    });


    /*-----------------------------------------*\
                  Program pages
    \*------------------------------------------*/


    //fixed tab nav on scroll - program pages
    if($('.g-tabs-container').length>0){
        $(window).on("scroll touchmove", function() {
            var scrollTop     = $(window).scrollTop(),
            elementOffset = $('.g-tabs-container').offset().top,
            distance      = (elementOffset - 50);
            $('.g-tabs-container').toggleClass('g-fixed', $(document).scrollTop() > distance);
        });  
    }

    //Program page tabs - mobile menu
    $('.g-tab-toggle').click(function(e) {
        e.preventDefault();
        $(this).siblings().toggleClass('g-show');
    });



    /*-----------------------------------------*\
                     Homepage
    \*------------------------------------------*/


    //banner nav
     $('.banner-nav a').click(function(e) {
        if(isMobile === false){
            e.preventDefault();
        }
    });


    //Homepage interest slider - select interest function for desktop only
    $('.g-interest-slider .g-interest-slide .g-img').click(function() {
        if(isMobile === false){
            $(this).parent().siblings().removeClass('g-open');
            $(this).parent().addClass('g-open');
            var activeSlide = $(this).parent();
            var index = $(activeSlide).attr("data-slick-index");
            $('.g-interest-slider').slick('slickGoTo', index);
        }
    });

    $('.g-interest-slider').on('afterChange', function(event, slick, currentSlide){
        if(isMobile === false){
            $('.g-interest-slider .g-interest-slide:not(.slick-current)').removeClass('g-open');
        }
    });

    //home page video modal (remodal - http://vodkabears.github.io/remodal/) - play on open and stop on close.
    $(document).on('closing', '#videoRemodal', function (e) {
        $('#saitVideo')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');   
    });

    $(document).on('opened', '#videoRemodal', function () {
        $('#saitVideo')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*'); 
    });



    /*-----------------------------------------*\
                     Sliders
    \*------------------------------------------*/


    //homepage slider
    $('.g-interest-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5,
        cssEase: 'linear',
        variableWidth: true,
        speed: 300,
        initialSlide: 3,
        infinite: false,
        focusOnSelect: false,
        swipeToSlide: true,
        responsive: [{
            breakpoint: 800,
            settings: {
                centerMode: false,
                variableWidth: false,
                initialSlide: 0,
                infinite: true,
                centerPadding: '40px',
                slidesToScroll: 3,
                slidesToShow: 4
            }
        },
        {
            breakpoint: 650,
            settings: {
                centerMode: false,
                variableWidth: false,
                initialSlide: 0,
                infinite: true,
                centerPadding: '40px',
                slidesToScroll: 3,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 450,
            settings: {
                centerMode: false,
                variableWidth: false,
                initialSlide: 0,
                infinite: true,
                centerPadding: '40px',
                slidesToScroll: 2,
                slidesToShow: 2
            }
        }]
    });

    //Image Slider
    $('.g-image-slider').slick({
        centerMode: true,
        centerPadding: '330px',
        slidesToShow: 1,
        cssEase: 'linear',
        speed: 700,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                centerPadding: '200px',
                slidesToShow: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                centerPadding: '100px',
                slidesToShow: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                centerPadding: '30px',
                slidesToShow: 1
            }
        }]
    });


    //card slider - inspiring stories - make it a slider if we have more then one item
    if($('.card-slider-cards .g-slide').length > 1){

        $('.card-slider-cards').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.card-slider-text',
            centerPadding: '65px',
            centerMode: true,
            focusOnSelect: true,
            responsive: [{
                breakpoint: 1100,
                settings: {
                    centerPadding: '30px',
                }
            }, {
                breakpoint: 940,
                settings: {
                    centerPadding: '260px',
                }
            }, {
                breakpoint: 800,
                settings: {
                    centerPadding: '150px',
                }
            }, {
                breakpoint: 700,
                settings: {
                    centerPadding: '110px',
                }
            }, {
                breakpoint: 520,
                settings: {
                    centerPadding: '50px',
                }
            }]
        });

        $('.card-slider-text').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            asNavFor: '.card-slider-cards'
        });

    }


    //Small card slider (campus page)
    $('.g-sm-slider').slick({
        slidesToShow: 3,
        cssEase: 'linear',
        speed: 700,
        focusOnSelect: false,
        swipeToSlide: true,
        touchMove: false,
        responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 2
            }
        },{
            breakpoint: 940,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 540,
            settings: {
                slidesToShow: 1
            }
        }]
    });



    /*-----------------------------------------*\
            How to Apply - static page
    \*------------------------------------------*/


    //how to apply page - fixed nav and active states on scroll (desktop only)
    if($('.g-apply-nav-container').length>0){
        $(window).on("scroll touchmove", function() {
            if(isMobile === false){

                //fixed nav on scroll
                var scrollTop = $(window).scrollTop(),
                elementOffset = $('.g-apply-nav-container').offset().top,
                distance      = (elementOffset - 50);
                $('.g-apply-nav-container').toggleClass('g-fixed', $(document).scrollTop() > distance);

                //nav active state on scroll
                $('.g-timeline-section').each(function() {
                    var currentSection = $(this);
                    var id = $(this).attr('id');
                    if (currentSection.position().top + currentSection.height() <= scrollTop) {
                        if(!$('[data-scroll=' + id + ']').hasClass('.g-active')){
                            $('.g-apply-nav a').removeClass('g-active');
                            $('[data-scroll=' + id + ']').addClass('g-active');   
                        }
                    }
                });
            }
        });  
    }

    //apply nav scroll
    $('.g-apply-nav a').click(function(event){
        var distance = 150;
        if(isMobile === true){
            var distance = 80;
        }
        event.preventDefault();
        var el = $(this).data('scroll');
        $('.g-apply-nav a').removeClass('g-active');
        $(this).addClass('g-active');
        $('html, body').animate({
            scrollTop: $("#"+el).offset().top - distance
        }, 500);
    })

});
