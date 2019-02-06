$(document).ready(function() {

    /*-----------------------------------------*\
                    Camps Header
    \*------------------------------------------*/

    //---- header tooltips for camps
    $('.tooltip-yo-camps').tooltipster({
        maxWidth: 280,
        offsetY: -10,
        interactive: true,
        side: 'bottom',
        trigger: 'hover',
        content: $("<a href='cec-home.html'>Career Exploration Centre</a><br><a>Plan for Post Secondary</a><br><a>Partner With SAIT</a>")
    });


    /*-----------------------------------------*\
                 Summer Camps Homepage
    \*------------------------------------------*/
    
    $( '.hoverImgLink' ).hover(
        function() {
            $( '.hoverImg' ).css({'display':'block'});
        }, function() {
            $( '.hoverImg' ).fadeOut();
        }
    );

    if($('#campThemes').length === 1){
        var element_position = $('#campThemes').offset().top;
        var screen_height = $(window).height();
        var activation_offset = 0.75;//determines how far up the the page the element needs to be before triggering the function
        var activation_point = element_position - (screen_height * activation_offset);
        var max_scroll_height = $('body').height() - screen_height - 5;//-5 for a little bit of buffer

        //Does something when user scrolls to it OR
        //Does it when user has reached the bottom of the page and hasn't triggered the function yet
        $(window).on('scroll', function() {
            var y_scroll_pos = window.pageYOffset;

            var element_in_view = y_scroll_pos > activation_point;
            var has_reached_bottom_of_page = max_scroll_height <= y_scroll_pos && !element_in_view;

            if(element_in_view || has_reached_bottom_of_page) {
                var time = 0;
                $('.g-card').each(function() {
                    var el = $( this );
                    time += 100;
                    setTimeout(function(){ 
                        el.addClass('g-active');
                    }, time);
                });
            }
        });
    }


    /*-----------------------------------------*\
               Summer Camps Favourites
    \*------------------------------------------*/


    $('.toggleControl').click(function(){
        var id = $(this).data('control');
        $(this).find('span').toggleClass('ion-chevron-down ion-chevron-up');
        $('#'+id).slideToggle('fast');
    })


    /*-----------------------------------------*\
            Fixed sidebar for large screens
    \*------------------------------------------*/

    if($('#fixedSidebar').length === 1){

        $(window).on('scroll', function() {

            var el = document.getElementById('fixedSidebar');
            var top = el.getBoundingClientRect().top;
            var sidebarHeight = $('#fixedSidebarInner').height();
            var minSceenHeight = sidebarHeight + 150;

            //make sidebar sticky once we scroll to it if we are on a large enough screen 
            if(top <= 90 && $(window).width() > 1200 && $(window).height() > minSceenHeight) {
                if($('#fixedSidebarInner').hasClass('is-fixed') == false){
                    $('#fixedSidebarInner').addClass('is-fixed');
                }
            }else{
                if($('#fixedSidebarInner').hasClass('is-fixed') == true){
                    $('#fixedSidebarInner').removeClass('is-fixed');
                }
            }

        });

    }

    /*-----------------------------------------*\
        Additions/replacements for scripts.js 
    \*------------------------------------------*/

    //Responsive tables - new js to trigger expand/collapse by clicking on entire row instead of just the icon - should replace previous JS - $('.g-open-link').click(function() {
    

    $('.mobileToggleTrigger').click(function(e){
        var clickEl = $(this).find('.g-open-link');
        isMobile = clickEl.is(":visible");
        if(isMobile){
            if ($(clickEl).hasClass('ion-plus-circled')) {
                $(clickEl).addClass('ion-minus-circled');
                $(clickEl).removeClass('ion-plus-circled');
                $(clickEl).parent().siblings().css({
                    'display': 'block'
                });
            } else {
                $(clickEl).removeClass('ion-minus-circled');
                $(clickEl).addClass('ion-plus-circled');
                $(clickEl).parent().siblings().css({
                    'display': 'none'
                });
            }
        }
    })

    //if we have other links inside the table (other then the toggle) then don't trigger the toggle event
    $('.mobileToggleTrigger a:not(.g-open-link)').click(function(e){
        e.stopPropagation();
    });


     /*-----------------------------------------*\
        Additions/replacements for youth-scripts.js 
    \*------------------------------------------*/


    //changed centerPadding from 250px to 200px for the large image slider!
    $('.g-image-slider-lg').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        dots: true,
        centerMode: true,
        centerPadding: '200px', //changed from 250px to 200px
        speed: 200,
        responsive: [{
            breakpoint: 800,
            settings: {
                centerPadding: '0',
            }
        }]
    });

    
});
