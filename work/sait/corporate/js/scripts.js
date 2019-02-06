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
       $('body').removeClass('fixed-header');
       $('.hideMobile').css({'display':'none'});
    } else {
       isMobile = false;
       $('body').removeClass('g-mobile-nav-open');
       $('body').addClass('isDesktop');
       $('body').removeClass('isMobile');
       $('.hideDesktop').css({'display':'none'});
    }
}

$(document).ready(function() {


    /*-----------------------------------------*\
                    General JS
    \*------------------------------------------*/

    //initialize tooltips
    $('.tooltip').tooltipster({
        maxWidth: 280,
        offsetY: -5
    });

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


    
    //add classes to body for mobile/desktop
    if ($(window).width() < mobileBreakpoint) {
       isMobile = true;
       $('body').addClass('isMobile');
    } else {
       isMobile = false;
       $('body').addClass('isDesktop');
    }

    window.addEventListener("resize", resized);


    /*-----------------------------------------*\
                  Global Header
    \*------------------------------------------*/

    //---- header tooltips
    $('.tooltip-about').tooltipster({
        maxWidth: 280,
        offsetY: -10,
        interactive: true,
        side: 'bottom',
        trigger: 'hover',
        content: $("<a>Team</a><br><a>What's New</a>")
    });
    $('.tooltip-corporate').tooltipster({
        maxWidth: 300,
        offsetY: -10,
        interactive: true,
        side: 'bottom',
        trigger: 'hover',
        content: $('<a href="/corporate/corporate-community-engagement">Corporate & Community Engagement</a><br><a>Research</a><br><a>Employers</a><br><a>Donors</a>')
    });

    //fixed/smaller header on scroll - only for desktop
    $(window).on("scroll touchmove", function(e) {
        if(isMobile === false){
            $('body').toggleClass('fixed-header', $(document).scrollTop() > 51);
            if ($(document).scrollTop() > 0) {
                $('.search-section').slideUp();
            }
        }
    });
    

    //Hide search and menu when you interact with the site
    $('html').on('click touch', function () {
        $('body').css({'overflow' : 'visible'});
        $('.search-section').slideUp();
        $('body').removeClass('g-mobile-nav-open');
    });

    $('.headers-container').on('click touch', function (event) {
        event.stopPropagation();
    });

    //Main navigation - mobile menu
    $('.navToggle, .g-corporate-overlay').click(function(e) {
        e.preventDefault();
        $('body').toggleClass('g-mobile-nav-open');
        $('.search-section').slideUp();
    });

    //child mobile menu toggle
    $('.mobileMenuToggle').click(function(e) {
        $(this).next().slideToggle('fast');
    });

    //search header
    $('.close-btn').click(function(e) {
        e.preventDefault();
        $('.search-section').slideUp();
    });

    //Search bar header
    $('.searchToggle').click(function(e) {
        e.preventDefault();
        $('body').removeClass('g-mobile-nav-open');
        $('.search-section').slideToggle(function(){
            if(isMobile === false && ($('.search-section').css('display') !== 'none')){
                $('#searchInput').focus();
            }
        }); 
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


});
