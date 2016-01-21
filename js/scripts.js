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

});

function initMap() {

    var styleArray =[
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#444444"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#7d325f"
                },
                {
                    "visibility": "on"
                }
            ]
        }
    ]

  // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 42.9710790, lng: -81.2539920},
        scrollwheel: false,
        // Apply the map style array to the map.
        styles: styleArray,
        zoom: 12
    });

    var iconBase = 'img/pin.png';
    var marker = new google.maps.Marker({
        position: {lat: 42.9710790, lng: -81.2539920},
        map: map,
        icon: iconBase
    });

}

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


