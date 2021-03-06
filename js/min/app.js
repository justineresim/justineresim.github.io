//Angular JS 


var myApp = angular.module('angularApp', ['ngRoute', 'ngAnimate', 'ngSanitize']);

// configure our routes
myApp.config(["$routeProvider", function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'js/views/home.html',
            controller  : 'HomeCtrl'
        })

        // route for the work page
        .when('/work', {
            templateUrl : 'js/views/work.html',
            controller  : 'WorkCtrl'
        })

        // route for the gloabl styles page
        .when('/styles', {
            templateUrl : 'js/views/styles.html',
            controller  : 'StylesCtrl'
        })

        .otherwise({ redirectTo: '/' });
}]);



myApp.controller('HomeCtrl', ["$scope", "$rootScope", function ($scope, $rootScope) {

    $rootScope.bodyClass = 'home';

}]);
myApp.controller('WorkCtrl', ["$scope", "$rootScope", "$location", function ($scope, $rootScope, $location) {

	$rootScope.bodyClass = 'work';

    $scope.fancyBox = function(par) {
        var className = '.fancy-box-'+par;
        openFancyBox(className);
    }

    $scope.updateTag = function(tag){
        $scope.selectedTag = tag;
    }


    $scope.workFilter = function (item) { 
        if($location.search().type == 'webapplications' || $location.search().type == 'websites' || $location.search().type == 'styleguides'){
            $scope.selectedTag = $location.search().type;
        }else{
            return item; 
        }
        var found = false;
        angular.forEach(item.tags, function(value, key) {
            if($scope.selectedTag == value){
                found = true;
            }
        });
        if(found == true){
            return item; 
        }
    };

	$scope.work = [
        {
            title: 'SAIT',
            text: 'SAIT is Alberta’s third-largest post-secondary institution, educating approximately 50,000 students per year globally with an emphasis on applied education and research.',
            image: 'img/work/sait/1.png',
            prototype: 'sait/youth/style-guide',
            case: 'https://res.im/work/sait/',
            role: 'Front-end development',
            count: 17,
            tags: ['websites', 'styleguides'],
            images: [
                {
                    src: 'img/work/sait/1.png',
                    count: 17
                },
                {
                    src: 'img/work/sait/2.png',
                    count: 17
                },
                {
                    src: 'img/work/sait/3.png',
                    count: 17
                },
                {
                    src: 'img/work/sait/4.png',
                    count: 17
                },
                {
                    src: 'img/work/sait/5.png',
                    count: 17
                },
                {
                    src: 'img/work/sait/6.png',
                    count: 17
                },
                {
                    src: 'img/work/sait/7.png',
                    count: 17
                },
                {
                    src: 'img/work/sait/8.png',
                    count: 17
                },
                {
                    src: 'img/work/sait/9.png',
                    count: 17
                },
                {
                    src: 'img/work/sait/10.png',
                    count: 17
                },
                {
                    src: 'img/work/sait/11.png',
                    count: 17
                },
                {
                    src: 'img/work/sait/12.png',
                    count: 17
                },
                {
                    src: 'img/work/sait/13.png',
                    count: 17
                },
                {
                    src: 'img/work/sait/14.png',
                    count: 17
                },
                {
                    src: 'img/work/sait/15.png',
                    count: 17
                }
            ]
        },
        {
            title: '3M Safety Admin Panel',
            text: 'Find and edit product data, add products to your custom catalogues to create a professional PDF to share with clients.',
            image: 'img/work/admin/1.png',
            role: 'Development',
            count: 16,
            tags: ['webapplications', 'styleguides'],
            images: [
                {
                    src: 'img/work/admin/1.png',
                    count: 16
                },
                {
                    src: 'img/work/admin/2.png',
                    count: 16
                },
                {
                    src: 'img/work/admin/3.png',
                    count: 16
                },
                {
                    src: 'img/work/admin/4.png',
                    count: 16
                },
                {
                    src: 'img/work/admin/5.png',
                    count: 16
                }
            ]
        },
        {
            title: '3M Personal Safety Division',
            text: 'Find 3M Personal Safety Division products easier with 3M\'s Product Selector and Help Me Choose web application.',
            image: 'img/work/safety/4.png',
            role: 'Development',
            count: 15,
            tags: ['webapplications', 'styleguides'],
            images: [
                {
                    src: 'img/work/safety/4.png',
                    count: 15
                },
                {
                    src: 'img/work/safety/5.png',
                    count: 15
                },
                {
                    src: 'img/work/safety/6.png',
                    count: 15
                },
                {
                    src: 'img/work/safety/7.png',
                    count: 15
                },
                {
                    src: 'img/work/safety/1.png',
                    count: 15
                },
                {
                    src: 'img/work/safety/2.png',
                    count: 15
                },
                {
                    src: 'img/work/safety/3.png',
                    count: 15
                }
            ]
        },
        {
            title: '3M Select Showcase',
            text: '3M Select Showcase, a gallery of projects featuring 3M Graphics Products and Architectural Finishes masterfully executed by our partners.',
            image: 'img/work/jaws/1.png',
            role: 'Development',
            count: 14,
            tags: ['websites'],
            images: [
                {
                    src: 'img/work/jaws/1.png',
                    count: 14
                },
                {
                    src: 'img/work/jaws/2.png',
                    count: 14
                },
                {
                    src: 'img/work/jaws/3.png',
                    count: 14
                },
                {
                    src: 'img/work/jaws/4.png',
                    count: 14
                },
                {
                    src: 'img/work/jaws/5.png',
                    count: 14
                },
                {
                    src: 'img/work/jaws/6.png',
                    count: 14
                },
                {
                    src: 'img/work/jaws/7.png',
                    count: 14
                },
                {
                    src: 'img/work/jaws/8.png',
                    count: 14
                },
                {
                    src: 'img/work/jaws/9.png',
                    count: 14
                },
            ]
        },
        {
            title: 'Res.im',
            text: 'UX research, usability testing, and digital product design to help clients discover and capitalize on new ideas.',
            image: 'img/work/resim/1.png',
            role: 'Development',
            url: 'https://res.im',
            count: 13,
            tags: ['websites'],
            images: [
                {
                    src: 'img/work/resim/1.png',
                    count: 13
                },
                {
                    src: 'img/work/resim/2.png',
                    count: 13
                },
                {
                    src: 'img/work/resim/3.png',
                    count: 13
                },
                {
                    src: 'img/work/resim/4.png',
                    count: 13
                },
                {
                    src: 'img/work/resim/5.png',
                    count: 13
                },
                {
                    src: 'img/work/resim/6.png',
                    count: 13
                },
                {
                    src: 'img/work/resim/7.png',
                    count: 13
                },
                {
                    src: 'img/work/resim/8.png',
                    count: 13
                }
            ]
        },
        {
            title: 'PrecedentJD',
            text: 'PrecedentJD is home to everything law students to kick-start their legal careers — from how to ace their interviews, dress the part and get hired back.',
            image: 'img/work/student/1.png',
            role: 'Development',
            url: 'https://precedentjd.com/',
            count: 12,
            tags: ['websites'],
            images: [
                {
                    src: 'img/work/student/1.png',
                    count: 12
                },
                {
                    src: 'img/work/student/2.png',
                    count: 12
                },
                {
                    src: 'img/work/student/3.png',
                    count: 12
                },
                {
                    src: 'img/work/student/4.png',
                    count: 12
                },
                {
                    src: 'img/work/student/5.png',
                    count: 12
                }
            ]
        },
        {
            title: 'Durham College',
            text: 'Durham College is a post-secondary institution east of Toronto, with 30,000 students and campuses in Oshawa and Whitby, Ontario, and a learning site in Pickering.',
            image: 'img/work/durham/1.png',
            case: 'https://res.im/work/durham-college/',
            role: 'Front-end development',
            url: 'https://durhamcollege.ca/',
            // externalPrototype: 'http://review.durham.git.resolutionim.com/styleguide',
            count: 11,
            tags: ['websites', 'styleguides'],
            images: [
                {
                    src: 'img/work/durham/1.png',
                    count: 11
                },
                {
                    src: 'img/work/durham/2.png',
                    count: 11
                },
                {
                    src: 'img/work/durham/3.png',
                    count: 11
                },
                {
                    src: 'img/work/durham/4.png',
                    count: 11
                },
                {
                    src: 'img/work/durham/5.png',
                    count: 11
                },
                {
                    src: 'img/work/durham/6.png',
                    count: 11
                },
                {
                    src: 'img/work/durham/7.png',
                    count: 11
                },
                {
                    src: 'img/work/durham/8.png',
                    count: 11
                },
                {
                    src: 'img/work/durham/9.png',
                    count: 11
                }
            ]
        }
    ];

}])
myApp.controller('StylesCtrl', ["$scope", "$rootScope", "$window", function ($scope, $rootScope, $window) {

	$rootScope.bodyClass = 'styles';

	$scope.scrollToTop = function () {
		$scope.selected = 'header';
	};


	$scope.selected = 'header';

	$scope.$watch("selected", function(newValue, oldValue) {
		$(document).ready(function(){
			$('html,body').animate({
	            scrollTop: $(newValue).offset().top - 20
	        })
		})
	});

}]);
!function(a,b,c,d){var e=c("html"),f=c(a),g=c(b),h=c.fancybox=function(){h.open.apply(this,arguments)},i=navigator.userAgent.match(/msie/i),j=null,k=b.createTouch!==d,l=function(a){return a&&a.hasOwnProperty&&a instanceof c},m=function(a){return a&&"string"===c.type(a)},n=function(a){return m(a)&&0<a.indexOf("%")},o=function(a,b){var c=parseInt(a,10)||0;return b&&n(a)&&(c*=h.getViewport()[b]/100),Math.ceil(c)},p=function(a,b){return o(a,b)+"px"};c.extend(h,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!k,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(i?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:c.noop,beforeLoad:c.noop,afterLoad:c.noop,beforeShow:c.noop,afterShow:c.noop,beforeChange:c.noop,beforeClose:c.noop,afterClose:c.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,b){return a&&(c.isPlainObject(b)||(b={}),!1!==h.close(!0))?(c.isArray(a)||(a=l(a)?c(a).get():[a]),c.each(a,function(e,f){var i,j,k,n,o,g={};"object"===c.type(f)&&(f.nodeType&&(f=c(f)),l(f)?(g={href:f.data("fancybox-href")||f.attr("href"),title:f.data("fancybox-title")||f.attr("title"),isDom:!0,element:f},c.metadata&&c.extend(!0,g,f.metadata())):g=f),i=b.href||g.href||(m(f)?f:null),j=b.title!==d?b.title:g.title||"",n=(k=b.content||g.content)?"html":b.type||g.type,!n&&g.isDom&&(n=f.data("fancybox-type"),n||(n=(n=f.prop("class").match(/fancybox\.(\w+)/))?n[1]:null)),m(i)&&(n||(h.isImage(i)?n="image":h.isSWF(i)?n="swf":"#"===i.charAt(0)?n="inline":m(f)&&(n="html",k=f)),"ajax"===n&&(o=i.split(/\s+/,2),i=o.shift(),o=o.shift())),k||("inline"===n?i?k=c(m(i)?i.replace(/.*(?=#[^\s]+$)/,""):i):g.isDom&&(k=f):"html"===n?k=i:!n&&!i&&g.isDom&&(n="inline",k=f)),c.extend(g,{href:i,type:n,content:k,title:j,selector:o}),a[e]=g}),h.opts=c.extend(!0,{},h.defaults,b),b.keys!==d&&(h.opts.keys=b.keys?c.extend({},h.defaults.keys,b.keys):!1),h.group=a,h._start(h.opts.index)):void 0},cancel:function(){var a=h.coming;a&&!1!==h.trigger("onCancel")&&(h.hideLoading(),h.ajaxLoad&&h.ajaxLoad.abort(),h.ajaxLoad=null,h.imgPreload&&(h.imgPreload.onload=h.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),h.coming=null,h.current||h._afterZoomOut(a))},close:function(a){h.cancel(),!1!==h.trigger("beforeClose")&&(h.unbindEvents(),h.isActive&&(h.isOpen&&!0!==a?(h.isOpen=h.isOpened=!1,h.isClosing=!0,c(".fancybox-item, .fancybox-nav").remove(),h.wrap.stop(!0,!0).removeClass("fancybox-opened"),h.transitions[h.current.closeMethod]()):(c(".fancybox-wrap").stop(!0).trigger("onReset").remove(),h._afterZoomOut())))},play:function(a){var b=function(){clearTimeout(h.player.timer)},c=function(){b(),h.current&&h.player.isActive&&(h.player.timer=setTimeout(h.next,h.current.playSpeed))},d=function(){b(),g.unbind(".player"),h.player.isActive=!1,h.trigger("onPlayEnd")};!0===a||!h.player.isActive&&!1!==a?h.current&&(h.current.loop||h.current.index<h.group.length-1)&&(h.player.isActive=!0,g.bind({"onCancel.player beforeClose.player":d,"onUpdate.player":c,"beforeLoad.player":b}),c(),h.trigger("onPlayStart")):d()},next:function(a){var b=h.current;b&&(m(a)||(a=b.direction.next),h.jumpto(b.index+1,a,"next"))},prev:function(a){var b=h.current;b&&(m(a)||(a=b.direction.prev),h.jumpto(b.index-1,a,"prev"))},jumpto:function(a,b,c){var e=h.current;e&&(a=o(a),h.direction=b||e.direction[a>=e.index?"next":"prev"],h.router=c||"jumpto",e.loop&&(0>a&&(a=e.group.length+a%e.group.length),a%=e.group.length),e.group[a]!==d&&(h.cancel(),h._start(a)))},reposition:function(a,b){var f,d=h.current,e=d?d.wrap:null;e&&(f=h._getPosition(b),a&&"scroll"===a.type?(delete f.position,e.stop(!0,!0).animate(f,200)):(e.css(f),d.pos=c.extend({},d.dim,f)))},update:function(a){var b=a&&a.type,c=!b||"orientationchange"===b;c&&(clearTimeout(j),j=null),h.isOpen&&!j&&(j=setTimeout(function(){var d=h.current;d&&!h.isClosing&&(h.wrap.removeClass("fancybox-tmp"),(c||"load"===b||"resize"===b&&d.autoResize)&&h._setDimension(),"scroll"===b&&d.canShrink||h.reposition(a),h.trigger("onUpdate"),j=null)},c&&!k?0:300))},toggle:function(a){h.isOpen&&(h.current.fitToView="boolean"===c.type(a)?a:!h.current.fitToView,k&&(h.wrap.removeAttr("style").addClass("fancybox-tmp"),h.trigger("onUpdate")),h.update())},hideLoading:function(){g.unbind(".loading"),c("#fancybox-loading").remove()},showLoading:function(){var a,b;h.hideLoading(),a=c('<div id="fancybox-loading"><div></div></div>').click(h.cancel).appendTo("body"),g.bind("keydown.loading",function(a){27===(a.which||a.keyCode)&&(a.preventDefault(),h.cancel())}),h.defaults.fixed||(b=h.getViewport(),a.css({position:"absolute",top:.5*b.h+b.y,left:.5*b.w+b.x}))},getViewport:function(){var b=h.current&&h.current.locked||!1,c={x:f.scrollLeft(),y:f.scrollTop()};return b?(c.w=b[0].clientWidth,c.h=b[0].clientHeight):(c.w=k&&a.innerWidth?a.innerWidth:f.width(),c.h=k&&a.innerHeight?a.innerHeight:f.height()),c},unbindEvents:function(){h.wrap&&l(h.wrap)&&h.wrap.unbind(".fb"),g.unbind(".fb"),f.unbind(".fb")},bindEvents:function(){var b,a=h.current;a&&(f.bind("orientationchange.fb"+(k?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),h.update),(b=a.keys)&&g.bind("keydown.fb",function(e){var f=e.which||e.keyCode,g=e.target||e.srcElement;return 27===f&&h.coming?!1:void(!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey&&(!g||!g.type&&!c(g).is("[contenteditable]"))&&c.each(b,function(b,g){return 1<a.group.length&&g[f]!==d?(h[b](g[f]),e.preventDefault(),!1):-1<c.inArray(f,g)?(h[b](),e.preventDefault(),!1):void 0}))}),c.fn.mousewheel&&a.mouseWheel&&h.wrap.bind("mousewheel.fb",function(b,d,e,f){for(var g=c(b.target||null),i=!1;g.length&&!i&&!g.is(".fancybox-skin")&&!g.is(".fancybox-wrap");)i=g[0]&&!(g[0].style.overflow&&"hidden"===g[0].style.overflow)&&(g[0].clientWidth&&g[0].scrollWidth>g[0].clientWidth||g[0].clientHeight&&g[0].scrollHeight>g[0].clientHeight),g=c(g).parent();0!==d&&!i&&1<h.group.length&&!a.canShrink&&(f>0||e>0?h.prev(f>0?"down":"left"):(0>f||0>e)&&h.next(0>f?"up":"right"),b.preventDefault())}))},trigger:function(a,b){var d,e=b||h.coming||h.current;if(e){if(c.isFunction(e[a])&&(d=e[a].apply(e,Array.prototype.slice.call(arguments,1))),!1===d)return!1;e.helpers&&c.each(e.helpers,function(b,d){d&&h.helpers[b]&&c.isFunction(h.helpers[b][a])&&h.helpers[b][a](c.extend(!0,{},h.helpers[b].defaults,d),e)}),g.trigger(a)}},isImage:function(a){return m(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return m(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d,e,b={};if(a=o(a),d=h.group[a]||null,!d)return!1;if(b=c.extend(!0,{},h.opts,d),d=b.margin,e=b.padding,"number"===c.type(d)&&(b.margin=[d,d,d,d]),"number"===c.type(e)&&(b.padding=[e,e,e,e]),b.modal&&c.extend(!0,b,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),b.autoSize&&(b.autoWidth=b.autoHeight=!0),"auto"===b.width&&(b.autoWidth=!0),"auto"===b.height&&(b.autoHeight=!0),b.group=h.group,b.index=a,h.coming=b,!1===h.trigger("beforeLoad"))h.coming=null;else{if(e=b.type,d=b.href,!e)return h.coming=null,h.current&&h.router&&"jumpto"!==h.router?(h.current.index=a,h[h.router](h.direction)):!1;if(h.isActive=!0,("image"===e||"swf"===e)&&(b.autoHeight=b.autoWidth=!1,b.scrolling="visible"),"image"===e&&(b.aspectRatio=!0),"iframe"===e&&k&&(b.scrolling="scroll"),b.wrap=c(b.tpl.wrap).addClass("fancybox-"+(k?"mobile":"desktop")+" fancybox-type-"+e+" fancybox-tmp "+b.wrapCSS).appendTo(b.parent||"body"),c.extend(b,{skin:c(".fancybox-skin",b.wrap),outer:c(".fancybox-outer",b.wrap),inner:c(".fancybox-inner",b.wrap)}),c.each(["Top","Right","Bottom","Left"],function(a,c){b.skin.css("padding"+c,p(b.padding[a]))}),h.trigger("onReady"),"inline"===e||"html"===e){if(!b.content||!b.content.length)return h._error("content")}else if(!d)return h._error("href");"image"===e?h._loadImage():"ajax"===e?h._loadAjax():"iframe"===e?h._loadIframe():h._afterLoad()}},_error:function(a){c.extend(h.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:h.coming.tpl.error}),h._afterLoad()},_loadImage:function(){var a=h.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null,h.coming.width=this.width/h.opts.pixelRatio,h.coming.height=this.height/h.opts.pixelRatio,h._afterLoad()},a.onerror=function(){this.onload=this.onerror=null,h._error("image")},a.src=h.coming.href,!0!==a.complete&&h.showLoading()},_loadAjax:function(){var a=h.coming;h.showLoading(),h.ajaxLoad=c.ajax(c.extend({},a.ajax,{url:a.href,error:function(a,b){h.coming&&"abort"!==b?h._error("ajax",a):h.hideLoading()},success:function(b,c){"success"===c&&(a.content=b,h._afterLoad())}}))},_loadIframe:function(){var a=h.coming,b=c(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",k?"auto":a.iframe.scrolling).attr("src",a.href);c(a.wrap).bind("onReset",function(){try{c(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}}),a.iframe.preload&&(h.showLoading(),b.one("load",function(){c(this).data("ready",1),k||c(this).bind("load.fb",h.update),c(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),h._afterLoad()})),a.content=b.appendTo(a.inner),a.iframe.preload||h._afterLoad()},_preloadImages:function(){var e,f,a=h.group,b=h.current,c=a.length,d=b.preload?Math.min(b.preload,c-1):0;for(f=1;d>=f;f+=1)e=a[(b.index+f)%c],"image"===e.type&&e.href&&((new Image).src=e.href)},_afterLoad:function(){var d,e,f,g,i,a=h.coming,b=h.current;if(h.hideLoading(),a&&!1!==h.isActive)if(!1===h.trigger("afterLoad",a,b))a.wrap.stop(!0).trigger("onReset").remove(),h.coming=null;else{switch(b&&(h.trigger("beforeChange",b),b.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),h.unbindEvents(),d=a.content,e=a.type,f=a.scrolling,c.extend(h,{wrap:a.wrap,skin:a.skin,outer:a.outer,inner:a.inner,current:a,previous:b}),g=a.href,e){case"inline":case"ajax":case"html":a.selector?d=c("<div>").html(d).find(a.selector):l(d)&&(d.data("fancybox-placeholder")||d.data("fancybox-placeholder",c('<div class="fancybox-placeholder"></div>').insertAfter(d).hide()),d=d.show().detach(),a.wrap.bind("onReset",function(){c(this).find(d).length&&d.hide().replaceAll(d.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case"image":d=a.tpl.image.replace("{href}",g);break;case"swf":d='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',i="",c.each(a.swf,function(a,b){d+='<param name="'+a+'" value="'+b+'"></param>',i+=" "+a+'="'+b+'"'}),d+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+i+"></embed></object>"}(!l(d)||!d.parent().is(a.inner))&&a.inner.append(d),h.trigger("beforeShow"),a.inner.css("overflow","yes"===f?"scroll":"no"===f?"hidden":f),h._setDimension(),h.reposition(),h.isOpen=!1,h.coming=null,h.bindEvents(),h.isOpened?b.prevMethod&&h.transitions[b.prevMethod]():c(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove(),h.transitions[h.isOpened?a.nextMethod:a.openMethod](),h._preloadImages()}},_setDimension:function(){var w,x,y,z,A,B,C,D,E,a=h.getViewport(),b=0,d=!1,e=!1,d=h.wrap,f=h.skin,g=h.inner,i=h.current,e=i.width,j=i.height,k=i.minWidth,l=i.minHeight,m=i.maxWidth,q=i.maxHeight,r=i.scrolling,s=i.scrollOutside?i.scrollbarWidth:0,t=i.margin,u=o(t[1]+t[3]),v=o(t[0]+t[2]);if(d.add(f).add(g).width("auto").height("auto").removeClass("fancybox-tmp"),t=o(f.outerWidth(!0)-f.width()),w=o(f.outerHeight(!0)-f.height()),x=u+t,y=v+w,z=n(e)?(a.w-x)*o(e)/100:e,A=n(j)?(a.h-y)*o(j)/100:j,"iframe"===i.type){if(E=i.content,i.autoHeight&&1===E.data("ready"))try{E[0].contentWindow.document.location&&(g.width(z).height(9999),B=E.contents().find("body"),s&&B.css("overflow-x","hidden"),A=B.outerHeight(!0))}catch(F){}}else(i.autoWidth||i.autoHeight)&&(g.addClass("fancybox-tmp"),i.autoWidth||g.width(z),i.autoHeight||g.height(A),i.autoWidth&&(z=g.width()),i.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp"));if(e=o(z),j=o(A),D=z/A,k=o(n(k)?o(k,"w")-x:k),m=o(n(m)?o(m,"w")-x:m),l=o(n(l)?o(l,"h")-y:l),q=o(n(q)?o(q,"h")-y:q),B=m,C=q,i.fitToView&&(m=Math.min(a.w-x,m),q=Math.min(a.h-y,q)),x=a.w-u,v=a.h-v,i.aspectRatio?(e>m&&(e=m,j=o(e/D)),j>q&&(j=q,e=o(j*D)),k>e&&(e=k,j=o(e/D)),l>j&&(j=l,e=o(j*D))):(e=Math.max(k,Math.min(e,m)),i.autoHeight&&"iframe"!==i.type&&(g.width(e),j=g.height()),j=Math.max(l,Math.min(j,q))),i.fitToView)if(g.width(e).height(j),d.width(e+t),a=d.width(),u=d.height(),i.aspectRatio)for(;(a>x||u>v)&&e>k&&j>l&&!(19<b++);)j=Math.max(l,Math.min(q,j-10)),e=o(j*D),k>e&&(e=k,j=o(e/D)),e>m&&(e=m,j=o(e/D)),g.width(e).height(j),d.width(e+t),a=d.width(),u=d.height();else e=Math.max(k,Math.min(e,e-(a-x))),j=Math.max(l,Math.min(j,j-(u-v)));s&&"auto"===r&&A>j&&x>e+t+s&&(e+=s),g.width(e).height(j),d.width(e+t),a=d.width(),u=d.height(),d=(a>x||u>v)&&e>k&&j>l,e=i.aspectRatio?B>e&&C>j&&z>e&&A>j:(B>e||C>j)&&(z>e||A>j),c.extend(i,{dim:{width:p(a),height:p(u)},origWidth:z,origHeight:A,canShrink:d,canExpand:e,wPadding:t,hPadding:w,wrapSpace:u-f.outerHeight(!0),skinSpace:f.height()-j}),!E&&i.autoHeight&&j>l&&q>j&&!e&&g.height("auto")},_getPosition:function(a){var b=h.current,c=h.getViewport(),d=b.margin,e=h.wrap.width()+d[1]+d[3],f=h.wrap.height()+d[0]+d[2],d={position:"absolute",top:d[0],left:d[3]};return b.autoCenter&&b.fixed&&!a&&f<=c.h&&e<=c.w?d.position="fixed":b.locked||(d.top+=c.y,d.left+=c.x),d.top=p(Math.max(d.top,d.top+(c.h-f)*b.topRatio)),d.left=p(Math.max(d.left,d.left+(c.w-e)*b.leftRatio)),d},_afterZoomIn:function(){var a=h.current;a&&(h.isOpen=h.isOpened=!0,h.wrap.css("overflow","visible").addClass("fancybox-opened"),h.update(),(a.closeClick||a.nextClick&&1<h.group.length)&&h.inner.css("cursor","pointer").bind("click.fb",function(b){!c(b.target).is("a")&&!c(b.target).parent().is("a")&&(b.preventDefault(),h[a.closeClick?"close":"next"]())}),a.closeBtn&&c(a.tpl.closeBtn).appendTo(h.skin).bind("click.fb",function(a){a.preventDefault(),h.close()}),a.arrows&&1<h.group.length&&((a.loop||0<a.index)&&c(a.tpl.prev).appendTo(h.outer).bind("click.fb",h.prev),(a.loop||a.index<h.group.length-1)&&c(a.tpl.next).appendTo(h.outer).bind("click.fb",h.next)),h.trigger("afterShow"),a.loop||a.index!==a.group.length-1?h.opts.autoPlay&&!h.player.isActive&&(h.opts.autoPlay=!1,h.play()):h.play(!1))},_afterZoomOut:function(a){a=a||h.current,c(".fancybox-wrap").trigger("onReset").remove(),c.extend(h,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),h.trigger("afterClose",a)}}),h.transitions={getOrigPosition:function(){var a=h.current,b=a.element,c=a.orig,d={},e=50,f=50,g=a.hPadding,i=a.wPadding,j=h.getViewport();return!c&&a.isDom&&b.is(":visible")&&(c=b.find("img:first"),c.length||(c=b)),l(c)?(d=c.offset(),c.is("img")&&(e=c.outerWidth(),f=c.outerHeight())):(d.top=j.y+(j.h-f)*a.topRatio,d.left=j.x+(j.w-e)*a.leftRatio),("fixed"===h.wrap.css("position")||a.locked)&&(d.top-=j.y,d.left-=j.x),d={top:p(d.top-g*a.topRatio),left:p(d.left-i*a.leftRatio),width:p(e+i),height:p(f+g)}},step:function(a,b){var c,d,e=b.prop;d=h.current;var f=d.wrapSpace,g=d.skinSpace;("width"===e||"height"===e)&&(c=b.end===b.start?1:(a-b.start)/(b.end-b.start),h.isClosing&&(c=1-c),d="width"===e?d.wPadding:d.hPadding,d=a-d,h.skin[e](o("width"===e?d:d-f*c)),h.inner[e](o("width"===e?d:d-f*c-g*c)))},zoomIn:function(){var a=h.current,b=a.pos,d=a.openEffect,e="elastic"===d,f=c.extend({opacity:1},b);delete f.position,e?(b=this.getOrigPosition(),a.openOpacity&&(b.opacity=.1)):"fade"===d&&(b.opacity=.1),h.wrap.css(b).animate(f,{duration:"none"===d?0:a.openSpeed,easing:a.openEasing,step:e?this.step:null,complete:h._afterZoomIn})},zoomOut:function(){var a=h.current,b=a.closeEffect,c="elastic"===b,d={opacity:.1};c&&(d=this.getOrigPosition(),a.closeOpacity&&(d.opacity=.1)),h.wrap.animate(d,{duration:"none"===b?0:a.closeSpeed,easing:a.closeEasing,step:c?this.step:null,complete:h._afterZoomOut})},changeIn:function(){var f,a=h.current,b=a.nextEffect,c=a.pos,d={opacity:1},e=h.direction;c.opacity=.1,"elastic"===b&&(f="down"===e||"up"===e?"top":"left","down"===e||"right"===e?(c[f]=p(o(c[f])-200),d[f]="+=200px"):(c[f]=p(o(c[f])+200),d[f]="-=200px")),"none"===b?h._afterZoomIn():h.wrap.css(c).animate(d,{duration:a.nextSpeed,easing:a.nextEasing,complete:h._afterZoomIn})},changeOut:function(){var a=h.previous,b=a.prevEffect,d={opacity:.1},e=h.direction;"elastic"===b&&(d["down"===e||"up"===e?"top":"left"]=("up"===e||"left"===e?"-":"+")+"=200px"),a.wrap.animate(d,{duration:"none"===b?0:a.prevSpeed,easing:a.prevEasing,complete:function(){c(this).trigger("onReset").remove()}})}},h.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!k,fixed:!0},overlay:null,fixed:!1,el:c("html"),create:function(a){a=c.extend({},this.defaults,a),this.overlay&&this.close(),this.overlay=c('<div class="fancybox-overlay"></div>').appendTo(h.coming?h.coming.parent:a.parent),this.fixed=!1,a.fixed&&h.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var b=this;a=c.extend({},this.defaults,a),this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a),this.fixed||(f.bind("resize.overlay",c.proxy(this.update,this)),this.update()),a.closeClick&&this.overlay.bind("click.overlay",function(a){return c(a.target).hasClass("fancybox-overlay")?(h.isActive?h.close():b.close(),!1):void 0}),this.overlay.css(a.css).show()},close:function(){var a,b;f.unbind("resize.overlay"),this.el.hasClass("fancybox-lock")&&(c(".fancybox-margin").removeClass("fancybox-margin"),a=f.scrollTop(),b=f.scrollLeft(),this.el.removeClass("fancybox-lock"),f.scrollTop(a).scrollLeft(b)),c(".fancybox-overlay").remove().hide(),c.extend(this,{overlay:null,fixed:!1})},update:function(){var c,a="100%";this.overlay.width(a).height("100%"),i?(c=Math.max(b.documentElement.offsetWidth,b.body.offsetWidth),g.width()>c&&(a=g.width())):g.width()>f.width()&&(a=g.width()),this.overlay.width(a).height(g.height())},onReady:function(a,b){var d=this.overlay;c(".fancybox-overlay").stop(!0,!0),d||this.create(a),a.locked&&this.fixed&&b.fixed&&(d||(this.margin=g.height()>f.height()?c("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1),!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var d,e;b.locked&&(!1!==this.margin&&(c("*").filter(function(){return"fixed"===c(this).css("position")&&!c(this).hasClass("fancybox-overlay")&&!c(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),d=f.scrollTop(),e=f.scrollLeft(),this.el.addClass("fancybox-lock"),f.scrollTop(d).scrollLeft(e)),this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!h.coming&&this.overlay.fadeOut(a.speedOut,c.proxy(this.close,this))}},h.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var b=h.current,d=b.title,e=a.type;if(c.isFunction(d)&&(d=d.call(b.element,b)),m(d)&&""!==c.trim(d)){switch(b=c('<div class="fancybox-title fancybox-title-'+e+'-wrap">'+d+"</div>"),e){case"inside":e=h.skin;break;case"outside":e=h.wrap;break;case"over":e=h.inner;break;default:e=h.skin,b.appendTo("body"),i&&b.width(b.width()),b.wrapInner('<span class="child"></span>'),h.current.margin[2]+=Math.abs(o(b.css("margin-bottom")))}b["top"===a.position?"prependTo":"appendTo"](e)}}},c.fn.fancybox=function(a){var b,d=c(this),e=this.selector||"",f=function(f){var j,k,g=c(this).blur(),i=b;!f.ctrlKey&&!f.altKey&&!f.shiftKey&&!f.metaKey&&!g.is(".fancybox-wrap")&&(j=a.groupAttr||"data-fancybox-group",k=g.attr(j),k||(j="rel",k=g.get(0)[j]),k&&""!==k&&"nofollow"!==k&&(g=e.length?c(e):d,g=g.filter("["+j+'="'+k+'"]'),i=g.index(this)),a.index=i,!1!==h.open(g,a)&&f.preventDefault())};return a=a||{},b=a.index||0,e&&!1!==a.live?g.undelegate(e,"click.fb-start").delegate(e+":not('.fancybox-item, .fancybox-nav')","click.fb-start",f):d.unbind("click.fb-start").bind("click.fb-start",f),this.filter("[data-fancybox-start=1]").trigger("click"),this},g.ready(function(){var b,f;if(c.scrollbarWidth===d&&(c.scrollbarWidth=function(){var a=c('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();return a.remove(),b}),c.support.fixedPosition===d){b=c.support,f=c('<div style="position:fixed;top:20px;"></div>').appendTo("body");var g=20===f[0].offsetTop||15===f[0].offsetTop;f.remove(),b.fixedPosition=g}c.extend(h.defaults,{scrollbarWidth:c.scrollbarWidth(),fixed:c.support.fixedPosition,parent:c("body")}),b=c(a).width(),e.addClass("fancybox-lock-test"),f=c(a).width(),e.removeClass("fancybox-lock-test"),c("<style type='text/css'>.fancybox-margin{margin-right:"+(f-b)+"px;}</style>").appendTo("head")})}(window,document,jQuery);
$(document).ready(function(){

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


    $('.fancy-box-trigger').click(function(){
        var id =  event.target.id;
        var tag = '.fancy-box-'+id;
    })

});

function openFancyBox(className){
    $(className).eq(0).trigger('click'); 
}
