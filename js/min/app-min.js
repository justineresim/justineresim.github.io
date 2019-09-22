var myApp=angular.module("angularApp",["ngRoute","ngAnimate","ngSanitize"]);function openFancyBox(e){$(e).eq(0).trigger("click")}myApp.config(["$routeProvider",function(e){e.when("/",{templateUrl:"js/views/home.html",controller:"HomeCtrl"}).when("/work",{templateUrl:"js/views/work.html",controller:"WorkCtrl"}).when("/styles",{templateUrl:"js/views/styles.html",controller:"StylesCtrl"}).otherwise({redirectTo:"/"})}]),myApp.controller("HomeCtrl",["$scope","$rootScope",function(e,t){t.bodyClass="home"}]),myApp.controller("WorkCtrl",["$scope","$rootScope","$location",function(e,t,n){t.bodyClass="work",e.fancyBox=function(e){openFancyBox(".fancy-box-"+e)},e.updateTag=function(t){e.selectedTag=t},e.workFilter=function(t){if("webapplications"!=n.search().type&&"websites"!=n.search().type&&"styleguides"!=n.search().type)return t;e.selectedTag=n.search().type;var o=!1;return angular.forEach(t.tags,function(t,n){e.selectedTag==t&&(o=!0)}),1==o?t:void 0},e.work=[{title:"SAIT",text:"SAIT is Alberta’s third-largest post-secondary institution, educating approximately 50,000 students per year globally with an emphasis on applied education and research.",image:"img/work/sait/1.png",prototype:"sait/youth/style-guide",case:"https://res.im/work/sait/",role:"Front-end development",count:17,tags:["websites","styleguides"],images:[{src:"img/work/sait/1.png",count:17},{src:"img/work/sait/2.png",count:17},{src:"img/work/sait/3.png",count:17},{src:"img/work/sait/4.png",count:17},{src:"img/work/sait/5.png",count:17},{src:"img/work/sait/6.png",count:17},{src:"img/work/sait/7.png",count:17},{src:"img/work/sait/8.png",count:17},{src:"img/work/sait/9.png",count:17},{src:"img/work/sait/10.png",count:17},{src:"img/work/sait/11.png",count:17},{src:"img/work/sait/12.png",count:17},{src:"img/work/sait/13.png",count:17},{src:"img/work/sait/14.png",count:17},{src:"img/work/sait/15.png",count:17}]},{title:"3M Safety Admin Panel",text:"Find and edit product data, add products to your custom catalogues to create a professional PDF to share with clients.",image:"img/work/admin/1.png",role:"Development",count:16,tags:["webapplications","styleguides"],images:[{src:"img/work/admin/1.png",count:16},{src:"img/work/admin/2.png",count:16},{src:"img/work/admin/3.png",count:16},{src:"img/work/admin/4.png",count:16},{src:"img/work/admin/5.png",count:16}]},{title:"3M Personal Safety Division",text:"Find 3M Personal Safety Division products easier with 3M's Product Selector and Help Me Choose web application.",image:"img/work/safety/4.png",role:"Development",count:15,tags:["webapplications","styleguides"],images:[{src:"img/work/safety/4.png",count:15},{src:"img/work/safety/5.png",count:15},{src:"img/work/safety/6.png",count:15},{src:"img/work/safety/7.png",count:15},{src:"img/work/safety/1.png",count:15},{src:"img/work/safety/2.png",count:15},{src:"img/work/safety/3.png",count:15}]},{title:"3M Select Showcase",text:"3M Select Showcase, a gallery of projects featuring 3M Graphics Products and Architectural Finishes masterfully executed by our partners.",image:"img/work/jaws/1.png",role:"Development",count:14,tags:["websites"],images:[{src:"img/work/jaws/1.png",count:14},{src:"img/work/jaws/2.png",count:14},{src:"img/work/jaws/3.png",count:14},{src:"img/work/jaws/4.png",count:14},{src:"img/work/jaws/5.png",count:14},{src:"img/work/jaws/6.png",count:14},{src:"img/work/jaws/7.png",count:14},{src:"img/work/jaws/8.png",count:14},{src:"img/work/jaws/9.png",count:14}]},{title:"Res.im",text:"UX research, usability testing, and digital product design to help clients discover and capitalize on new ideas.",image:"img/work/resim/1.png",role:"Development",url:"https://res.im",count:13,tags:["websites"],images:[{src:"img/work/resim/1.png",count:13},{src:"img/work/resim/2.png",count:13},{src:"img/work/resim/3.png",count:13},{src:"img/work/resim/4.png",count:13},{src:"img/work/resim/5.png",count:13},{src:"img/work/resim/6.png",count:13},{src:"img/work/resim/7.png",count:13},{src:"img/work/resim/8.png",count:13}]},{title:"PrecedentJD",text:"PrecedentJD is home to everything law students to kick-start their legal careers — from how to ace their interviews, dress the part and get hired back.",image:"img/work/student/1.png",role:"Development",url:"https://precedentjd.com/",count:12,tags:["websites"],images:[{src:"img/work/student/1.png",count:12},{src:"img/work/student/2.png",count:12},{src:"img/work/student/3.png",count:12},{src:"img/work/student/4.png",count:12},{src:"img/work/student/5.png",count:12}]},{title:"Durham College",text:"Durham College is a post-secondary institution east of Toronto, with 30,000 students and campuses in Oshawa and Whitby, Ontario, and a learning site in Pickering.",image:"img/work/durham/1.png",case:"https://res.im/work/durham-college/",role:"Front-end development",url:"https://durhamcollege.ca/",count:11,tags:["websites","styleguides"],images:[{src:"img/work/durham/1.png",count:11},{src:"img/work/durham/2.png",count:11},{src:"img/work/durham/3.png",count:11},{src:"img/work/durham/4.png",count:11},{src:"img/work/durham/5.png",count:11},{src:"img/work/durham/6.png",count:11},{src:"img/work/durham/7.png",count:11},{src:"img/work/durham/8.png",count:11},{src:"img/work/durham/9.png",count:11}]}]}]),myApp.controller("StylesCtrl",["$scope","$rootScope","$window",function(e,t,n){t.bodyClass="styles",e.scrollToTop=function(){e.selected="header"},e.selected="header",e.$watch("selected",function(e,t){$(document).ready(function(){$("html,body").animate({scrollTop:$(e).offset().top-20})})})}]),function(e,t,n,o){var i=n("html"),r=n(e),a=n(t),s=n.fancybox=function(){s.open.apply(this,arguments)},c=navigator.userAgent.match(/msie/i),l=null,p=t.createTouch!==o,d=function(e){return e&&e.hasOwnProperty&&e instanceof n},u=function(e){return e&&"string"===n.type(e)},g=function(e){return u(e)&&0<e.indexOf("%")},h=function(e,t){var n=parseInt(e,10)||0;return t&&g(e)&&(n*=s.getViewport()[t]/100),Math.ceil(n)},f=function(e,t){return h(e,t)+"px"};n.extend(s,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!p,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(c?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeChange:n.noop,beforeClose:n.noop,afterClose:n.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(e,t){return e&&(n.isPlainObject(t)||(t={}),!1!==s.close(!0))?(n.isArray(e)||(e=d(e)?n(e).get():[e]),n.each(e,function(i,r){var a,c,l,p,g,h={};"object"===n.type(r)&&(r.nodeType&&(r=n(r)),d(r)?(h={href:r.data("fancybox-href")||r.attr("href"),title:r.data("fancybox-title")||r.attr("title"),isDom:!0,element:r},n.metadata&&n.extend(!0,h,r.metadata())):h=r),a=t.href||h.href||(u(r)?r:null),c=t.title!==o?t.title:h.title||"",!(p=(l=t.content||h.content)?"html":t.type||h.type)&&h.isDom&&((p=r.data("fancybox-type"))||(p=(p=r.prop("class").match(/fancybox\.(\w+)/))?p[1]:null)),u(a)&&(p||(s.isImage(a)?p="image":s.isSWF(a)?p="swf":"#"===a.charAt(0)?p="inline":u(r)&&(p="html",l=r)),"ajax"===p&&(g=a.split(/\s+/,2),a=g.shift(),g=g.shift())),l||("inline"===p?a?l=n(u(a)?a.replace(/.*(?=#[^\s]+$)/,""):a):h.isDom&&(l=r):"html"===p?l=a:!p&&!a&&h.isDom&&(p="inline",l=r)),n.extend(h,{href:a,type:p,content:l,title:c,selector:g}),e[i]=h}),s.opts=n.extend(!0,{},s.defaults,t),t.keys!==o&&(s.opts.keys=!!t.keys&&n.extend({},s.defaults.keys,t.keys)),s.group=e,s._start(s.opts.index)):void 0},cancel:function(){var e=s.coming;e&&!1!==s.trigger("onCancel")&&(s.hideLoading(),s.ajaxLoad&&s.ajaxLoad.abort(),s.ajaxLoad=null,s.imgPreload&&(s.imgPreload.onload=s.imgPreload.onerror=null),e.wrap&&e.wrap.stop(!0,!0).trigger("onReset").remove(),s.coming=null,s.current||s._afterZoomOut(e))},close:function(e){s.cancel(),!1!==s.trigger("beforeClose")&&(s.unbindEvents(),s.isActive&&(s.isOpen&&!0!==e?(s.isOpen=s.isOpened=!1,s.isClosing=!0,n(".fancybox-item, .fancybox-nav").remove(),s.wrap.stop(!0,!0).removeClass("fancybox-opened"),s.transitions[s.current.closeMethod]()):(n(".fancybox-wrap").stop(!0).trigger("onReset").remove(),s._afterZoomOut())))},play:function(e){var t=function(){clearTimeout(s.player.timer)},n=function(){t(),s.current&&s.player.isActive&&(s.player.timer=setTimeout(s.next,s.current.playSpeed))},o=function(){t(),a.unbind(".player"),s.player.isActive=!1,s.trigger("onPlayEnd")};!0===e||!s.player.isActive&&!1!==e?s.current&&(s.current.loop||s.current.index<s.group.length-1)&&(s.player.isActive=!0,a.bind({"onCancel.player beforeClose.player":o,"onUpdate.player":n,"beforeLoad.player":t}),n(),s.trigger("onPlayStart")):o()},next:function(e){var t=s.current;t&&(u(e)||(e=t.direction.next),s.jumpto(t.index+1,e,"next"))},prev:function(e){var t=s.current;t&&(u(e)||(e=t.direction.prev),s.jumpto(t.index-1,e,"prev"))},jumpto:function(e,t,n){var i=s.current;i&&(e=h(e),s.direction=t||i.direction[e>=i.index?"next":"prev"],s.router=n||"jumpto",i.loop&&(0>e&&(e=i.group.length+e%i.group.length),e%=i.group.length),i.group[e]!==o&&(s.cancel(),s._start(e)))},reposition:function(e,t){var o,i=s.current,r=i?i.wrap:null;r&&(o=s._getPosition(t),e&&"scroll"===e.type?(delete o.position,r.stop(!0,!0).animate(o,200)):(r.css(o),i.pos=n.extend({},i.dim,o)))},update:function(e){var t=e&&e.type,n=!t||"orientationchange"===t;n&&(clearTimeout(l),l=null),s.isOpen&&!l&&(l=setTimeout(function(){var o=s.current;o&&!s.isClosing&&(s.wrap.removeClass("fancybox-tmp"),(n||"load"===t||"resize"===t&&o.autoResize)&&s._setDimension(),"scroll"===t&&o.canShrink||s.reposition(e),s.trigger("onUpdate"),l=null)},n&&!p?0:300))},toggle:function(e){s.isOpen&&(s.current.fitToView="boolean"===n.type(e)?e:!s.current.fitToView,p&&(s.wrap.removeAttr("style").addClass("fancybox-tmp"),s.trigger("onUpdate")),s.update())},hideLoading:function(){a.unbind(".loading"),n("#fancybox-loading").remove()},showLoading:function(){var e,t;s.hideLoading(),e=n('<div id="fancybox-loading"><div></div></div>').click(s.cancel).appendTo("body"),a.bind("keydown.loading",function(e){27===(e.which||e.keyCode)&&(e.preventDefault(),s.cancel())}),s.defaults.fixed||(t=s.getViewport(),e.css({position:"absolute",top:.5*t.h+t.y,left:.5*t.w+t.x}))},getViewport:function(){var t=s.current&&s.current.locked||!1,n={x:r.scrollLeft(),y:r.scrollTop()};return t?(n.w=t[0].clientWidth,n.h=t[0].clientHeight):(n.w=p&&e.innerWidth?e.innerWidth:r.width(),n.h=p&&e.innerHeight?e.innerHeight:r.height()),n},unbindEvents:function(){s.wrap&&d(s.wrap)&&s.wrap.unbind(".fb"),a.unbind(".fb"),r.unbind(".fb")},bindEvents:function(){var e,t=s.current;t&&(r.bind("orientationchange.fb"+(p?"":" resize.fb")+(t.autoCenter&&!t.locked?" scroll.fb":""),s.update),(e=t.keys)&&a.bind("keydown.fb",function(i){var r=i.which||i.keyCode,a=i.target||i.srcElement;return(27!==r||!s.coming)&&void(!i.ctrlKey&&!i.altKey&&!i.shiftKey&&!i.metaKey&&(!a||!a.type&&!n(a).is("[contenteditable]"))&&n.each(e,function(e,a){return 1<t.group.length&&a[r]!==o?(s[e](a[r]),i.preventDefault(),!1):-1<n.inArray(r,a)?(s[e](),i.preventDefault(),!1):void 0}))}),n.fn.mousewheel&&t.mouseWheel&&s.wrap.bind("mousewheel.fb",function(e,o,i,r){for(var a=n(e.target||null),c=!1;a.length&&!c&&!a.is(".fancybox-skin")&&!a.is(".fancybox-wrap");)c=a[0]&&!(a[0].style.overflow&&"hidden"===a[0].style.overflow)&&(a[0].clientWidth&&a[0].scrollWidth>a[0].clientWidth||a[0].clientHeight&&a[0].scrollHeight>a[0].clientHeight),a=n(a).parent();0!==o&&!c&&1<s.group.length&&!t.canShrink&&(r>0||i>0?s.prev(r>0?"down":"left"):(0>r||0>i)&&s.next(0>r?"up":"right"),e.preventDefault())}))},trigger:function(e,t){var o,i=t||s.coming||s.current;if(i){if(n.isFunction(i[e])&&(o=i[e].apply(i,Array.prototype.slice.call(arguments,1))),!1===o)return!1;i.helpers&&n.each(i.helpers,function(t,o){o&&s.helpers[t]&&n.isFunction(s.helpers[t][e])&&s.helpers[t][e](n.extend(!0,{},s.helpers[t].defaults,o),i)}),a.trigger(e)}},isImage:function(e){return u(e)&&e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(e){return u(e)&&e.match(/\.(swf)((\?|#).*)?$/i)},_start:function(e){var t,o,i={};if(e=h(e),!(t=s.group[e]||null))return!1;if(t=(i=n.extend(!0,{},s.opts,t)).margin,o=i.padding,"number"===n.type(t)&&(i.margin=[t,t,t,t]),"number"===n.type(o)&&(i.padding=[o,o,o,o]),i.modal&&n.extend(!0,i,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),i.autoSize&&(i.autoWidth=i.autoHeight=!0),"auto"===i.width&&(i.autoWidth=!0),"auto"===i.height&&(i.autoHeight=!0),i.group=s.group,i.index=e,s.coming=i,!1===s.trigger("beforeLoad"))s.coming=null;else{if(o=i.type,t=i.href,!o)return s.coming=null,!(!s.current||!s.router||"jumpto"===s.router)&&(s.current.index=e,s[s.router](s.direction));if(s.isActive=!0,("image"===o||"swf"===o)&&(i.autoHeight=i.autoWidth=!1,i.scrolling="visible"),"image"===o&&(i.aspectRatio=!0),"iframe"===o&&p&&(i.scrolling="scroll"),i.wrap=n(i.tpl.wrap).addClass("fancybox-"+(p?"mobile":"desktop")+" fancybox-type-"+o+" fancybox-tmp "+i.wrapCSS).appendTo(i.parent||"body"),n.extend(i,{skin:n(".fancybox-skin",i.wrap),outer:n(".fancybox-outer",i.wrap),inner:n(".fancybox-inner",i.wrap)}),n.each(["Top","Right","Bottom","Left"],function(e,t){i.skin.css("padding"+t,f(i.padding[e]))}),s.trigger("onReady"),"inline"===o||"html"===o){if(!i.content||!i.content.length)return s._error("content")}else if(!t)return s._error("href");"image"===o?s._loadImage():"ajax"===o?s._loadAjax():"iframe"===o?s._loadIframe():s._afterLoad()}},_error:function(e){n.extend(s.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:e,content:s.coming.tpl.error}),s._afterLoad()},_loadImage:function(){var e=s.imgPreload=new Image;e.onload=function(){this.onload=this.onerror=null,s.coming.width=this.width/s.opts.pixelRatio,s.coming.height=this.height/s.opts.pixelRatio,s._afterLoad()},e.onerror=function(){this.onload=this.onerror=null,s._error("image")},e.src=s.coming.href,!0!==e.complete&&s.showLoading()},_loadAjax:function(){var e=s.coming;s.showLoading(),s.ajaxLoad=n.ajax(n.extend({},e.ajax,{url:e.href,error:function(e,t){s.coming&&"abort"!==t?s._error("ajax",e):s.hideLoading()},success:function(t,n){"success"===n&&(e.content=t,s._afterLoad())}}))},_loadIframe:function(){var e=s.coming,t=n(e.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",p?"auto":e.iframe.scrolling).attr("src",e.href);n(e.wrap).bind("onReset",function(){try{n(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(e){}}),e.iframe.preload&&(s.showLoading(),t.one("load",function(){n(this).data("ready",1),p||n(this).bind("load.fb",s.update),n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),s._afterLoad()})),e.content=t.appendTo(e.inner),e.iframe.preload||s._afterLoad()},_preloadImages:function(){var e,t,n=s.group,o=s.current,i=n.length,r=o.preload?Math.min(o.preload,i-1):0;for(t=1;r>=t;t+=1)"image"===(e=n[(o.index+t)%i]).type&&e.href&&((new Image).src=e.href)},_afterLoad:function(){var e,t,o,i,r,a=s.coming,c=s.current;if(s.hideLoading(),a&&!1!==s.isActive)if(!1===s.trigger("afterLoad",a,c))a.wrap.stop(!0).trigger("onReset").remove(),s.coming=null;else{switch(c&&(s.trigger("beforeChange",c),c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),s.unbindEvents(),e=a.content,t=a.type,o=a.scrolling,n.extend(s,{wrap:a.wrap,skin:a.skin,outer:a.outer,inner:a.inner,current:a,previous:c}),i=a.href,t){case"inline":case"ajax":case"html":a.selector?e=n("<div>").html(e).find(a.selector):d(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",n('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){n(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case"image":e=a.tpl.image.replace("{href}",i);break;case"swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+i+'"></param>',r="",n.each(a.swf,function(t,n){e+='<param name="'+t+'" value="'+n+'"></param>',r+=" "+t+'="'+n+'"'}),e+='<embed src="'+i+'" type="application/x-shockwave-flash" width="100%" height="100%"'+r+"></embed></object>"}(!d(e)||!e.parent().is(a.inner))&&a.inner.append(e),s.trigger("beforeShow"),a.inner.css("overflow","yes"===o?"scroll":"no"===o?"hidden":o),s._setDimension(),s.reposition(),s.isOpen=!1,s.coming=null,s.bindEvents(),s.isOpened?c.prevMethod&&s.transitions[c.prevMethod]():n(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove(),s.transitions[s.isOpened?a.nextMethod:a.openMethod](),s._preloadImages()}},_setDimension:function(){var e,t,o,i,r,a,c,l,p,d=s.getViewport(),u=0,m=!1,w=!1,y=(m=s.wrap,s.skin),x=s.inner,v=s.current,b=(w=v.width,v.height),k=v.minWidth,C=v.minHeight,S=v.maxWidth,T=v.maxHeight,j=v.scrolling,W=v.scrollOutside?v.scrollbarWidth:0,O=v.margin,P=h(O[1]+O[3]),A=h(O[0]+O[2]);if(m.add(y).add(x).width("auto").height("auto").removeClass("fancybox-tmp"),t=P+(O=h(y.outerWidth(!0)-y.width())),o=A+(e=h(y.outerHeight(!0)-y.height())),i=g(w)?(d.w-t)*h(w)/100:w,r=g(b)?(d.h-o)*h(b)/100:b,"iframe"===v.type){if(p=v.content,v.autoHeight&&1===p.data("ready"))try{p[0].contentWindow.document.location&&(x.width(i).height(9999),a=p.contents().find("body"),W&&a.css("overflow-x","hidden"),r=a.outerHeight(!0))}catch(e){}}else(v.autoWidth||v.autoHeight)&&(x.addClass("fancybox-tmp"),v.autoWidth||x.width(i),v.autoHeight||x.height(r),v.autoWidth&&(i=x.width()),v.autoHeight&&(r=x.height()),x.removeClass("fancybox-tmp"));if(w=h(i),b=h(r),l=i/r,k=h(g(k)?h(k,"w")-t:k),S=h(g(S)?h(S,"w")-t:S),C=h(g(C)?h(C,"h")-o:C),a=S,c=T=h(g(T)?h(T,"h")-o:T),v.fitToView&&(S=Math.min(d.w-t,S),T=Math.min(d.h-o,T)),t=d.w-P,A=d.h-A,v.aspectRatio?(w>S&&(b=h((w=S)/l)),b>T&&(w=h((b=T)*l)),k>w&&(b=h((w=k)/l)),C>b&&(w=h((b=C)*l))):(w=Math.max(k,Math.min(w,S)),v.autoHeight&&"iframe"!==v.type&&(x.width(w),b=x.height()),b=Math.max(C,Math.min(b,T))),v.fitToView)if(x.width(w).height(b),m.width(w+O),d=m.width(),P=m.height(),v.aspectRatio)for(;(d>t||P>A)&&w>k&&b>C&&!(19<u++);)b=Math.max(C,Math.min(T,b-10)),k>(w=h(b*l))&&(b=h((w=k)/l)),w>S&&(b=h((w=S)/l)),x.width(w).height(b),m.width(w+O),d=m.width(),P=m.height();else w=Math.max(k,Math.min(w,w-(d-t))),b=Math.max(C,Math.min(b,b-(P-A)));W&&"auto"===j&&r>b&&t>w+O+W&&(w+=W),x.width(w).height(b),m.width(w+O),d=m.width(),P=m.height(),m=(d>t||P>A)&&w>k&&b>C,w=v.aspectRatio?a>w&&c>b&&i>w&&r>b:(a>w||c>b)&&(i>w||r>b),n.extend(v,{dim:{width:f(d),height:f(P)},origWidth:i,origHeight:r,canShrink:m,canExpand:w,wPadding:O,hPadding:e,wrapSpace:P-y.outerHeight(!0),skinSpace:y.height()-b}),!p&&v.autoHeight&&b>C&&T>b&&!w&&x.height("auto")},_getPosition:function(e){var t=s.current,n=s.getViewport(),o=t.margin,i=s.wrap.width()+o[1]+o[3],r=s.wrap.height()+o[0]+o[2];o={position:"absolute",top:o[0],left:o[3]};return t.autoCenter&&t.fixed&&!e&&r<=n.h&&i<=n.w?o.position="fixed":t.locked||(o.top+=n.y,o.left+=n.x),o.top=f(Math.max(o.top,o.top+(n.h-r)*t.topRatio)),o.left=f(Math.max(o.left,o.left+(n.w-i)*t.leftRatio)),o},_afterZoomIn:function(){var e=s.current;e&&(s.isOpen=s.isOpened=!0,s.wrap.css("overflow","visible").addClass("fancybox-opened"),s.update(),(e.closeClick||e.nextClick&&1<s.group.length)&&s.inner.css("cursor","pointer").bind("click.fb",function(t){!n(t.target).is("a")&&!n(t.target).parent().is("a")&&(t.preventDefault(),s[e.closeClick?"close":"next"]())}),e.closeBtn&&n(e.tpl.closeBtn).appendTo(s.skin).bind("click.fb",function(e){e.preventDefault(),s.close()}),e.arrows&&1<s.group.length&&((e.loop||0<e.index)&&n(e.tpl.prev).appendTo(s.outer).bind("click.fb",s.prev),(e.loop||e.index<s.group.length-1)&&n(e.tpl.next).appendTo(s.outer).bind("click.fb",s.next)),s.trigger("afterShow"),e.loop||e.index!==e.group.length-1?s.opts.autoPlay&&!s.player.isActive&&(s.opts.autoPlay=!1,s.play()):s.play(!1))},_afterZoomOut:function(e){e=e||s.current,n(".fancybox-wrap").trigger("onReset").remove(),n.extend(s,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),s.trigger("afterClose",e)}}),s.transitions={getOrigPosition:function(){var e=s.current,t=e.element,n=e.orig,o={},i=50,r=50,a=e.hPadding,c=e.wPadding,l=s.getViewport();return!n&&e.isDom&&t.is(":visible")&&((n=t.find("img:first")).length||(n=t)),d(n)?(o=n.offset(),n.is("img")&&(i=n.outerWidth(),r=n.outerHeight())):(o.top=l.y+(l.h-r)*e.topRatio,o.left=l.x+(l.w-i)*e.leftRatio),("fixed"===s.wrap.css("position")||e.locked)&&(o.top-=l.y,o.left-=l.x),{top:f(o.top-a*e.topRatio),left:f(o.left-c*e.leftRatio),width:f(i+c),height:f(r+a)}},step:function(e,t){var n,o,i=t.prop,r=(o=s.current).wrapSpace,a=o.skinSpace;("width"===i||"height"===i)&&(n=t.end===t.start?1:(e-t.start)/(t.end-t.start),s.isClosing&&(n=1-n),o=e-(o="width"===i?o.wPadding:o.hPadding),s.skin[i](h("width"===i?o:o-r*n)),s.inner[i](h("width"===i?o:o-r*n-a*n)))},zoomIn:function(){var e=s.current,t=e.pos,o=e.openEffect,i="elastic"===o,r=n.extend({opacity:1},t);delete r.position,i?(t=this.getOrigPosition(),e.openOpacity&&(t.opacity=.1)):"fade"===o&&(t.opacity=.1),s.wrap.css(t).animate(r,{duration:"none"===o?0:e.openSpeed,easing:e.openEasing,step:i?this.step:null,complete:s._afterZoomIn})},zoomOut:function(){var e=s.current,t=e.closeEffect,n="elastic"===t,o={opacity:.1};n&&(o=this.getOrigPosition(),e.closeOpacity&&(o.opacity=.1)),s.wrap.animate(o,{duration:"none"===t?0:e.closeSpeed,easing:e.closeEasing,step:n?this.step:null,complete:s._afterZoomOut})},changeIn:function(){var e,t=s.current,n=t.nextEffect,o=t.pos,i={opacity:1},r=s.direction;o.opacity=.1,"elastic"===n&&(e="down"===r||"up"===r?"top":"left","down"===r||"right"===r?(o[e]=f(h(o[e])-200),i[e]="+=200px"):(o[e]=f(h(o[e])+200),i[e]="-=200px")),"none"===n?s._afterZoomIn():s.wrap.css(o).animate(i,{duration:t.nextSpeed,easing:t.nextEasing,complete:s._afterZoomIn})},changeOut:function(){var e=s.previous,t=e.prevEffect,o={opacity:.1},i=s.direction;"elastic"===t&&(o["down"===i||"up"===i?"top":"left"]=("up"===i||"left"===i?"-":"+")+"=200px"),e.wrap.animate(o,{duration:"none"===t?0:e.prevSpeed,easing:e.prevEasing,complete:function(){n(this).trigger("onReset").remove()}})}},s.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!p,fixed:!0},overlay:null,fixed:!1,el:n("html"),create:function(e){e=n.extend({},this.defaults,e),this.overlay&&this.close(),this.overlay=n('<div class="fancybox-overlay"></div>').appendTo(s.coming?s.coming.parent:e.parent),this.fixed=!1,e.fixed&&s.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(e){var t=this;e=n.extend({},this.defaults,e),this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(e),this.fixed||(r.bind("resize.overlay",n.proxy(this.update,this)),this.update()),e.closeClick&&this.overlay.bind("click.overlay",function(e){return n(e.target).hasClass("fancybox-overlay")?(s.isActive?s.close():t.close(),!1):void 0}),this.overlay.css(e.css).show()},close:function(){var e,t;r.unbind("resize.overlay"),this.el.hasClass("fancybox-lock")&&(n(".fancybox-margin").removeClass("fancybox-margin"),e=r.scrollTop(),t=r.scrollLeft(),this.el.removeClass("fancybox-lock"),r.scrollTop(e).scrollLeft(t)),n(".fancybox-overlay").remove().hide(),n.extend(this,{overlay:null,fixed:!1})},update:function(){var e,n="100%";this.overlay.width(n).height("100%"),c?(e=Math.max(t.documentElement.offsetWidth,t.body.offsetWidth),a.width()>e&&(n=a.width())):a.width()>r.width()&&(n=a.width()),this.overlay.width(n).height(a.height())},onReady:function(e,t){var o=this.overlay;n(".fancybox-overlay").stop(!0,!0),o||this.create(e),e.locked&&this.fixed&&t.fixed&&(o||(this.margin=a.height()>r.height()&&n("html").css("margin-right").replace("px","")),t.locked=this.overlay.append(t.wrap),t.fixed=!1),!0===e.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(e,t){var o,i;t.locked&&(!1!==this.margin&&(n("*").filter(function(){return"fixed"===n(this).css("position")&&!n(this).hasClass("fancybox-overlay")&&!n(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),o=r.scrollTop(),i=r.scrollLeft(),this.el.addClass("fancybox-lock"),r.scrollTop(o).scrollLeft(i)),this.open(e)},onUpdate:function(){this.fixed||this.update()},afterClose:function(e){this.overlay&&!s.coming&&this.overlay.fadeOut(e.speedOut,n.proxy(this.close,this))}},s.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(e){var t=s.current,o=t.title,i=e.type;if(n.isFunction(o)&&(o=o.call(t.element,t)),u(o)&&""!==n.trim(o)){switch(t=n('<div class="fancybox-title fancybox-title-'+i+'-wrap">'+o+"</div>"),i){case"inside":i=s.skin;break;case"outside":i=s.wrap;break;case"over":i=s.inner;break;default:i=s.skin,t.appendTo("body"),c&&t.width(t.width()),t.wrapInner('<span class="child"></span>'),s.current.margin[2]+=Math.abs(h(t.css("margin-bottom")))}t["top"===e.position?"prependTo":"appendTo"](i)}}},n.fn.fancybox=function(e){var t,o=n(this),i=this.selector||"",r=function(r){var a,c,l=n(this).blur(),p=t;!r.ctrlKey&&!r.altKey&&!r.shiftKey&&!r.metaKey&&!l.is(".fancybox-wrap")&&(a=e.groupAttr||"data-fancybox-group",(c=l.attr(a))||(a="rel",c=l.get(0)[a]),c&&""!==c&&"nofollow"!==c&&(p=(l=(l=i.length?n(i):o).filter("["+a+'="'+c+'"]')).index(this)),e.index=p,!1!==s.open(l,e)&&r.preventDefault())};return t=(e=e||{}).index||0,i&&!1!==e.live?a.undelegate(i,"click.fb-start").delegate(i+":not('.fancybox-item, .fancybox-nav')","click.fb-start",r):o.unbind("click.fb-start").bind("click.fb-start",r),this.filter("[data-fancybox-start=1]").trigger("click"),this},a.ready(function(){var t,r;if(n.scrollbarWidth===o&&(n.scrollbarWidth=function(){var e=n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),t=(t=e.children()).innerWidth()-t.height(99).innerWidth();return e.remove(),t}),n.support.fixedPosition===o){t=n.support;var a=20===(r=n('<div style="position:fixed;top:20px;"></div>').appendTo("body"))[0].offsetTop||15===r[0].offsetTop;r.remove(),t.fixedPosition=a}n.extend(s.defaults,{scrollbarWidth:n.scrollbarWidth(),fixed:n.support.fixedPosition,parent:n("body")}),t=n(e).width(),i.addClass("fancybox-lock-test"),r=n(e).width(),i.removeClass("fancybox-lock-test"),n("<style type='text/css'>.fancybox-margin{margin-right:"+(r-t)+"px;}</style>").appendTo("head")})}(window,document,jQuery),$(document).ready(function(){$(".fancybox").fancybox({padding:40,prevEffect:"none",nextEffect:"none",helpers:{title:{type:"inside"}},afterLoad:function(){this.title='<p class="g-font-size-smaller">'+(this.index+1)+"/"+this.group.length+"</p>"+(this.title?this.title:"")}}),$(".fancy-box-trigger").click(function(){event.target.id})});