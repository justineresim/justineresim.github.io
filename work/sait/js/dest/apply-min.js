$(document).ready(function(){var e="How to Apply Intro",t="Before You Apply",o="When You Apply",a="After You Apply";window.stepOne=function(){$(".school-location").removeClass("g-disabled"),$(".about-me, .offered, .start-date, #startBtn").addClass("g-disabled").removeClass("g-active"),$("#aboutMe option:selected, #offered option:selected, #startDate option:selected").prop("selected",!1),document.cookie="schoolLocation=; expires=Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="aboutMe=; expires=Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="offered=; expires=Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="startDate=; expires=Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="schoolLocationText=; expires=Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="aboutMeText=; expires=Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="offeredText=; expires=Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="startDateText=; expires=Thu, 01 Jan 1970 00:00:00 GMT",$("#schoolLocation").focus(),$(".stepText").addClass("g-hidden"),$(".stepNav.stepOneNav").addClass("g-disabled")},window.stepTwo=function(){$(".school-location, .about-me").removeClass("g-disabled"),$(".offered, .start-date, #startBtn").addClass("g-disabled").removeClass("g-active"),$("#aboutMe option:selected, #offered option:selected, #startDate option:selected").prop("selected",!1),document.cookie="aboutMe=; expires=Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="offered=; expires=Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="startDate=; expires=Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="aboutMeText=; expires=Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="offeredText=; expires=Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="startDateText=; expires=Thu, 01 Jan 1970 00:00:00 GMT",$("#aboutMe").focus(),$(".stepText").addClass("g-hidden"),$(".stepNav.stepOneNav").addClass("g-disabled")},window.stepThree=function(){$(".school-location, .about-me, .offered").removeClass("g-disabled"),$(".start-date, #startBtn").addClass("g-disabled").removeClass("g-active"),$("#offered option:selected, #startDate option:selected").prop("selected",!1),document.cookie="offered=; expires=Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="startDate=; expires=Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="offeredText=; expires=Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="startDateText=; expires=Thu, 01 Jan 1970 00:00:00 GMT",$("#offered").focus(),$(".stepText").addClass("g-hidden"),$(".stepNav.stepOneNav").addClass("g-disabled")},window.stepFour=function(){$(".school-location, .about-me, .offered, .start-date").removeClass("g-disabled"),$("#startBtn").addClass("g-disabled").removeClass("g-active"),$("#startDate option:selected").prop("selected",!1),document.cookie="startDate=; expires=Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="startDateText=; expires=Thu, 01 Jan 1970 00:00:00 GMT",$("#startDate").focus(),$(".stepText").addClass("g-hidden"),$(".stepNav.stepOneNav").addClass("g-disabled")},window.lastStep=function(){$(".school-location, .about-me, .offered, .start-date, #startBtn").removeClass("g-disabled"),$("#startBtn").addClass("g-active"),$("html,body").animate({scrollTop:$("#startBtn").offset().top-$(window).height()/2},"slow"),$(".stepText.stepOneText").text("01."+t),$(".stepText.stepTwoText").text("02."+o),$(".stepText.stepThreeText").text("03."+a),$(".stepText").removeClass("g-hidden"),$(".stepNav.stepOneNav").removeClass("g-disabled")};var s,n=1,i=50,c=40,p=10;if(window.innerPageLoad=function(){var e=document.cookie.replace(/(?:(?:^|.*;\s*)schoolLocation\s*\=\s*([^;]*).*$)|^.*$/,"$1"),t=document.cookie.replace(/(?:(?:^|.*;\s*)aboutMe\s*\=\s*([^;]*).*$)|^.*$/,"$1"),a=document.cookie.replace(/(?:(?:^|.*;\s*)offered\s*\=\s*([^;]*).*$)|^.*$/,"$1"),n=document.cookie.replace(/(?:(?:^|.*;\s*)startDate\s*\=\s*([^;]*).*$)|^.*$/,"$1"),i=document.cookie.replace(/(?:(?:^|.*;\s*)checkedBoxes\s*\=\s*([^;]*).*$)|^.*$/,"$1");if(e&&t&&a&&n){if($(".nextStep a").text(o),i){s=i;var c=i.split(",");c.pop();for(var p=0;p<c.length;p++)$("#"+c[p]).prop("checked",!0)}else s="";calculateProgress()}else window.location.href="/how-to-apply-interactive.html"},window.setNav=function(s){var n=$('.step.step01 input[type="checkbox"]').length,i=$('.step.step01 input[type="checkbox"]:checked').length,c=$('.step.step02 input[type="checkbox"]').length,p=$('.step.step02 input[type="checkbox"]:checked').length;$('.step.step03 input[type="checkbox"]').length,$('.step.step03 input[type="checkbox"]:checked').length;$(".stepNav.g-active").removeClass("g-active");var d=($(".g-footer").height(),$(window).height(),$(window).height()),l=$("#timelineNav").offset().top,r=$("#timelineNav").height();1===s?($(".prevStep a").text(e),$(".nextStep a").text(o),$(".nextStep").removeClass("g-disabled"),$(".stepOneNav").addClass("g-active"),$(".stepTextMobile").text("Step 1 of 3"),i/n===1?($(".g-timeline-next").addClass("g-active"),$("html,body").animate({scrollTop:l-d+r},"slow")):$(".g-timeline-next").removeClass("g-active")):2===s?($(".prevStep a").text(t),$(".nextStep a").text(a),$(".nextStep").removeClass("g-disabled"),$(".stepTwoNav").addClass("g-active"),$(".stepTextMobile").text("Step 2 of 3"),p/c===1?($(".g-timeline-next").addClass("g-active"),$("html,body").animate({scrollTop:l-d+r},"slow")):$(".g-timeline-next").removeClass("g-active")):3===s&&($(".prevStep a").text(o),$(".nextStep").addClass("g-disabled"),$(".stepThreeNav").addClass("g-active"),$(".g-timeline-next").removeClass("g-active"),$(".stepTextMobile").text("Step 3 of 3"))},window.goToStep=function(e){if(0===e)window.location.href="/how-to-apply-interactive.html";else{var t=".step.step0"+n;$(t).addClass("g-active"),$(t).siblings().removeClass("g-active"),$("html, body").animate({scrollTop:0},"fast"),window.setNav(n)}},window.calculateProgress=function(){var e=$('.step.step01 input[type="checkbox"]').length,t=$('.step.step01 input[type="checkbox"]:checked').length,o=$('.step.step02 input[type="checkbox"]').length,a=$('.step.step02 input[type="checkbox"]:checked').length,s=$('.step.step03 input[type="checkbox"]').length,d=$('.step.step03 input[type="checkbox"]:checked').length,l=Math.round(t/e*i+a/o*c+d/s*p),r=$(window).height(),u=$("#timelineNav").offset().top,h=$("#timelineNav").height();if(t/e===1?$(".stepOneNav").addClass("g-complete"):$(".stepOneNav").removeClass("g-complete"),a/o===1?$(".stepTwoNav").addClass("g-complete"):$(".stepTwoNav").removeClass("g-complete"),d/s===1?$(".stepThreeNav").addClass("g-complete"):$(".stepThreeNav").removeClass("g-complete"),1==n?t/e===1?($(".g-timeline-next").addClass("g-active"),$("html,body").animate({scrollTop:u-r+h},"slow")):$(".g-timeline-next").removeClass("g-active"):2===n&&a/o===1?($(".g-timeline-next").addClass("g-active"),$("html,body").animate({scrollTop:u-r+h},"slow")):$(".g-timeline-next").removeClass("g-active"),100===l){var m=$("[data-remodal-id=modal-complete]").remodal({hashTracking:!1});m.open()}$(".radial-progress").attr("data-progress",l),$(".radial-progress .percentage").text(l+"%")},$("body").hasClass("how-to-apply-interactive-start")){var d=document.cookie.replace(/(?:(?:^|.*;\s*)schoolLocation\s*\=\s*([^;]*).*$)|^.*$/,"$1"),l=document.cookie.replace(/(?:(?:^|.*;\s*)aboutMe\s*\=\s*([^;]*).*$)|^.*$/,"$1"),r=document.cookie.replace(/(?:(?:^|.*;\s*)offered\s*\=\s*([^;]*).*$)|^.*$/,"$1"),u=document.cookie.replace(/(?:(?:^|.*;\s*)startDate\s*\=\s*([^;]*).*$)|^.*$/,"$1");d&&($("#schoolLocation").val(d),"01"===d||"02"===d?aboutMeOptions={"Select an option":null,"I am currently in high school":"01","I am upgrading or planning to upgrade":"02","I've been out of high school for a while":"03","I have completed a post-secondary course or program":"04"}:"03"===d&&(aboutMeOptions={"Select an option":null,"I am an international student":"05","I am a permanent resident or Canadian citizen":"06"}),$("#aboutMe").empty(),$.each(aboutMeOptions,function(e,t){null===t?$("#aboutMe").append($("<option></option>").text(e)):$("#aboutMe").append($("<option></option>").attr("value",t).text(e))})),l&&$("#aboutMe").val(l),r&&$("#offered").val(r),u&&$("#startDate").val(u),d&&l&&r&&u?window.lastStep():d&&l&&r?window.stepFour():d&&l?window.stepThree():d?window.stepTwo():window.stepOne()}$("#schoolLocation").change(function(){var e=$(this).val(),t=$("#schoolLocation option:selected").text();"Select an option"!==e?(document.cookie="schoolLocation="+e+"; expires=Fri, 31 Dec 9999 23:59:59 GMT",document.cookie="schoolLocationText="+t+"; expires=Fri, 31 Dec 9999 23:59:59 GMT","01"===e||"02"===e?aboutMeOptions={"Select an option":null,"I am currently in high school":"01","I am upgrading or planning to upgrade":"02","I've been out of high school for a while":"03","I have completed a post-secondary course or program":"04"}:"03"===e&&(aboutMeOptions={"Select an option":null,"I am an international student":"05","I am a permanent resident or Canadian citizen":"06"}),$("#aboutMe").empty(),$.each(aboutMeOptions,function(e,t){null===t?$("#aboutMe").append($("<option></option>").text(e)):$("#aboutMe").append($("<option></option>").attr("value",t).text(e))}),window.stepTwo()):window.stepOne()}),$("#aboutMe").change(function(){var e=$(this).val(),t=$("#aboutMe option:selected").text();"Select an option"!==e?(document.cookie="aboutMe="+e+"; expires=Fri, 31 Dec 9999 23:59:59 GMT",document.cookie="aboutMeText="+t+"; expires=Fri, 31 Dec 9999 23:59:59 GMT",window.stepThree()):window.stepTwo()}),$("#offered").change(function(){var e=$(this).val(),t=$("#offered option:selected").text();"Select an option"!==e?(document.cookie="offered="+e+"; expires=Fri, 31 Dec 9999 23:59:59 GMT",document.cookie="offeredText="+t+"; expires=Fri, 31 Dec 9999 23:59:59 GMT",window.stepFour()):window.stepThree()}),$("#startDate").change(function(){var e=$(this).val(),t=$("#startDate option:selected").text();"Select an option"!==e?(document.cookie="startDate="+e+"; expires=Fri, 31 Dec 9999 23:59:59 GMT",document.cookie="startDateText="+t+"; expires=Fri, 31 Dec 9999 23:59:59 GMT",window.lastStep()):window.stepFour()}),$("body").hasClass("how-to-apply-interactive-inner")&&window.innerPageLoad(),$("a.resetJourney").click(function(){document.cookie="schoolLocation=; expires=Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="aboutMe=; expires=Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="offered=; expires=Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="startDate=; expires=Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="schoolLocationText=; expires=Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="aboutMeText=; expires=Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="offeredText=; expires=Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="startDateText=; expires=Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="checkedBoxes=; expires=Thu, 01 Jan 1970 00:00:00 GMT",window.location.href="/how-to-apply-interactive.html"}),$(document).on("opening",".remodal",function(){var e=document.cookie.replace(/(?:(?:^|.*;\s*)schoolLocationText\s*\=\s*([^;]*).*$)|^.*$/,"$1"),t=document.cookie.replace(/(?:(?:^|.*;\s*)aboutMeText\s*\=\s*([^;]*).*$)|^.*$/,"$1"),o=document.cookie.replace(/(?:(?:^|.*;\s*)offeredText\s*\=\s*([^;]*).*$)|^.*$/,"$1"),a=document.cookie.replace(/(?:(?:^|.*;\s*)startDateText\s*\=\s*([^;]*).*$)|^.*$/,"$1");$("#modal-content .location").html(e),$("#modal-content .about-me").html(t),$("#modal-content .offered").html(o),$("#modal-content .start-date").html(a)}),$(".nextStep").click(function(){n++,window.goToStep(n)}),$(".prevStep").click(function(){n--,window.goToStep(n)}),$(".goToStep01").click(function(){n=1,window.goToStep(n)}),$(".goToStep02").click(function(){n=2,window.goToStep(n)}),$(".goToStep03").click(function(){n=3,window.goToStep(n)}),$('input[type="checkbox"]').change(function(){window.calculateProgress();var e=$(this).attr("id");$(this).is(":checked")?s+=e+",":s=s.replace(e+",",""),document.cookie="checkedBoxes="+s+"; expires=Fri, 31 Dec 9999 23:59:59 GMT"})});