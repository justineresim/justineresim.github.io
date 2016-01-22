
//Nissan Infinifi Pricing - Global CSS - main js file


$(document).ready(function(){

    //------------ Test Page Events ---------

    //Navigation

    $('#test-menu-control').click(function(){
        $(this).toggleClass("icon-keyboard-arrow-down").toggleClass("icon-keyboard-arrow-up");
        $('#test-navigation-list').slideToggle();
    });

    $(document).mouseup(function (e){
        var container = $('#test-menu-control');
        var container2 = $('#test-navigation-list');
        if (!container.is(e.target) && !container2.has(e.target).length){
            $(container).addClass("icon-keyboard-arrow-down").removeClass("icon-keyboard-arrow-up");
            container2.fadeOut();
        }
    });

    $('.test-scroll').click(function(e){
        var id = $(e.target).attr('scroll');
        $('html,body').animate({
            scrollTop: $(id).offset().top - 100
        });
    });


    //------------- Global Events  - index.html global events -----------

    //Messages

    $('.test-show-message').click(function(e){
        var id = $(e.target).attr('message');
        $(id).fadeToggle();
        setTimeout(function() {
            $(id).fadeOut();
        }, 11000);
    });

    $('.app-message .icon-delete').click(function(){
        $(this).parent().fadeOut();
    });

    //Toggle Button

    $('.app-buttons-toggle.app-toggle-active button').click(function(){
        $(this).toggleClass("app-button-selected");
        $(this).siblings().toggleClass("app-button-selected");
    })

    //Expandable Containers - Expandable Containers are built off of Bootstraps Accordion. See http://getbootstrap.com/javascript/#collapse-example-accordion for more information.

    $('.app-container-expandable').on('hide.bs.collapse', function () {
        $(this).find('.app-expandable-heading span').removeClass("icon-keyboard-arrow-down").addClass("icon-keyboard-arrow-right");
    });

    $('.app-container-expandable').on('shown.bs.collapse', function () {
        $(this).find('.app-expandable-heading span').addClass("icon-keyboard-arrow-down").removeClass("icon-keyboard-arrow-right");
        $(this).find('.app-expandable-heading.collapsed span').removeClass("icon-keyboard-arrow-down").addClass("icon-keyboard-arrow-right");
    });

    //Tabs - Tabs are built off of Bootstraps Tabs. See http://getbootstrap.com/javascript/#tabs for more information.

    $('.app-tabs a').click(function(){
        if ($(this).hasClass('app-tab-disabled')) {
            return false;
        }
    });

    //Tooltips - Tooltips are build off of Bootstraps Tooltips. See http://getbootstrap.com/javascript/#tooltips for more information.

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });



    //------------- Global Events  - layout.html global events -----------

    //Main Navigation   ------- MOVED TO controllers/navigation.js

//    $('#app-navigation-list > li').click(function(){ //selecting a first level li item from the navigation
//
//        $(this).siblings().removeClass('app-page-active');
//        $(this).siblings().find('ul').slideUp('slow');
//        $(this).siblings().find('ul li').removeClass('app-second-page-active');
//        $(this).siblings().find('.icon-keyboard-arrow-down').removeClass("icon-keyboard-arrow-down").addClass("icon-keyboard-arrow-right");
//        $(this).addClass('app-page-active');
//
//        if($(this).find('ul').length !==0 && fullNav % 2 === 0){  // if the li item has a sub list and we are using the full navigation version
//            $(this).find('ul').slideDown('slow');
//            $(this).find('.icon-keyboard-arrow-right').addClass("icon-keyboard-arrow-down").removeClass("icon-keyboard-arrow-right");
//        }
//
//        $('html,body').animate({
//            scrollTop: 0
//        });
//
//        //sample
//        var title = $(this).find('.app-menu-item').first().text();
//        $('h1').text(title);
//
//
//    });
//
//    $('#app-navigation-list .app-navigation-second-list li').click(function(){    // selecting a second level list item from the navigation
//        $(this).addClass('app-second-page-active');
//        $(this).siblings().removeClass('app-second-page-active');
//
//        $('html,body').animate({
//            scrollTop: 0
//        });
//
//        //sample
//        var title = $(this).text();
//        $('h1').text(title);
//
//        return false; // so that the above function does not get called
//    });

//    var fullNav = 0;
//
//    function slimNavigation(){
//        $('#app-navigation-list .app-navigation-second-list, #app-navigation-list .app-menu-item, .app-menu-heading-text, #app-navigation-list .icon-keyboard-arrow-down, #app-navigation-list .icon-keyboard-arrow-right').hide();
//        $('.app-navigation-container').animate({width: '76px'});
//        $('.app-body-container').animate({paddingLeft: '76px'});
//        $('.app-menu-heading').find('.icon-keyboard-arrow-left').addClass("icon-keyboard-arrow-right").removeClass("icon-keyboard-arrow-left");
//    }
//
//    function fullNavigation(){
//        $('.app-navigation-container').animate({width: '259px'});
//        $('.app-body-container').animate({paddingLeft: '259px'}, {complete: function(){
//            $('#app-navigation-list .app-menu-item, .app-menu-heading-text, #app-navigation-list .icon-keyboard-arrow-down, #app-navigation-list .icon-keyboard-arrow-right').show();
//        }});
//        $('.app-menu-heading').find('.icon-keyboard-arrow-right').addClass("icon-keyboard-arrow-left").removeClass("icon-keyboard-arrow-right");
//        $('#app-navigation-list .icon-keyboard-arrow-down').removeClass("icon-keyboard-arrow-down").addClass("icon-keyboard-arrow-right");
//    }
//
//    $('.app-menu-heading').click(function(){
//        if(fullNav % 2 === 0){  //if we have the full navigation and are going to the slimmer version
//            slimNavigation();
//        }else{                  //if we have the slim navigation and are going to the full version
//            fullNavigation();
//        }
//        fullNav++;
//    });

//    if($( window ).width() <= 768){       // if we load the app on a smaller screen (<=768px) then show the slim navigation
//        $('#app-navigation-list .app-navigation-second-list, #app-navigation-list .app-menu-item, .app-menu-heading-text, #app-navigation-list .icon-keyboard-arrow-down, #app-navigation-list .icon-keyboard-arrow-right').hide();
//        $('.app-navigation-container').css({width: '76px'});
//        $('.app-body-container').css({paddingLeft: '76px'});
//        $('.app-menu-heading').find('.icon-keyboard-arrow-left').addClass("icon-keyboard-arrow-right").removeClass("icon-keyboard-arrow-left");
//        fullNav = 1;
//    }

    //User menu (logout menu)

    $('.app-username').click(function(){
        $('.app-user-menu').toggle();
    });

    $(document).mouseup(function (e){
        var container2 = $('.app-user-menu');
        if (!container2.is(e.target) && !container2.has(e.target).length){
            container2.fadeOut();
        }
    });


});