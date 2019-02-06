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
       $('body').removeClass('g-fixed-header');
       $('.hideMobile').css({'display':'none'});
    } else {
       isMobile = false;
       $('body').removeClass('g-mobile-nav-open');
       $('body').addClass('isDesktop');
       $('body').removeClass('isMobile');
       $('.hideDesktop').css({'display':'none'});
    }
}

function equalize_height($el) {
    var eq_items = $el.find('.g-card'),
        maxHeight = 0;

    if (eq_items.length) {
        eq_items.each(function () {
            $(this).css({
                'height': 'auto'
            });

            if ($(this).height() > maxHeight) {
                maxHeight = $(this).height();
            }
        });

        eq_items.each(function () {
            $(this).css({
                'height': maxHeight + 'px'
            })
        });
    }
}

$(document).ready(function() {


    window.addEventListener("resize", resized);

    
    //add classes to body for mobile/desktop
    if ($(window).width() < mobileBreakpoint) {
       isMobile = true;
       $('body').addClass('isMobile');
    } else {
       isMobile = false;
       $('body').addClass('isDesktop');
    }
    
    /*-----------------------------------------*\
                       Header
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

    //---- header tooltips for cec
    $('.tooltip-yo').tooltipster({
        maxWidth: 280,
        offsetY: -10,
        interactive: true,
        side: 'bottom',
        trigger: 'hover',
        content: $("<a href='sait-summer-camps.html'>SAIT Summer Camps</a><br><a>Plan for Post Secondary</a><br><a>Partner With SAIT</a>")
    });
    
    //fixed/smaller header on scroll - only for desktop
    $(window).on("scroll touchmove", function(e) {
        if(isMobile === false){
            $('body').toggleClass('g-fixed-header', $(document).scrollTop() > 51);
            $('.g-banner-img').toggleClass('g-fade', $(document).scrollTop() > 51);
        }
    });
    
    $('.g-headers-container').on('click touch', function (event) {
        event.stopPropagation();
    });

    //Main navigation - mobile menu
    $('.navToggle, .g-overlay').click(function(e) {
        e.preventDefault();
        $('body').toggleClass('g-mobile-nav-open');
    });

    //child mobile menu toggle
    $('.mobileMenuToggle').click(function(e) {
        $(this).next().slideToggle('fast');
    });


    /*-----------------------------------------*\
                    Sliders
    \*------------------------------------------*/


    $('.g-profile-slider') .on('init', function () {
        equalize_height($('.g-profile-slider'));
    })

    $('.g-profile-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        cssEase: 'linear',
        speed: 500,
        focusOnSelect: true,
        dots: true,
        arrows: true,
        infinite: true,
        responsive: [{
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('.g-image-slider').slick({
        cssEase: 'linear',
        speed: 400,
        focusOnSelect: true,
        dots: true,
        arrows: true,
        infinite: true,
        fade: true,
    });


    /*-----------------------------------------*\
                Banner Fade In
    \*------------------------------------------*/

    //This should be changed to run right after the image is loaded
    $('.g-banner-img').addClass('g-loaded');

    /*-----------------------------------------*\
                  CEC Homepage
    \*------------------------------------------*/


    //Explore Industries & Careers 
    $('#careerCategoryList a').click(function(){
      $('#careerCategoryHeading').text($(this).text());
      $('#careerCategoryList a').removeClass('g-active');
      $(this).addClass('g-active');
      var className = $(this).data('class');
      $('#careerCategoryCards .g-card:not(' + className + ')').removeClass('g-active');
      $('#careerCategorySelect').val(className);

      var time = 0;
      $(className).each(function() {
        var el = $( this );
        time += 100;
        setTimeout(function(){ 
          el.addClass('g-active');
        }, time);
      });
    })

    $('#careerCategorySelect').change(function(){
      var className = $( this ).val();
      var activeLink = $('#careerCategoryList a[data-class="' + className + '"]');
      $('#careerCategoryHeading').text(activeLink.text());
      $('#careerCategoryList a').removeClass('g-active');
      activeLink.addClass('g-active');
      $('#careerCategoryCards .g-card:not(' + className + ')').removeClass('g-active');
      $('#careerCategoryCards .g-card' + className).addClass('g-active');
    })


});
