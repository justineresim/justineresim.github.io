$(document).ready(function(){

	//testing only
	$('.testing-scroll-up').click(function(e){
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");	
	});

    $('.test-scroll').click(function(e){
        var id = $(e.target).attr('scroll');
        var that = $(this);
        $('html,body').animate({
            scrollTop: $(id).offset().top - 30
        }, function() {
            $('.test-scroll').removeClass('active');
            that.addClass('active');
        });

    });

    $(document).scroll(function(){
        var scrollPosition = $(document).scrollTop() - 40;
        $('.test-scroll').each(function () {
            var currentLink = $(this);
            var refElement = $(currentLink.attr("scroll"));
            if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
                $('.test-scroll').removeClass("active");
                currentLink.addClass("active");
            }
        });
    });

    //Toggle

    $('.g-btn-toggle .g-btn').click(function(e){
        e.preventDefault();
        $(this).toggleClass('g-active');
        $(this).siblings().toggleClass('g-active');
    });

    //image gallery
    $(".fancybox").fancybox({
        padding : 40,
        prevEffect   : 'none',
        nextEffect  : 'none',
        helpers : {
            title   : {
                type: 'inside'
            }
        },
        afterLoad : function() {
            this.title = '<p class="g-font-size-smaller">' + (this.index + 1) + '/' + this.group.length + '</p>' + (this.title ? this.title : '');
        }
    });

     //pagination
    $('.g-pagination a.g-nums').click(function(){
        $('.g-pagination a.g-nums.g-active').removeClass('g-active');
        $(this).addClass('g-active');
        btnStates();
    })

    $('.g-pagination a.g-next').click(function(){
        $('.g-pagination a.g-nums.g-active').removeClass('g-active').next('.g-nums').addClass('g-active'); 
        btnStates();
    })

    $('.g-pagination a.g-prev').click(function(){
        $('.g-pagination a.g-nums.g-active').removeClass('g-active').prev('.g-nums').addClass('g-active'); 
        btnStates();
    })



    $('.fancy-box-trigger').click(function(){
        var id =  event.target.id;
        var tag = '.fancy-box-'+id;
        
    })
   


    //home pages

    var companies = [
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

var featured = [
  ["Fitness Health Match", "FHMatch is a social networking platform that connects people with a broad range of local fitness, health, and wellness professionals.", "http://www.fhmatch.com/", 'img/work/fhm5.png', 
    [['Fitness Health Match Homepage', 'img/work/fhm1.png'], 
        ['Create an account screen.', 'img/work/fhm2.png'], 
        ['Browse fitness and health related articles.', 'img/work/fhm3.png'], 
        ['Easily find health and fitness professional in your area.', 'img/work/fhm4.png'], 
        ['Connect with professional to book appointments.', 'img/work/fhm5.png'],]],

  ["Redeemer University", "Redeemer University College is an undergraduate university known for providing a high-quality liberal arts and sciences university education.", "https://www.redeemer.ca/", 'img/work/redeemer1.png', 
    [['Redeemer University Homepage', 'img/work/redeemer1.png'], 
        ['Stories - view and filter testimonials about the College by Students, Alumni and Faculty.', 'img/work/redeemer2.png'], 
        ['Art - Program Page. Learn about programs that the College offers.', 'img/work/redeemer3.png'], 
        ['Admission Counsellors - find your admissions counsellor to help with whatever you need.', 'img/work/redeemer4.png'],  
        ['Campus Tour - Interactive map of different locations around the campus.', 'img/work/redeemer5.png'],
        ['Redeemer Today - Easily find current events and news happening around the campus.', 'img/work/redeemer6.png'],]],

   ["Build & Price", "Chrysler's Build & Price web application.", "http://www.chrysler.com/hostc/bmo/CUC201501/models.do?", 'img/work/bp1.png', 
    [['Chrysler trim selector page.', 'img/work/bp1.png'], 
        ['Chrysler trim selector page.', 'img/work/bp2.png'], 
        ['Dodge trim selector page.', 'img/work/bp3.png'], 
        ['Fiat trim selector page.', 'img/work/bp4.png'], 
        ['Jeep trim selector page.', 'img/work/bp5.png'], 
        ['Ram trim selector page.', 'img/work/bp6.png'], 
        ['Chrysler powertrain selections.', 'img/work/bp7.png'], 
        ['Dodge powertrain selection.', 'img/work/bp8.png'], 
        ['Fiat powertrain selection.', 'img/work/bp9.png'], 
        ['Jeep powertrain selection.', 'img/work/bp10.png'], 
        ['Chrysler trim selector page.', 'img/work/bp11.png'], 
        ['Chrysler trim selector page.', 'img/work/bp12.png'], 
        ['Chrysler trim selector page.', 'img/work/bp13.png'], 
        ['Chrysler trim selector page.', 'img/work/bp14.png'], 
        ['Chrysler trim selector page.', 'img/work/bp15.png'], 
        ['Chrysler trim selector page.', 'img/work/bp16.png'], 
        ['Chrysler trim selector page.', 'img/work/bp17.png'], 
        ['Chrysler trim selector page.', 'img/work/bp18.png'], 
        ['Chrysler trim selector page.', 'img/work/bp19.png'], 
        ['Chrysler trim selector page.', 'img/work/bp20.png'], 
        ['Chrysler trim selector page.', 'img/work/bp21.png'], 
        ['Chrysler trim selector page.', 'img/work/bp22.png'], 
        ['Chrysler trim selector page.', 'img/work/bp23.png'], 
        ['Chrysler trim selector page.', 'img/work/bp24.png'],]],

 ];




});

function btnStates(){
    if($('.g-pagination a.g-nums.g-active').next('.g-nums').length){
        $('.g-pagination a.g-next').removeClass('g-disabled');
    }else{
        $('.g-pagination a.g-next').addClass('g-disabled');
    }

    if($('.g-pagination a.g-nums.g-active').prev('.g-nums').length){
        $('.g-pagination a.g-prev').removeClass('g-disabled');
    }else{
        $('.g-pagination a.g-prev').addClass('g-disabled');
    }

    toGoPage();
}

function openFancyBox(className){
    $(className).eq(0).trigger('click'); 
}

function toGoPage(){
    var active = $('.g-nums.g-active').text();
    var set1 = $('.g-work-0, .g-work-1, .g-work-2, .g-work-3, .g-work-4');
    var set2 = $('.g-work-5, .g-work-6, .g-work-7, .g-work-8, .g-work-9');
    var set3 = $('.g-work-10, .g-work-11, .g-work-12, .g-work-13, .g-work-14');

    if(active==2){
       set1.slideUp(); 
    }
    if(active==3){
       set2.slideUp(); 
    }
    if(active==4){
       set3.slideUp(); 
    }
    
}


