$(document).ready(function(){

    //---------  Testing/style guide page only - may be removed for live ------------

	$('.testing-scroll-up').click(function(e){
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");	
	});

    $('.test-scroll').click(function(e){
        var id = $(e.target).attr('scroll');
        var that = $(this);
        $('html,body').animate({
            scrollTop: $(id).offset().top - 80
        }, function() {
            $('.test-scroll').removeClass('active');
            that.addClass('active');
        });

    });

    $(document).scroll(function(){
        var scrollPosition = $(document).scrollTop() - 45;
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
    $('.g-btn-toggle a').click(function(e){
        e.preventDefault();
        $(this).toggleClass('g-active');
        $(this).siblings().toggleClass('g-active');
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

    var old_goToToday = $.datepicker._gotoToday
    $.datepicker._gotoToday = function(id) {
      old_goToToday.call(this,id)
      this._selectDate(id)
    }

    //init datepicker (calendar)
    $( "#datepickerTest" ).datepicker({
        showButtonPanel: true
    });

    showDateTest();

    $(document).on("change", "#datepickerTest", function () {
        showDateTest();
    })

})

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
}

function showCode(id){
    $(id).slideToggle();
}

function showDateTest(){
    var selectedDate = $('#datepickerTest').val();
    $( "#selectedDateTest" ).text(selectedDate);
}