$(document).ready(function(){

    //---------  Prototype interactions ------------


    //Navigations - main and mobile

    $('.g-mobile-menu li a, .g-main-nav li a').click(function(e){
        e.preventDefault();
        $('.g-mobile-menu li a, .g-main-nav li a').removeClass('g-active');
        $(this).addClass('g-active');
    })

    //Mobile menu - toggle and collasped menu

    $('.g-mobile-menu-toggle, .g-mobile-menu-overlay').click(function(e) {
        if(e){
            e.preventDefault();
        }
        toggleMobileMenu();
    })

    $('.g-mobile-menu-header a').click(function(e) {
        if(e){
            e.preventDefault();
        }
        $('.g-user-menu-profile').slideToggle();
        $('.g-mobile-menu-header span.g-pull-right').toggleClass('icon-arrowup').toggleClass('icon-arrowdown');
    })

    //user menu

    $('.g-profile-menu-togle').click(function(e){
         e.preventDefault();
        $('ul.g-profile-menu').fadeToggle('fast');
        return false;
    });

    $(document).click(function(){
        $('ul.g-profile-menu').css({'display':'none'});
    });


    //Sidebar - hide/show

    $('.toggleSidebar').click(function (e){
        e.preventDefault();
        if(sidebarOpen === true){
            hideSidebar();  
        }else{
            showSidebar();  
        }
    });

    //Sidebar - sub menu

    $('.showAssets, .applyFilters').click(function(e){
        e.preventDefault();
        $('#assets').show();
        $('#search').hide();
        $('.g-menu li').removeClass('g-active');
        $('.g-menu li.assets').addClass('g-active');
    });

    $('.showSearch').click(function(e){
        e.preventDefault();
        $('#assets').hide();
        $('#search').show();
    })

    $('.g-menu li').click(function(e){
        e.preventDefault();
        $('.g-menu li').removeClass('g-active');
        $(this).addClass('g-active');
    })

    //Assets - results

    $('.g-result').click(function(e){
        e.preventDefault();
        $(this).addClass('g-active');
        $(this).siblings().removeClass('g-active');
    });

    $('.g-filters .g-btn-secondary').click(function(e){
        e.preventDefault();
        $(this).fadeOut('fast');
    });

    //Assets- map/list toggle

    $('.g-asset-map-list-toggle a').click(function(e){
        $('.g-filter-results').toggleClass('g-map-view');
    });

    //Advanced search - hide/show more option 

    $('.hideShowOptions').click(function(e){
        e.preventDefault();
        $('#moreOptions').fadeToggle('fast');
        $(this).find('span').toggleClass('icon-arrowup').toggleClass('icon-arrowdown');
    });

    //Fav/unfave icon

    $('a.toggleFav').click(function(e){
        e.preventDefault();
        $(this).find('*[class^="icon-"]').toggleClass('icon-unfave').toggleClass('icon-fav').toggleClass('g-color-fav');
        return false;
    });

    //Toggle

    $('.g-btn-toggle a').click(function(e){
        e.preventDefault();
        $(this).toggleClass('g-active');
        $(this).siblings().toggleClass('g-active');
    });

});

var mobileMenuOpen = false;
var sidebarOpen = true;

function toggleMobileMenu(e){
    if(e){
        e.preventDefault();
    }
    if(mobileMenuOpen === false){
        mobileMenuOpen = true;
        $('ul.g-mobile-menu').animate({'right':'0'});
        $('.g-header, .g-page-content-container, .g-sidebar-footer').animate({'left':'-260px'});
        $('.g-mobile-menu-overlay').fadeIn();

    }else{
        mobileMenuOpen = false;
        $('ul.g-mobile-menu').animate({'right':'-260px'});
        $('.g-header, .g-page-content-container, .g-sidebar-footer').animate({'left':'0'});
        $('.g-mobile-menu-overlay').fadeOut();
    }
}

function hideSidebar(e){
     if(e){
        e.preventDefault(e);
    }
    $('.g-sidebar').animate({'left':'-440px'});
    $('.g-page-content').animate({'margin-left':'0px'});
    $('.g-sidebar-toggle').animate({'left':'65px'});
    $('.g-sidebar-toggle .g-btn-icon span').toggleClass('icon-expandtoleft').toggleClass('icon-expandtoright');
    $('.g-sidebar-footer').css({'display':'none'});
    sidebarOpen = false;
}

function showSidebar(e){
    if(e){
        e.preventDefault(e);
    }
    $('.g-sidebar').animate({'left':'0'});
    $('.g-sidebar-toggle').animate({'left':'505px'});
    $('.g-page-content').animate({'margin-left':'440px'}, function(){
        $('.g-sidebar-footer').fadeIn('fast');
    });
    $('.g-sidebar-toggle .g-btn-icon span').toggleClass('icon-expandtoleft').toggleClass('icon-expandtoright');
    sidebarOpen = true;
}


