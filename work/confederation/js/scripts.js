$(document).ready(function(){

	//testing only
	$('.testing-scroll-up').click(function(e){
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");	
	});

    $('.test-scroll').click(function(e){
        var id = $(e.target).attr('scroll');
        $('html,body').animate({
            scrollTop: $(id).offset().top - 100
        });
    });


	//dropdowns (social media)
	$('.r-dropdown-toggle').click(function(e){
		if(e){
			e.preventDefault();
		}
		$(this).next('.r-dropdown-menu').toggle();
		return false;
	});

	$(document).click(function() {
		//dropdowns
	    $('.r-dropdown-menu').fadeOut();
    	//main navigation 
    	$('.r-header-dropdown-menu').fadeOut();
	    $('.r-header-dropdown-toggle').removeClass('r-active');
	});

	//header dropdown menu
	$('.r-header-dropdown-toggle').click(function(){
		$(this).next('.r-header-dropdown-menu').slideToggle();
		$(this).toggleClass('r-active');
		return false;
	});

	//sidebar on mobile
	$('.sideBarToggle').click(function(e){
		e.preventDefault();
		$(this).find('span.fa').toggleClass('fa-bars').toggleClass('fa-close');
		$('#sideBar').slideToggle();
	});

	//mobile menu - open
	$('.mobileMenuToggle').click(function(e){
		e.preventDefault();
		window.scrollTo(0, 0);
		$('.r-mobile-menu').addClass('r-open').animate({'right':'0'});
		$('body').addClass('r-overlay-in').animate({'margin-right':'251px', 'margin-left':'-251px'});;
		$('.r-overlay').fadeIn();
	});

	//mobile menu - close
	$('.r-overlay').click(function(){
		$('.r-mobile-menu').animate({'right':'-251px'}, function(){
			$('.r-mobile-menu').removeClass('r-open')
		});
		$('body').removeClass('r-overlay-in').animate({'margin-right':'0', 'margin-left':'0'});
		$('.r-overlay').fadeOut();
	});

	//mobile menu
	$('.mobileToggle').click(function(e){
		e.preventDefault();
		$(this).next('ul').slideToggle();
	});

	//search on header
	$('#search').click(function(){
		if( $('.r-search-input').hasClass('r-active')){
			$('input#exampleSearch').css({'display':'none'});
			$('.r-search-input').animate({'width':'0'}, 500, function() {
			    $('.r-search-input').removeClass('r-active');
		  	})
		}else{
			$('.r-search-input').addClass('r-active');
			$('.r-search-input').animate({'width':'150px'}, 500, function() {
			    $('input#exampleSearch').css({'display':'inline-block'}).focus();
		  	})	
		}
		return false;
	});

	//mobile search
	$('#searchMobile a').click(function(){
		if($(window).width()<600){
			$('#searchMobile').siblings().toggle();
		};
		$('#exampleSearch2').toggleClass('r-input-active').focus();
		return false;
	});

	//mobile search
	$('.scrollTop').click(function(e){
		e.preventDefault();
		$("html, body").animate({
            scrollTop: 0
        }, 600);
	});

});



