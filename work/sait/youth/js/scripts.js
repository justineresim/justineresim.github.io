/*-----------------------------------------*\
        General JS for shared components
\*------------------------------------------*/

$(document).ready(function() {    

    //initialize tooltips
    $('.tooltip').tooltipster({
        maxWidth: 280,
        offsetY: -5
    });

    //initialize swipebox - lightbox image galleries
    $( '.swipebox' ).swipebox({
        hideBarsDelay : 0, // delay before hiding bars on desktop
        removeBarsOnMobile : false
    });

    //accordions
    $('.g-accord-header').click(function() {
        $(this).next().slideToggle();
        var icon = $(this).find('.g-icon')
        icon.toggleClass('ion-plus-round');
        icon.toggleClass('ion-minus-round');
    })


});
