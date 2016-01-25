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

})

function showCode(id){
    $(id).slideToggle();
}