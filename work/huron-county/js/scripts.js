$(document).ready(function(){

    //---------  Prototype interactions ------------

    //slider for home page banner
    $('.slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: 0,
        dots: true,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 10000,
        infinite: true,
        draggable: false,
        swipe: false,
        touchMove: false
    });

    //initalize tooltips
    $(document).tooltip({
        position: { my: "center bottom", at: "center top-10" }
    });

    //mobile navigation
    $('.g-main-nav .g-mega-menu li span').click(function(e){
        $(this).parent().toggleClass('g-active');
        $(this).parent().siblings().removeClass('g-active');
        e.stopPropagation();
    })

    $('.g-main-nav > li').click(function(e){
        $(this).toggleClass('g-active');
        $(this).siblings().removeClass('g-active');
        e.stopPropagation();
    })

    $('.g-main-nav .g-mega-menu a').click(function(e){
        e.stopPropagation();
    })

     //mobile navigation - open/close
    $('.mobile-nav-trigger').click(function(){
        toggleMobileNav();
    })

     //mobile navigation - open/close search
    $('.mobile-search-trigger').click(function(){
        toggleSearch();
    })

    $('.g-page-overlay').click(function(){
        closeNav();
    })

    //resource panels
    $('.g-panel-link').hover(function() {
		$(this).parent().addClass('g-hover');
	}, function() {
		$(this).parent().removeClass('g-hover');
	});

    //search results page 
    $(".g-sr-filters a").click(function(){
        $(this).css('transform', 'scale(0)');
        var div = $(this);
        setTimeout(function(){
            div.remove();
        }, 500);
    })

    //events page
    $('#showMoreEvents').click(function(){
        $('.g-event-section-hidden').slideDown();
        if($( document ).width() > 860){
            $('html,body').animate({
               scrollTop: $(".g-event-section-hidden").offset().top + 10
            });
        }else if($( document ).width() < 480){
            $('html,body').animate({
               scrollTop: $(".g-event-section-hidden").offset().top - 40
            });
        }else{
            $('html,body').animate({
               scrollTop: $(".g-event-section-hidden").offset().top - 90
            });
        }
    })

    $('#modalCloseBtn').click(function(){
        closeModal();
    })

    $('#modalOpenBtn').click(function(){
        $('.g-panel.g-filters').fadeIn();
        openModal();
    })

    $('#calendarOpenBtn').click(function(){
        $('.g-sidebar .g-sidebar-datepicker').fadeIn();
        openModal();
    })

    //calendar for news and events
    var old_goToToday = $.datepicker._gotoToday
    $.datepicker._gotoToday = function(id) {
        old_goToToday.call(this,id)
        this._selectDate(id)
    }

    //init datepicker (calendar for new/events)
    $( "#datepicker" ).datepicker({
        showButtonPanel: true, 
        beforeShowDay: DisableSpecificDates,
        dateFormat: "MM dd, yy",
        nextText: "Next Month",
        prevText: "Previous Month",
        onSelect: function() {
            showDate();
            DisableSpecificDates();
        }
    });

    $( window ).resize(function() {
        if($( document ).width() > 860){
            desktopView();
        }else{
            mobileView();
        }
    });

    if($('#datepicker').length){
        showDate(); //news and events calendar
    }

})

var searchOpen = false;
var navOpen = false;
var modalOpen = false;

function openModal(){
    $('header').css({'z-index':'0'});
    $('.g-page-overlay').fadeIn();
    $('body').addClass('g-overlay');
    modalOpen = true;
}

function closeModal(){
    $('.g-panel.g-filters, .g-sidebar .g-sidebar-datepicker').fadeOut();
    $('.g-page-overlay').fadeOut();
    $('body').removeClass('g-overlay');
    $('header').css({'z-index':'2000'});
    modalOpen = false;
}

