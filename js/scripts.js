$(document).ready(function(){


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


