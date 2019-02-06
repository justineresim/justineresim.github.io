/*-----------------------------------------*\
    Global Style Guide JS - testing only
\*------------------------------------------*/

$(document).ready(function() {

    //side nav scoll to section
    $('.test-scroll').click(function(e) {
        var id = $(e.target).attr('scroll');
        window.location.hash = id;

        var linkId = $(this).attr('id');

        if($(e.target).hasClass('first')){
            $('.previousItem').hide();
        }else{
            $('.previousItem').show();
        }

        if($(e.target).hasClass('last')){
            $('.nextItem').hide();
        }else{
            $('.nextItem').show();
        }


        $('.g-sidenav a').removeClass('g-active');
        $(this).addClass('g-active');
        $(this).parent().parent().siblings().addClass('g-active');
        $(id).addClass('g-active');
        $(id).siblings().removeClass('g-active');

        var nextId = Number(linkId) + 1;
        var prevId = Number(linkId) - 1;

        var nextText = $('#'+nextId).text();
        $('.nextItem').html(nextText + '<span class="ion-ios-arrow-forward g-icon-right"></span>');

        var prevText = $('#'+prevId).text();
        $('.previousItem').html('<span class="ion-ios-arrow-back g-icon-left"></span>' + prevText);

        $('html,body').animate({
            scrollTop: $(id).offset().top - 120
        })
    });

    if(window.location.hash){
        $("[scroll=" + window.location.hash + "]").click();
    }

    $('.nextItem').click(function(){
        var activeEl = $('.g-sidenav a.g-active');
        if(activeEl.length === 1){
           var id = $(activeEl).attr('id'); 
        }else if(activeEl.length === 0){
           var id = -1; 
        }else{
           var id = $(activeEl[1]).attr('id'); 
        }
        var nextId = id++;
        $('#' + id).click();
    })

    $('.previousItem').click(function(){
        var activeEl = $('.g-sidenav a.g-active');
        if(activeEl.length === 1){
           var id = $(activeEl).attr('id'); 
        }else{
           var id = $(activeEl[1]).attr('id'); 
        }
        var nextId = id--;
        $('#' + id).click();
    })

})