function closeNav(){
    $('.g-page-overlay').fadeOut();
    $('body').removeClass('g-overlay');
    if(searchOpen === true){
        $('header.g-header').toggleClass('g-search-open');
    }
    if(modalOpen === true){
        closeModal();
    }
    if(navOpen === true){
        $('.mobile-nav-trigger').toggleClass('fa-bars').toggleClass('fa-times');
        $('.g-main-nav').slideToggle();
    }
    searchOpen = false;
    navOpen = false;
}

function toggleMobileNav(){
    $('.mobile-nav-trigger').toggleClass('fa-bars').toggleClass('fa-times');
    $('.g-main-nav').slideToggle();
    if(navOpen === false){
        navOpen = true;
        if(searchOpen === false){
            $('.g-page-overlay').fadeIn();
            $('body').addClass('g-overlay');
        }
    }else{
        navOpen = false;
        if(searchOpen === false){
            $('.g-page-overlay').fadeOut();
            $('body').removeClass('g-overlay');
        }
    }
}

function toggleSearch(){
    $('header.g-header').toggleClass('g-search-open');
    if(searchOpen === false){
        searchOpen = true;
        $('#siteSearch').focus();
        if(navOpen === false){
            $('.g-page-overlay').fadeIn();
            $('body').addClass('g-overlay');
        }
    }else{
        searchOpen = false;
        if(navOpen === false){
            $('.g-page-overlay').fadeOut();
            $('body').removeClass('g-overlay');
        }
    }
}

//news and events calendar functions

/** Days to be disabled as an array */
var disableddates = ["10-11-2015", "02-11-2015", "09-11-2015", "07-11-2015", "12-11-2015", "30-11-2015", "29-11-2015", "25-12-2015", "26-12-2015", "20-12-2015", "06-12-2015", "03-12-2015"];

function DisableSpecificDates(date) {
    var string = jQuery.datepicker.formatDate('dd-mm-yy', date);
    return [disableddates.indexOf(string) == -1];
}

function showDate(){

    var selectedDate = $('#datepicker').val();
    $( "#selectedDate" ).text(selectedDate);

    var date = $('#datepicker').datepicker('getDate');

    var tomorrow = new Date(date.getTime() + 24 * 60 * 60 * 1000);
    tomorrow =  $.datepicker.formatDate('MM dd, yy', tomorrow);
    $( "#tomorrow" ).text(tomorrow);

    var nextDay = new Date(date.getTime() + 2 * 24 * 60 * 60 * 1000);
    nextDay =  $.datepicker.formatDate('MM dd, yy', nextDay);
    $( "#nextDay" ).text(nextDay);

    var nextDay2 = new Date(date.getTime() + 3 * 24 * 60 * 60 * 1000);
    nextDay2 =  $.datepicker.formatDate('MM dd, yy', nextDay2);
    $( "#nextDay2" ).text(nextDay2);

    var yesterday = new Date(date.getTime() - 24 * 60 * 60 * 1000);
    yesterday =  $.datepicker.formatDate('MM dd, yy', yesterday);
    $( "#yesterday" ).text(yesterday);

    var dayBefore = new Date(date.getTime() - 2 * 24 * 60 * 60 * 1000);
    dayBefore =  $.datepicker.formatDate('MM dd, yy', dayBefore);
    $( "#dayBefore" ).text(dayBefore);

    var dayBefore2 = new Date(date.getTime() - 3 * 24 * 60 * 60 * 1000);
    dayBefore2 =  $.datepicker.formatDate('MM dd, yy', dayBefore2);
    $( "#dayBefore2" ).text(dayBefore2);

    $('.anEvent').toggle();

    if(modalOpen === true){
        closeModal();
    }
}

//responsive design
function desktopView(){
    closeNav();
    $('.g-panel.g-filters, .g-sidebar .g-sidebar-datepicker').show();
    $('.g-main-nav').show();
}

function mobileView(){
    closeNav();
    $('.g-panel.g-filters, .g-sidebar .g-sidebar-datepicker').hide();
    $('.g-main-nav').hide();
}

