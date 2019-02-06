/*------------------------------------------------------------*\
                How to Apply Interactive
\*------------------------------------------------------------*/

$(document).ready(function() {

    //set up variables
    var stepIntro = "How to Apply Intro";
    var stepOne = "Before You Apply";
    var stepTwo = "When You Apply";
    var stepThree = "After You Apply";

    /*------------------------------------*\
               START PAGE FUCNTIONS
    \*------------------------------------*/

    //on first dropdown
    window.stepOne = function (){
        $('.school-location').removeClass('g-disabled');
        $('.about-me, .offered, .start-date, #startBtn').addClass('g-disabled').removeClass('g-active');
        $('#aboutMe option:selected, #offered option:selected, #startDate option:selected').prop("selected", false);

        //make sure all cookies are cleared
        document.cookie = "schoolLocation=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "aboutMe=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "offered=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "startDate=; expires=Thu, 01 Jan 1970 00:00:00 GMT";

        document.cookie = "schoolLocationText=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "aboutMeText=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "offeredText=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "startDateText=; expires=Thu, 01 Jan 1970 00:00:00 GMT";

        $('#schoolLocation').focus();

        $('.stepText').addClass('g-hidden');
        $('.stepNav.stepOneNav').addClass('g-disabled')
    }

    //on second dropdown
    window.stepTwo = function (){
        $('.school-location, .about-me').removeClass('g-disabled');
        $('.offered, .start-date, #startBtn').addClass('g-disabled').removeClass('g-active');
        $('#aboutMe option:selected, #offered option:selected, #startDate option:selected').prop("selected", false);

        //make sure all cookies are cleared
        document.cookie = "aboutMe=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "offered=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "startDate=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "aboutMeText=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "offeredText=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "startDateText=; expires=Thu, 01 Jan 1970 00:00:00 GMT";

        $('#aboutMe').focus();

        $('.stepText').addClass('g-hidden');
        $('.stepNav.stepOneNav').addClass('g-disabled')
    }

    //on third dropdown
    window.stepThree = function(){
        $('.school-location, .about-me, .offered').removeClass('g-disabled');
        $('.start-date, #startBtn').addClass('g-disabled').removeClass('g-active');
        $('#offered option:selected, #startDate option:selected').prop("selected", false);
        //make sure all cookies are cleared
        document.cookie = "offered=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "startDate=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "offeredText=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "startDateText=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        $('#offered').focus();

        $('.stepText').addClass('g-hidden');
        $('.stepNav.stepOneNav').addClass('g-disabled')
    }

    //on fourth dropdpown
    window.stepFour = function (){
        $('.school-location, .about-me, .offered, .start-date').removeClass('g-disabled');
        $('#startBtn').addClass('g-disabled').removeClass('g-active');
        $('#startDate option:selected').prop("selected", false);
        //make sure all cookies are cleared
        document.cookie = "startDate=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "startDateText=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        $('#startDate').focus();

        $('.stepText').addClass('g-hidden');
        $('.stepNav.stepOneNav').addClass('g-disabled')
    }

    window.lastStep = function (){
        $('.school-location, .about-me, .offered, .start-date, #startBtn').removeClass('g-disabled');
        $('#startBtn').addClass('g-active');

        $('html,body').animate({
            scrollTop: $("#startBtn").offset().top - ($(window).height()/2)
        },'slow');

        //show timeline
        $('.stepText.stepOneText').text("01." + stepOne);
        $('.stepText.stepTwoText').text("02." + stepTwo);
        $('.stepText.stepThreeText').text("03." + stepThree);
        $('.stepText').removeClass('g-hidden');
        $('.stepNav.stepOneNav').removeClass('g-disabled')
        
    }

    /*------------------------------------*\
            INNER PAGE FUNCTIONS
    \*------------------------------------*/

    var currentStep = 1;

    var stepOnePercentage = 50;
    var stepTwoPercentage = 40;
    var stepThreePercentage = 10;

    var checkedBoxes;

    //on inner page load
    window.innerPageLoad = function (){

        //get cookies
        var locationCookie = document.cookie.replace(/(?:(?:^|.*;\s*)schoolLocation\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        var aboutMeCookie = document.cookie.replace(/(?:(?:^|.*;\s*)aboutMe\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        var offeredCookie = document.cookie.replace(/(?:(?:^|.*;\s*)offered\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        var startDateCookie = document.cookie.replace(/(?:(?:^|.*;\s*)startDate\s*\=\s*([^;]*).*$)|^.*$/, "$1");

        var checkedBoxesCookie = document.cookie.replace(/(?:(?:^|.*;\s*)checkedBoxes\s*\=\s*([^;]*).*$)|^.*$/, "$1");

        //if we dont have all the cookies than go back to start page.
        if(!locationCookie || !aboutMeCookie || !offeredCookie || !startDateCookie){
            window.location.href = "/how-to-apply-interactive.html";
        }else{
            //set up next btn
            $('.nextStep a').text(stepTwo);
        
            if(!checkedBoxesCookie){
                checkedBoxes = '';
            }else{
                checkedBoxes = checkedBoxesCookie;
                var checkedBoxesArray = checkedBoxesCookie.split(",");
                checkedBoxesArray.pop();
                for(var i=0; i < checkedBoxesArray.length; i++) {
                    $('#' + checkedBoxesArray[i]).prop('checked', true);
                }
            }

            calculateProgress();
        }
    }

    //set the navigation states
    window.setNav = function (step){

        var checkboxes01 = $('.step.step01 input[type="checkbox"]').length;
        var checked01 = $('.step.step01 input[type="checkbox"]:checked').length;

        var checkboxes02 = $('.step.step02 input[type="checkbox"]').length;
        var checked02 = $('.step.step02 input[type="checkbox"]:checked').length;

        var checkboxes03 = $('.step.step03 input[type="checkbox"]').length;
        var checked03 = $('.step.step03 input[type="checkbox"]:checked').length;

        $('.stepNav.g-active').removeClass('g-active');

        var footerHeight = $('.g-footer').height();
        var windowHeight = $(window).height();

        var wHeight = $(window).height(); // Height of view port
        var eOffset = $('#timelineNav').offset().top; // Y-offset of element
        var eHeight = $('#timelineNav').height(); // Height of element

        if(step === 1){
            $('.prevStep a').text(stepIntro); 
            $('.nextStep a').text(stepTwo);
            $('.nextStep').removeClass('g-disabled');
            $('.stepOneNav').addClass('g-active');
            $('.stepTextMobile').text('Step 1 of 3');
            if (checked01/checkboxes01 === 1){
                $('.g-timeline-next').addClass('g-active');
                $('html,body').animate({
                    scrollTop: eOffset - wHeight + eHeight
                },'slow');
            }else{
                $('.g-timeline-next').removeClass('g-active');
            }
        }else if(step === 2){
            $('.prevStep a').text(stepOne);
            $('.nextStep a').text(stepThree);
            $('.nextStep').removeClass('g-disabled');
            $('.stepTwoNav').addClass('g-active');
            $('.stepTextMobile').text('Step 2 of 3');
            if (checked02/checkboxes02 === 1){
                $('.g-timeline-next').addClass('g-active');
                $('html,body').animate({
                    scrollTop: eOffset - wHeight + eHeight
                },'slow');
            }else{
                $('.g-timeline-next').removeClass('g-active');
            }
        }else if(step === 3){
            $('.prevStep a').text(stepTwo);
            $('.nextStep').addClass('g-disabled');
            $('.stepThreeNav').addClass('g-active');
            $('.g-timeline-next').removeClass('g-active');
            $('.stepTextMobile').text('Step 3 of 3');
        }
    }

    //moving from one step to another
    window.goToStep = function (step){
        if(step === 0){
            //go back to start page
            window.location.href = "/how-to-apply-interactive.html";
        }else{
            var currentEl = ".step.step0"+currentStep;
            $(currentEl).addClass('g-active');
            $(currentEl).siblings().removeClass('g-active');
            $("html, body").animate({ scrollTop: 0 }, "fast"); 
            window.setNav(currentStep);
        }
    }

    //claculate the users progress when they check a checkbox
    window.calculateProgress = function (){
        var checkboxes01 = $('.step.step01 input[type="checkbox"]').length;
        var checked01 = $('.step.step01 input[type="checkbox"]:checked').length;

        var checkboxes02 = $('.step.step02 input[type="checkbox"]').length;
        var checked02 = $('.step.step02 input[type="checkbox"]:checked').length;

        var checkboxes03 = $('.step.step03 input[type="checkbox"]').length;
        var checked03 = $('.step.step03 input[type="checkbox"]:checked').length;

        var percentage = Math.round( ((checked01/checkboxes01) * stepOnePercentage) + ((checked02/checkboxes02) * stepTwoPercentage) + ((checked03/checkboxes03) * stepThreePercentage) );

        var wHeight = $(window).height(); // Height of view port
        var eOffset = $('#timelineNav').offset().top; // Y-offset of element
        var eHeight = $('#timelineNav').height(); // Height of element


        //set nav step as complete if all checkboxes are checked off
        if (checked01/checkboxes01 === 1){
            $('.stepOneNav').addClass('g-complete');
        }else{
            $('.stepOneNav').removeClass('g-complete');
        }
        if (checked02/checkboxes02 === 1){
            $('.stepTwoNav').addClass('g-complete');
        }else{
            $('.stepTwoNav').removeClass('g-complete');
        }
        if (checked03/checkboxes03 === 1){
            $('.stepThreeNav').addClass('g-complete');
        }else{
            $('.stepThreeNav').removeClass('g-complete');
        }

        if(currentStep == 1){
            if (checked01/checkboxes01 === 1){
                $('.g-timeline-next').addClass('g-active');
                $('html,body').animate({
                    scrollTop: eOffset - wHeight + eHeight
                },'slow');
            }else{
                $('.g-timeline-next').removeClass('g-active');
            }
        }else if (currentStep === 2){
            if (checked02/checkboxes02 === 1){
                $('.g-timeline-next').addClass('g-active');
                $('html,body').animate({
                    scrollTop: eOffset - wHeight + eHeight
                },'slow');
            }else{
                $('.g-timeline-next').removeClass('g-active');
            }
        }else{
            $('.g-timeline-next').removeClass('g-active');
        }

        if(percentage === 100){
            var inst = $('[data-remodal-id=modal-complete]').remodal({hashTracking: false});
            inst.open();
        }

        $('.radial-progress').attr('data-progress', percentage);
        $('.radial-progress .percentage').text(percentage+"%");
    }


    /*------------------------------------*\
                    START PAGE
    \*------------------------------------*/

    if($('body').hasClass('how-to-apply-interactive-start')){
        var locationCookie = document.cookie.replace(/(?:(?:^|.*;\s*)schoolLocation\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        var aboutMeCookie = document.cookie.replace(/(?:(?:^|.*;\s*)aboutMe\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        var offeredCookie = document.cookie.replace(/(?:(?:^|.*;\s*)offered\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        var startDateCookie = document.cookie.replace(/(?:(?:^|.*;\s*)startDate\s*\=\s*([^;]*).*$)|^.*$/, "$1");

        //if we have a location cookie value
        if(locationCookie){
           $('#schoolLocation').val(locationCookie); 

           //update other dropdown options
            if(locationCookie === "01" || locationCookie === "02" ){
                aboutMeOptions = {
                  "Select an option" : null,
                  "I am currently in high school": "01",
                  "I am upgrading or planning to upgrade": "02",
                  "I've been out of high school for a while": "03",
                  "I have completed a post-secondary course or program": "04"
                };
            }else if(locationCookie === "03"){
                aboutMeOptions = {
                    "Select an option" : null,
                    "I am an international student": "05",
                    "I am a permanent resident or Canadian citizen": "06",
                };
            }
            $('#aboutMe').empty(); // remove old options
            $.each(aboutMeOptions, function(key,value) {
                if(value === null){
                    $('#aboutMe').append($("<option></option>").text(key));  
                }else{
                    $('#aboutMe').append($("<option></option>").attr("value", value).text(key));  
                }
            });

        }

        //if we have a aboutMeCookie
        if(aboutMeCookie){
           $('#aboutMe').val(aboutMeCookie); 
        }

        //if we have an 'offered' cookie
        if(offeredCookie){
           $('#offered').val(offeredCookie); 
        }

        //if we have an 'startDate' cookie
        if(startDateCookie){
           $('#startDate').val(startDateCookie); 
        }

        if(locationCookie && aboutMeCookie && offeredCookie && startDateCookie){
            window.lastStep();
        }else if(locationCookie && aboutMeCookie && offeredCookie){
            window.stepFour();
        }else if(locationCookie && aboutMeCookie){
            window.stepThree();
        }else if(locationCookie){
            window.stepTwo();
        }else{
            window.stepOne();
        }
    }

    // if the user changes the school location dropdown
    $('#schoolLocation').change(function(){
        var location = $(this).val();
        var locationText = $('#schoolLocation option:selected').text();

        if(location !== "Select an option"){

            //set cookie
            document.cookie = "schoolLocation=" + location + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
            document.cookie = "schoolLocationText=" + locationText + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";

            //update other dropdown options
            if(location === "01" || location === "02" ){
                aboutMeOptions = {
                  "Select an option" : null,
                  "I am currently in high school": "01",
                  "I am upgrading or planning to upgrade": "02",
                  "I've been out of high school for a while": "03",
                  "I have completed a post-secondary course or program": "04"
                };
            }else if(location === "03"){
                aboutMeOptions = {
                    "Select an option" : null,
                    "I am an international student": "05",
                    "I am a permanent resident or Canadian citizen": "06",
                };
            }

            $('#aboutMe').empty(); // remove old options
            $.each(aboutMeOptions, function(key,value) {
                if(value === null){
                    $('#aboutMe').append($("<option></option>").text(key));  
                }else{
                    $('#aboutMe').append($("<option></option>").attr("value", value).text(key));  
                }
            });
            window.stepTwo();
        }else{
            window.stepOne();
        }

    })

    //if the user changes 'about me' dropdown
    $('#aboutMe').change(function(){
        var aboutMe = $(this).val();
        var aboutMeText = $('#aboutMe option:selected').text();

        if(aboutMe !== "Select an option"){
            //set cookie
            document.cookie = "aboutMe=" + aboutMe + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
            document.cookie = "aboutMeText=" + aboutMeText + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
            //go to next step
            window.stepThree();
        }else{
            window.stepTwo();
        }
    })

    //if the user changes 'offered' dropdown
    $('#offered').change(function(){
        var offered = $(this).val();
        var offeredText = $('#offered option:selected').text();
        if(offered !== "Select an option"){
            document.cookie = "offered=" + offered + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
            document.cookie = "offeredText=" + offeredText + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
            window.stepFour();
        }else{
            window.stepThree();
        }
    })

    //if the user changes 'start date' dropdown
    $('#startDate').change(function(){
        var startDate = $(this).val();
        var startDateText = $('#startDate option:selected').text();
        if(startDate !== "Select an option"){
            document.cookie = "startDate=" + startDate + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
            document.cookie = "startDateText=" + startDateText + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
            window.lastStep();
        }else{
            window.stepFour();
        }
    })

    /*------------------------------------*\
                    INNER PAGES
    \*------------------------------------*/

    if($('body').hasClass('how-to-apply-interactive-inner')){
        window.innerPageLoad();
    }

    //if the user clicks 'reset'
    $('a.resetJourney').click(function(){
        //clear all cookies
        document.cookie = "schoolLocation=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "aboutMe=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "offered=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "startDate=; expires=Thu, 01 Jan 1970 00:00:00 GMT";

        document.cookie = "schoolLocationText=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "aboutMeText=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "offeredText=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "startDateText=; expires=Thu, 01 Jan 1970 00:00:00 GMT";

        document.cookie = "checkedBoxes=; expires=Thu, 01 Jan 1970 00:00:00 GMT";

        //go back to start page
        window.location.href = "/how-to-apply-interactive.html";

    })

    //when we open the profile modal
    $(document).on('opening', '.remodal', function () {
        var locationCookieText = document.cookie.replace(/(?:(?:^|.*;\s*)schoolLocationText\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        var aboutMeCookieText = document.cookie.replace(/(?:(?:^|.*;\s*)aboutMeText\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        var offeredCookieText = document.cookie.replace(/(?:(?:^|.*;\s*)offeredText\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        var startDateCookieText = document.cookie.replace(/(?:(?:^|.*;\s*)startDateText\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        $('#modal-content .location').html(locationCookieText);
        $('#modal-content .about-me').html(aboutMeCookieText);
        $('#modal-content .offered').html(offeredCookieText);
        $('#modal-content .start-date').html(startDateCookieText);
    });


    //moving between steps
    $('.nextStep').click(function(){
        currentStep ++;
        window.goToStep(currentStep);
    })

    $('.prevStep').click(function(){
        currentStep --;
        window.goToStep(currentStep);
    })

    $('.goToStep01').click(function(){
        currentStep = 1;
        window.goToStep(currentStep);
    })

    $('.goToStep02').click(function(){
        currentStep = 2;
        window.goToStep(currentStep);
    })

    $('.goToStep03').click(function(){
        currentStep = 3;
        window.goToStep(currentStep);
    })

    $('input[type="checkbox"]').change(function(){

        window.calculateProgress();

        var id = $(this).attr('id');

        if($(this).is(':checked')){
            checkedBoxes += id + ',';
        }else{
            checkedBoxes = checkedBoxes.replace(id + ',','');
        }

        //save checkboxes in cookies
        document.cookie = "checkedBoxes=" + checkedBoxes + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";

    })

});

